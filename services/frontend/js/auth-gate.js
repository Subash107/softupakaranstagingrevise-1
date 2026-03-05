/** why: prevent non-admins from seeing admin link client-side */
(function(){
  function parseJwt(token){
    try {
      const base = token.split('.')[1];
      const json = decodeURIComponent(atob(base).split('').map(c => '%'+('00'+c.charCodeAt(0).toString(16)).slice(-2)).join(''));
      return JSON.parse(json);
    } catch(e){ return null; }
  }
  function normalizeBase(v){
    return (v && v.trim()) ? v.trim().replace(/\/$/, "") : "";
  }
  function isLocalHost(host){
    return host === "localhost" || host === "127.0.0.1";
  }
  function getApiBase(){
    var saved = "";
    try { saved = normalizeBase(localStorage.getItem("SPK_API_BASE") || ""); } catch(_) {}
    var meta = normalizeBase(window.API_BASE || "");
    var host = window.location && window.location.hostname ? window.location.hostname : "";
    if (isLocalHost(host)) {
      return saved || meta || "http://localhost:4000";
    }
    return saved || meta;
  }
  function getStoredToken(){
    try { return localStorage.getItem("token") || sessionStorage.getItem("token") || ""; }
    catch(_) { return ""; }
  }
  function authHeaders(token){
    if (!token || token === "local-google") return {};
    return { Authorization: "Bearer " + token };
  }

  var link = document.getElementById('adminLink');
  if (!link) return;
  link.style.display = 'none';

  var token = getStoredToken();
  var payload = token ? parseJwt(token) : null;
  if (payload && (payload.role === 'admin' || payload.isAdmin === true)) {
    link.style.display = '';
    return;
  }

  var base = getApiBase();
  if (!base) return;

  async function resolveAdmin() {
    try {
      var headers = authHeaders(getStoredToken());
      var res = await fetch(base + "/api/me", { credentials: "include", headers: headers });
      if (res.status === 401) {
        var refreshRes = await fetch(base + "/api/auth/refresh", { method: "POST", credentials: "include" });
        var refreshBody = await refreshRes.json().catch(function(){ return {}; });
        if (refreshBody && refreshBody.token) {
          try { localStorage.setItem("token", refreshBody.token); } catch(_) {}
        }
        if (refreshRes.ok) {
          headers = authHeaders(getStoredToken());
          res = await fetch(base + "/api/me", { credentials: "include", headers: headers });
        }
      }
      if (!res.ok) return;
      var me = await res.json().catch(function(){ return null; });
      if (me && String(me.role || "").toLowerCase() === "admin") {
        link.style.display = '';
      }
    } catch (_) {}
  }

  resolveAdmin();
})();
