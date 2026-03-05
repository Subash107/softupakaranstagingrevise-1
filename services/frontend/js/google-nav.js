// why: render Google button, exchange credential with backend, store JWT
(function(){
function normalizeBase(url){ return String(url || "").trim().replace(/\/$/, ""); }
function normalizeOrigin(value){
  if(!value) return "";
  try{
    return new URL(value).origin;
  }catch(_){
    return String(value || "").trim().replace(/\/$/, "");
  }
}
function allowedOriginsList(){
  var list = Array.isArray(window.GOOGLE_AUTHORIZED_ORIGINS) ? window.GOOGLE_AUTHORIZED_ORIGINS.slice() : [];
  return list
    .map(normalizeOrigin)
    .filter(Boolean);
}
function isOriginAuthorized(){
  var host = window.location && window.location.hostname ? window.location.hostname : "";
  if (host === "localhost" || host === "127.0.0.1") return true;
  var allowed = allowedOriginsList();
  if(!allowed.length) return true;
  var current = normalizeOrigin(window.location.origin);
  if(!current) return true;
  if(allowed.includes(current)) return true;
  try {
    var parsedCurrent = new URL(current);
    return allowed.some(function(entry){
      try {
        var parsedEntry = new URL(entry);
        if(parsedEntry.protocol !== parsedCurrent.protocol) return false;
        if(parsedEntry.hostname !== parsedCurrent.hostname) return false;
        return !parsedEntry.port;
      } catch(_){
        return false;
      }
    });
  } catch(_){
    return false;
  }
}
function renderOriginMismatch(holder){
  if(!holder) return;
  var origin = window.location.origin || "this host";
  holder.classList.add('google-nav-btn--blocked');
  holder.innerHTML = `
    <div class="google-nav-warning" role="alert">
      <span aria-hidden="true">⚠️</span>
      <div>
        Google sign-in is blocked because ${origin} is not listed among the OAuth client's JavaScript origins. Add this origin in the Google Cloud console (see docs/deployment.md) and mirror it in <code>google-authorized-origins</code> or <code>SPK_GOOGLE_AUTHORIZED_ORIGINS</code>.
      </div>
    </div>
  `;
}
  function isLocalHost(){
    var host = window.location && window.location.hostname ? window.location.hostname : "";
    return host === "localhost" || host === "127.0.0.1";
  }
  function getApiBases(){
    var bases = [];
    try {
      var saved = localStorage.getItem("SPK_API_BASE");
      if (saved) bases.push(saved);
    } catch(_) {}
    if (window.API_BASE) bases.push(window.API_BASE);
    if (isLocalHost()) bases.push("http://localhost:4000");
    var seen = {};
    return bases
      .map(normalizeBase)
      .filter(function(base){
        if (!base || seen[base]) return false;
        seen[base] = true;
        return true;
      });
  }
  function clientId(){
    return (window.GOOGLE_CLIENT_ID || "").trim();
  }
  function setToken(t){ if(!t) return; localStorage.setItem('token', t); }
  function getStoredToken(){ return localStorage.getItem('token') || sessionStorage.getItem('token') || ""; }
  function authHeaders(){
    var token = getStoredToken();
    if (!token || token === "local-google") return {};
    return { Authorization: "Bearer " + token };
  }
  function ready(fn){ if(document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }
  var gisLoadPromise = null;
  function ensureGoogleGisLoaded(){
    if (window.google && window.google.accounts && window.google.accounts.id) return Promise.resolve();
    if (gisLoadPromise) return gisLoadPromise;
    gisLoadPromise = new Promise(function(resolve, reject){
      var src = "https://accounts.google.com/gsi/client";
      var existing = document.querySelector('script[src="' + src + '"]');
      if (existing) {
        existing.addEventListener("load", function(){ resolve(); }, { once: true });
        existing.addEventListener("error", function(){ reject(new Error("GIS script failed")); }, { once: true });
        return;
      }
      var script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.defer = true;
      script.onload = function(){ resolve(); };
      script.onerror = function(){ reject(new Error("GIS script failed")); };
      document.head.appendChild(script);
    });
    return gisLoadPromise;
  }

  function parseJwtPayload(token){
    try {
      var base = String(token || "").split('.')[1] || "";
      base = base.replace(/-/g, '+').replace(/_/g, '/');
      while (base.length % 4) base += '=';
      var json = decodeURIComponent(atob(base).split('').map(function(c){
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(json);
    } catch(_) { return null; }
  }

  function setLocalSession(payload){
    if(!payload || !payload.email) return false;
    var now = new Date().toISOString();
    var profile = {
      name: payload.name || payload.given_name || "",
      email: payload.email || "",
      picture: payload.picture || "",
      created_at: payload.iat ? new Date(payload.iat * 1000).toISOString() : now,
      updated_at: now
    };
    try {
      localStorage.setItem("SPK_LOCAL_PROFILE", JSON.stringify(profile));
      localStorage.setItem("SPK_AUTH_SOURCE", "google-local");
      localStorage.setItem("token", "local-google");
      return true;
    } catch(_) { return false; }
  }

  function showError(msg){
    try { alert(msg); } catch(_) {}
  }

  async function resolveSessionUser(bases){
    for (var i = 0; i < bases.length; i++) {
      var base = bases[i];
      try {
        var headers = authHeaders();
        var res = await fetch(base + "/api/me", { credentials: "include", headers: headers });
        if (res.status === 401) {
          var refresh = await fetch(base + "/api/auth/refresh", { method: "POST", credentials: "include" });
          var refreshed = await refresh.json().catch(function(){ return {}; });
          if (refreshed && refreshed.token) setToken(refreshed.token);
          if (refresh.ok) {
            headers = authHeaders();
            res = await fetch(base + "/api/me", { credentials: "include", headers: headers });
          }
        }
        if (res.ok) return true;
      } catch (_) {}
    }
    return false;
  }

  async function mountButton(){
    var host = window.location && window.location.hostname ? window.location.hostname : "";
    var port = window.location && window.location.port ? window.location.port : "";
    if ((host === "localhost" || host === "127.0.0.1") && port === "8080") {
      var target = window.location.protocol + "//" + host + ":8085" + window.location.pathname + window.location.search + window.location.hash;
      if (target !== window.location.href) {
        window.location.replace(target);
        return;
      }
    }
    var nav = document.querySelector('.nav .navlinks');
    if (!nav) return;

    var holder = document.getElementById('googleNavBtn');
    if (!holder) {
      holder = document.createElement('div');
      holder.id = 'googleNavBtn';
      holder.className = 'google-nav-btn';
      nav.appendChild(holder);
    }

    var mobileHolder = document.getElementById('mobileGoogleNavBtn');
    var holders = [holder];
    if (mobileHolder) holders.push(mobileHolder);

    if(!isOriginAuthorized()){
      holders.forEach(function(h){ renderOriginMismatch(h); });
      return;
    }

    if (!holders.length) return;

    function renderUserChip(target){
      target.classList.add('user-chip');
      target.innerHTML = '<a href="profile.html" class="user-chip-link" aria-label="Profile">👤</a>';
    }

    var bases = getApiBases();
    var hasSession = await resolveSessionUser(bases);
    if (hasSession) {
      holders.forEach(renderUserChip);
      return;
    }
    // Ensure GIS loaded
    function init(){
      var cid = clientId();
      if (!cid){
        console.error("Missing GOOGLE_CLIENT_ID");
        showError("Google Sign-in not configured. Set GOOGLE_CLIENT_ID.");
        return;
      }
      google.accounts.id.initialize({
        client_id: cid,
        ux_mode: "popup",
        callback: async (response) => {
          var lastErr = null;
          var lastMsg = null;
          var sawNetwork = false;
          for (var i = 0; i < bases.length; i++) {
            var base = bases[i];
            try {
              const res = await fetch(base + "/api/auth/google", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ credential: response.credential }),
              });
              const data = await res.json().catch(() => ({}));
              if (!res.ok) {
                var msg = data && data.error ? String(data.error) : ("HTTP " + res.status);
                console.error("Google exchange failed:", data);
                if (res.status === 404 || res.status === 405) {
                  lastMsg = "Google sign-in failed. Configure API base URL.";
                } else {
                  lastMsg = "Google sign-in failed: " + msg;
                }
                continue;
              }
              if (data && data.token) setToken(data.token);
              window.location.href = 'index.html';
              return;
            } catch (e) {
              lastErr = e;
              sawNetwork = true;
            }
          }
          var localOk = false;
          var payload = response && response.credential ? parseJwtPayload(response.credential) : null;
          if (payload) localOk = setLocalSession(payload);
          if (localOk) {
            window.location.href = 'index.html';
            return;
          }
          console.error('Google login failed', lastErr);
          if (!lastMsg) {
            lastMsg = sawNetwork
              ? 'Google sign-in failed. Backend unreachable.'
              : 'Google sign-in failed. Check backend.';
          }
          showError(lastMsg);
        }
      });
      var renderOpts = { theme: 'filled_black', type: 'icon', size: 'medium', shape: 'circle', logo_alignment: 'center' };
      holders.forEach(function(h){
        google.accounts.id.renderButton(h, renderOpts);
      });
    }

    try {
      await ensureGoogleGisLoaded();
      init();
    } catch (_) {
      console.error("GIS script not loaded");
      showError("Google Sign-in script failed to load. Please refresh and try again.");
    }
  }

  ready(mountButton);
})();
