(function(){
'use strict';

/* ── 1. Smart Header (hide on scroll down, reappear on scroll up) ── */
function initSmartHeader(){
  var hdr=document.querySelector('header.topbar');
  if(!hdr) return;
  var lastY=0,pending=false;
  window.addEventListener('scroll',function(){
    if(pending) return; pending=true;
    requestAnimationFrame(function(){
      var y=window.scrollY;
      var searchActive=document.activeElement&&document.activeElement.hasAttribute('data-search');
      var mobActive=hdr.classList.contains('mob-search-active');
      if(y<80||searchActive||mobActive){ hdr.classList.remove('hdrHidden'); }
      else if(y>lastY+8){ hdr.classList.add('hdrHidden'); }
      else if(y<lastY-8){ hdr.classList.remove('hdrHidden'); }
      lastY=y; pending=false;
    });
  },{passive:true});
}

/* ── 2. Page Load Progress Bar ── */
function initPageProgress(){
  var bar=document.createElement('div');
  bar.id='pgBar';
  document.body.appendChild(bar);
  var pct=18;
  bar.style.width=pct+'%';
  var iv=setInterval(function(){ pct=Math.min(88,pct+Math.random()*10); bar.style.width=pct+'%'; },280);
  function finish(){
    clearInterval(iv);
    bar.style.width='100%';
    setTimeout(function(){ bar.style.opacity='0'; },350);
    setTimeout(function(){ if(bar.parentNode) bar.parentNode.removeChild(bar); },800);
  }
  window.addEventListener('load',finish);
  // Also finish when products appear (API-driven pages)
  new MutationObserver(function(m,obs){
    if(document.querySelector('.card.popular-card,.productCard')){ obs.disconnect(); finish(); }
  }).observe(document.body,{childList:true,subtree:true});
}

/* ── 3. Sort Bar (category page) ── */
function initSortBar(){
  var grid=document.querySelector('[data-category-products]');
  if(!grid) return;
  var bar=document.createElement('div');
  bar.className='sortBar';
  var labels=['Default','Price ↑','Price ↓','A–Z'];
  var keys=['default','low','high','alpha'];
  bar.innerHTML='<span class="sortLabel">Sort by:</span>'+
    labels.map(function(l,i){ return '<button class="sortBtn'+(i===0?' sortActive':'')+'" data-sort="'+keys[i]+'">'+l+'</button>'; }).join('');
  grid.parentNode.insertBefore(bar,grid);
  var original=[], current='default';
  function px(card){ var el=card.querySelector('.priceMain strong,.price strong'); return el?parseFloat(el.textContent.replace(/[^0-9.]/g,''))||0:0; }
  function title(card){ return ((card.querySelector('.cardTitle')||{}).textContent||'').trim(); }
  function doSort(type){
    var cs=Array.from(grid.querySelectorAll('.card[data-preview-id]'));
    if(!cs.length) return;
    if(original.length!==cs.length) original=cs.map(function(c){ return c.getAttribute('data-preview-id'); });
    var s;
    if(type==='low') s=cs.slice().sort(function(a,b){ return px(a)-px(b); });
    else if(type==='high') s=cs.slice().sort(function(a,b){ return px(b)-px(a); });
    else if(type==='alpha') s=cs.slice().sort(function(a,b){ return title(a).localeCompare(title(b)); });
    else s=cs.slice().sort(function(a,b){ return original.indexOf(a.getAttribute('data-preview-id'))-original.indexOf(b.getAttribute('data-preview-id')); });
    s.forEach(function(c){ grid.appendChild(c); });
  }
  bar.addEventListener('click',function(e){
    var btn=e.target.closest('.sortBtn'); if(!btn) return;
    bar.querySelectorAll('.sortBtn').forEach(function(b){ b.classList.remove('sortActive'); });
    btn.classList.add('sortActive');
    current=btn.getAttribute('data-sort');
    doSort(current);
  });
  new MutationObserver(function(){
    if(current!=='default') setTimeout(function(){ doSort(current); },60);
  }).observe(grid,{childList:true});
}

/* ── 4. Copy Payment Number ── */
function initCopyPayment(){
  var payBody=document.querySelector('[data-pay-body]');
  if(!payBody) return;
  var PHONE=/\b9[6-9]\d{8}\b/;
  function inject(){
    payBody.querySelectorAll('p,span,div,h4,li').forEach(function(el){
      if(el.querySelector('.cpyBtn')||el.children.length>3) return;
      if(!PHONE.test(el.textContent)) return;
      var num=el.textContent.match(PHONE)[0];
      var btn=document.createElement('button');
      btn.className='cpyBtn'; btn.type='button';
      btn.setAttribute('data-cv',num); btn.textContent='Copy';
      el.appendChild(btn);
    });
  }
  new MutationObserver(inject).observe(payBody,{childList:true,subtree:true,characterData:true});
  payBody.addEventListener('click',function(e){
    var btn=e.target.closest('.cpyBtn'); if(!btn) return;
    var txt=btn.getAttribute('data-cv');
    var ok=function(){ btn.textContent='✓ Copied'; btn.classList.add('cpyCopied'); setTimeout(function(){ btn.textContent='Copy'; btn.classList.remove('cpyCopied'); },2000); };
    if(navigator.clipboard){ navigator.clipboard.writeText(txt).then(ok).catch(fb); } else fb();
    function fb(){ var ta=document.createElement('textarea'); ta.value=txt; ta.style.cssText='position:fixed;opacity:0'; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); ok(); }
  });
}

/* ── 5. Cart Badge Bounce ── */
function initCartBadge(){
  document.querySelectorAll('[data-cart-count]').forEach(function(badge){
    new MutationObserver(function(){
      badge.classList.remove('badgePop');
      void badge.offsetWidth;
      badge.classList.add('badgePop');
    }).observe(badge,{childList:true,characterData:true,subtree:true});
  });
}

/* ── 6. Scroll Progress Bar (long pages) ── */
function initScrollProgress(){
  if(!/terms|privacy|about|blog/.test(location.pathname)) return;
  var bar=document.createElement('div');
  bar.id='readBar';
  document.body.appendChild(bar);
  function upd(){ var d=document.documentElement.scrollHeight-window.innerHeight; bar.style.width=(d>0?Math.min(100,window.scrollY/d*100):0)+'%'; }
  window.addEventListener('scroll',upd,{passive:true}); upd();
}

/* ── 7. Offline / Online Toast ── */
function initOfflineToast(){
  function show(online){
    var old=document.getElementById('netToast'); if(old) old.remove();
    var el=document.createElement('div');
    el.id='netToast';
    el.className='netToast '+(online?'netOnline':'netOffline');
    el.textContent=online?'✓  Back online':'⚠  No internet connection';
    document.body.appendChild(el);
    requestAnimationFrame(function(){ el.classList.add('netShow'); });
    if(online) setTimeout(function(){ el.classList.remove('netShow'); setTimeout(function(){ if(el.parentNode) el.parentNode.removeChild(el); },400); },3000);
  }
  window.addEventListener('offline',function(){ show(false); });
  window.addEventListener('online',function(){ show(true); });
}

/* ── 8. Image Lightbox ── */
function initLightbox(){
  var ov=document.createElement('div');
  ov.id='imgLb'; ov.setAttribute('role','dialog'); ov.setAttribute('aria-modal','true');
  ov.innerHTML='<button class="lbX" aria-label="Close">✕</button><img class="lbImg" src="" alt=""/>';
  document.body.appendChild(ov);
  var im=ov.querySelector('.lbImg');
  function open(src,alt){ im.src=src; im.alt=alt||''; ov.classList.add('lbOn'); document.body.style.overflow='hidden'; ov.querySelector('.lbX').focus(); }
  function close(){ ov.classList.remove('lbOn'); document.body.style.overflow=''; setTimeout(function(){ im.src=''; },300); }
  ov.querySelector('.lbX').addEventListener('click',close);
  ov.addEventListener('click',function(e){ if(e.target===ov) close(); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&ov.classList.contains('lbOn')) close(); });
  document.addEventListener('click',function(e){
    var t=e.target.closest('.hero-img');
    if(!t||t.tagName!=='IMG') return;
    var src=t.getAttribute('data-src')||t.src||'';
    if(!src||/placeholder|data:image\/svg/.test(src)) return;
    e.preventDefault(); open(src,t.alt);
  });
  new MutationObserver(function(){
    document.querySelectorAll('.hero-img:not([data-lb])').forEach(function(img){
      img.setAttribute('data-lb','1'); img.style.cursor='zoom-in'; img.title='Tap to zoom';
    });
  }).observe(document.body,{childList:true,subtree:true});
}

/* ── 9. Animated Stat Counters (About page) ── */
function initCounters(){
  var els=document.querySelectorAll('.about-stat__num');
  if(!els.length) return;
  function run(el){
    var raw=el.textContent.trim();
    var n=parseInt(raw.replace(/[^0-9]/g,''),10);
    var suf=raw.replace(/^[\d,]+/,'');
    if(!n) return;
    var dur=1400,t0=Date.now();
    (function fr(){
      var p=Math.min((Date.now()-t0)/dur,1), e=1-Math.pow(1-p,3);
      el.textContent=Math.round(n*e).toLocaleString()+suf;
      if(p<1) requestAnimationFrame(fr);
    })();
  }
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){ if(!en.isIntersecting) return; run(en.target); io.unobserve(en.target); });
  },{threshold:0.4});
  els.forEach(function(el){ io.observe(el); });
}

/* ── 10. Share Cart via WhatsApp ── */
function initShareCart(){
  var KEY='softupakaran_cart_v1';
  function getCart(){ try{ return JSON.parse(localStorage.getItem(KEY)||'[]'); }catch(e){ return []; } }
  var footer=document.querySelector('[data-cart-footer]');
  if(!footer) return;
  new MutationObserver(function(){
    if(footer.querySelector('.cartShareBtn')) return;
    if(!footer.querySelector('.btn.primary,.btn[data-pay-open]') ) return;
    var cart=getCart(); if(!cart.length) return;
    var btn=document.createElement('button');
    btn.className='btn cartShareBtn'; btn.type='button';
    btn.innerHTML='📤 Share cart via WhatsApp';
    btn.addEventListener('click',function(){
      var c=getCart(); if(!c.length) return;
      var lines=c.map(function(i){ return '• '+(i.name||i.id)+' ×'+(i.qty||1)+' — Rs. '+(((i.price||0)*(i.qty||1)).toLocaleString()); });
      var total=c.reduce(function(s,i){ return s+(i.price||0)*(i.qty||1); },0);
      var msg='My cart on SoftUpakaran:\n'+lines.join('\n')+'\n\nTotal: Rs. '+total.toLocaleString()+'\n\nhttps://softupakaran.com';
      window.open('https://wa.me/?text='+encodeURIComponent(msg),'_blank','noreferrer');
    });
    footer.insertBefore(btn,footer.firstChild);
  }).observe(footer,{childList:true,subtree:true});
}

/* ── Init ── */
function init(){
  initSmartHeader();
  initPageProgress();
  initSortBar();
  initCopyPayment();
  initCartBadge();
  initScrollProgress();
  initOfflineToast();
  initLightbox();
  initCounters();
  initShareCart();
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);
else init();
})();
