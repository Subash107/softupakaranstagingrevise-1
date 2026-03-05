// runtime env (override in production by editing this file)
function parseOriginList(value){
  if(!value) return [];
  return value.split(/[,\s]+/)
    .map(function(item){ return item ? item.trim() : ""; })
    .filter(Boolean);
}

(function(){
  var host = window.location && window.location.hostname ? window.location.hostname : "";
  var isLocal = host === "localhost" || host === "127.0.0.1";
  var defaultGoogleOrigins = [
    "http://localhost:8080",
    "http://127.0.0.1:8080",
    "http://localhost:8085",
    "http://127.0.0.1:8085",
    "https://softupakaran.vercel.app",
    "https://softupakaran-cf67l89wj-subash107s-projects.vercel.app",
    "https://subash107.github.io/softupakaran/"
  ];

  // Allow overriding API_BASE via localStorage
  try {
    var lb = localStorage.getItem("SPK_API_BASE");
    if (lb) window.API_BASE = lb;
  } catch(_) {}
  // Allow <meta name="api-base" content="..."> to set API base (only when not on localhost so dev uses local API)
  var apiMeta = document.querySelector('meta[name="api-base"]');
  if (!isLocal && apiMeta && apiMeta.content) window.API_BASE = apiMeta.content;
  // default API base
  window.API_BASE = window.API_BASE || (isLocal ? "http://localhost:4000" : "");

  // Allow <meta name="google-client-id" content="..."> to set client id
  var meta = document.querySelector('meta[name="google-client-id"]');
  var metaId = meta ? meta.content : null;
  // Or from localStorage
  var lsId = null;
  try { lsId = localStorage.getItem("SPK_GOOGLE_CLIENT_ID"); } catch(_) {}
  window.GOOGLE_CLIENT_ID = window.GOOGLE_CLIENT_ID || metaId || lsId || "161160759250-tvcu3a09i8gtdeaia6gpk04jo343oiet.apps.googleusercontent.com";

  // Allow listing the authorized OAuth origins via meta/localStorage for the warning banner
  var origins = [];
  var originsMeta = document.querySelector('meta[name="google-authorized-origins"]');
  if(originsMeta && originsMeta.content){
    origins = origins.concat(parseOriginList(originsMeta.content));
  }
  try {
    var storedOrigins = localStorage.getItem("SPK_GOOGLE_AUTHORIZED_ORIGINS");
    if(storedOrigins){
      origins = origins.concat(parseOriginList(storedOrigins));
    }
  } catch(_){}
  if(!origins.length){
    origins = defaultGoogleOrigins.slice();
  }
  window.GOOGLE_AUTHORIZED_ORIGINS = origins.filter(Boolean);
})();
