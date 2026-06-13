(function(){
'use strict';

/* ── 1. Recently Viewed Products ── */
var RV_KEY='su_rv';
function getRV(){ try{ return JSON.parse(localStorage.getItem(RV_KEY)||'[]'); }catch(e){ return []; } }
function saveRV(p){ if(!p||!p.id) return; var rv=getRV().filter(function(x){ return x.id!==p.id; }).slice(0,7); rv.unshift(p); localStorage.setItem(RV_KEY,JSON.stringify(rv)); }

function initRecentlyViewed(){
  var isProduct=/product/.test(location.pathname+location.hash);

  if(isProduct){
    // Capture product when it loads into the page
    var done=false;
    new MutationObserver(function(){
      if(done) return;
      var nameEl=document.querySelector('.h1');
      var priceEl=document.querySelector('.badge:not(.delivery-badge):not(.brand-badge):not(.nav-badge)');
      var imgEl=document.querySelector('.hero-img');
      var id=decodeURIComponent((location.hash||'').replace('#',''));
      if(nameEl&&nameEl.textContent.trim()&&id){
        done=true;
        saveRV({ id:id, name:nameEl.textContent.trim(), price:priceEl?priceEl.textContent.trim():'', img:imgEl?(imgEl.getAttribute('data-src')||imgEl.src):'' });
      }
    }).observe(document.body,{childList:true,subtree:true,characterData:true});
    return;
  }

  // On home/category: render strip
  var rv=getRV();
  if(rv.length<2) return;
  var strip=document.createElement('section');
  strip.className='rvStrip section';
  strip.innerHTML='<div class="sectionHeader"><div><h2>Recently Viewed</h2><p>Products you browsed</p></div></div>'+
    '<div class="rvScroll">'+rv.map(function(p){
      var initial=(p.name||'?').charAt(0).toUpperCase();
      var imgHtml=p.img&&!/placeholder|data:image\/svg/.test(p.img)
        ?'<img src="'+p.img+'" alt="'+p.name+'" loading="lazy" style="width:100%;height:100%;object-fit:cover"/>'
        :'<span style="font-size:22px;font-weight:800;color:rgba(255,255,255,.4)">'+initial+'</span>';
      return '<a class="rvCard" href="product.html#'+encodeURIComponent(p.id)+'">'+'<div class="rvThumb">'+imgHtml+'</div>'+'<span class="rvName">'+p.name+'</span>'+(p.price?'<span class="rvPrice">'+p.price+'</span>':'')+'</a>';
    }).join('')+'</div>';
  var main=document.querySelector('main');
  if(main){
    var sec=main.querySelector('.section');
    main.insertBefore(strip,sec?sec.nextSibling:null);
  }
}

/* ── 2. Native Web Share API ── */
function initNativeShare(){
  if(!/product/.test(location.pathname+location.hash)) return;
  new MutationObserver(function(m,obs){
    var actions=document.querySelector('.heroActions');
    if(!actions||actions.querySelector('.shareBtn')) return;
    obs.disconnect();
    var nameEl=document.querySelector('.h1');
    var btn=document.createElement('button');
    btn.className='btn shareBtn'; btn.type='button';
    btn.innerHTML='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg> Share';
    btn.addEventListener('click',function(){
      var name=(nameEl?nameEl.textContent.trim():'SoftUpakaran Product');
      var url=location.href;
      if(navigator.share){ navigator.share({title:name,text:'Check this out: '+name,url:url}).catch(function(){}); }
      else { window.open('https://wa.me/?text='+encodeURIComponent('Check this out on SoftUpakaran: '+name+'\n'+url),'_blank','noreferrer'); }
    });
    actions.appendChild(btn);
  }).observe(document.body,{childList:true,subtree:true});
}

/* ── 3. Haptic Feedback on Add to Cart ── */
function initHaptic(){
  if(!navigator.vibrate) return;
  document.addEventListener('click',function(e){
    if(e.target.closest('[data-add],[data-qv-add],[data-pcomp-add],.qaOverlay')) navigator.vibrate(28);
  });
}

/* ── 4. Dynamic Theme-Color Meta Tag ── */
function initThemeColor(){
  var meta=document.querySelector('meta[name="theme-color"]');
  if(!meta){ meta=document.createElement('meta'); meta.name='theme-color'; document.head.appendChild(meta); }
  function upd(){ meta.content=document.documentElement.getAttribute('data-theme')==='light'?'#f4f4f8':'#0b0f1a'; }
  upd();
  new MutationObserver(upd).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
}

/* ── 5. PWA Install Banner ── */
function initInstallBanner(){
  if(localStorage.getItem('su_pwa_off')) return;
  var deferred=null;
  window.addEventListener('beforeinstallprompt',function(e){
    e.preventDefault(); deferred=e;
    setTimeout(show,25000);
  });
  function show(){
    if(document.getElementById('pwaBanner')) return;
    var el=document.createElement('div');
    el.id='pwaBanner';
    el.innerHTML='<div class="pwaInner"><img src="assets/logo.svg" width="30" height="30" alt=""/><div class="pwaText"><strong>Add to Home Screen</strong><span>Quick access — works like an app</span></div><button class="btn primary pwaAdd" type="button">Add</button><button class="pwaDismiss" aria-label="Dismiss" type="button">✕</button></div>';
    document.body.appendChild(el);
    requestAnimationFrame(function(){ el.classList.add('pwaOn'); });
    el.querySelector('.pwaAdd').addEventListener('click',function(){
      el.remove();
      if(deferred){ deferred.prompt(); deferred.userChoice.then(function(){ deferred=null; }); }
    });
    el.querySelector('.pwaDismiss').addEventListener('click',function(){
      el.classList.remove('pwaOn');
      setTimeout(function(){ el.remove(); },350);
      localStorage.setItem('su_pwa_off','1');
    });
  }
}

/* ── 6. Scroll Reveal Animations ── */
function initScrollReveal(){
  var SEL='.trustBadge,.about-value,.about-product,.about-tl-item,.le-card,.le-coming-soon';
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(!en.isIntersecting) return;
      en.target.classList.remove('srHide');
      io.unobserve(en.target);
    });
  },{threshold:0.1,rootMargin:'0px 0px -28px 0px'});

  document.querySelectorAll(SEL).forEach(function(el){
    var rect=el.getBoundingClientRect();
    if(rect.top>=window.innerHeight){ el.classList.add('srHide'); io.observe(el); }
  });

  // Also reveal cards dynamically loaded below the fold
  new MutationObserver(function(mutations){
    mutations.forEach(function(m){
      m.addedNodes.forEach(function(n){
        if(n.nodeType!==1) return;
        function check(el){
          var rect=el.getBoundingClientRect();
          if(rect.top>=window.innerHeight&&!el.hasAttribute('data-sr')){
            el.setAttribute('data-sr','1');
            el.classList.add('srHide');
            io.observe(el);
          }
        }
        if(n.matches&&n.matches('.card.popular-card,.le-card')) check(n);
        if(n.querySelectorAll){
          n.querySelectorAll('.card.popular-card,.le-card').forEach(check);
        }
      });
    });
  }).observe(document.body,{childList:true,subtree:true});
}

/* ── 7. Page Transition Fade ── */
function initPageTransition(){
  var FLAG='su_pf';
  if(sessionStorage.getItem(FLAG)){
    sessionStorage.removeItem(FLAG);
    document.body.style.opacity='0';
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){
        document.body.style.transition='opacity .22s';
        document.body.style.opacity='1';
        setTimeout(function(){ document.body.style.transition=''; },300);
      });
    });
  }
  document.addEventListener('click',function(e){
    if(e.ctrlKey||e.metaKey||e.shiftKey) return;
    var a=e.target.closest('a[href]');
    if(!a) return;
    var href=a.getAttribute('href')||'';
    if(!href||href.charAt(0)==='#'||/^(https?:|mailto:|tel:|javascript:)/.test(href)||a.target==='_blank') return;
    if(a.hasAttribute('data-open-cart')||a.hasAttribute('data-ai-help-btn')||a.hasAttribute('data-preview-id')) return;
    e.preventDefault();
    sessionStorage.setItem(FLAG,'1');
    document.body.style.transition='opacity .18s';
    document.body.style.opacity='0';
    setTimeout(function(){ window.location.href=href; },200);
  });
}

/* ── 8. Quick-Add Overlay on Card Hover (desktop only) ── */
function initQuickAdd(){
  function inject(card){
    if(card.querySelector('.qaOv')) return;
    var addBtn=card.querySelector('[data-add]');
    if(!addBtn) return;
    var ov=document.createElement('div');
    ov.className='qaOv';
    ov.innerHTML='<span class="qaTxt">Quick Add</span>';
    ov.addEventListener('click',function(e){
      e.preventDefault(); e.stopPropagation();
      addBtn.click();
      var txt=ov.querySelector('.qaTxt');
      txt.textContent='✓ Added!';
      setTimeout(function(){ txt.textContent='Quick Add'; },1500);
    });
    var media=card.querySelector('.popular-card__media');
    if(media) media.appendChild(ov);
  }
  document.querySelectorAll('.card[data-preview-id]').forEach(inject);
  new MutationObserver(function(mutations){
    mutations.forEach(function(m){
      m.addedNodes.forEach(function(n){
        if(n.nodeType!==1) return;
        if(n.matches&&n.matches('.card[data-preview-id]')) inject(n);
        if(n.querySelectorAll) n.querySelectorAll('.card[data-preview-id]').forEach(inject);
      });
    });
  }).observe(document.body,{childList:true,subtree:true});
}

/* ── 9. Phone Number Auto-Format ── */
function initPhoneFormat(){
  function fmt(v){ var d=v.replace(/\D/g,'').slice(0,10); if(d.length<=4) return d; if(d.length<=7) return d.slice(0,4)+'-'+d.slice(4); return d.slice(0,4)+'-'+d.slice(4,7)+'-'+d.slice(7); }
  document.addEventListener('blur',function(e){
    var inp=e.target;
    if(inp.tagName!=='INPUT') return;
    if(inp.id==='coPhone') return; // app.js validates this as raw digits
    var n=(inp.name||inp.id||'').toLowerCase();
    if((inp.type||'')==='tel'||/phone|mobile/.test(n)){
      var raw=inp.value.replace(/\D/g,'');
      if(raw.length>=10&&/^9[6-9]/.test(raw)) inp.value=fmt(raw);
    }
  },true);
}

/* ── 10. Floating Deal Countdown ── */
function initDealCountdown(){
  var bar=document.querySelector('[data-announce-id] .container');
  if(!bar) return;
  var cd=document.createElement('span');
  cd.className='dealCd';
  bar.appendChild(cd);
  function tick(){
    var now=new Date(), end=new Date(now); end.setHours(23,59,59,999);
    var diff=end-now;
    if(diff<=0){ cd.remove(); return; }
    var h=Math.floor(diff/3600000), m=Math.floor(diff%3600000/60000), s=Math.floor(diff%60000/1000);
    cd.textContent='⏰ Ends in '+pad(h)+':'+pad(m)+':'+pad(s);
  }
  function pad(n){ return String(n).padStart(2,'0'); }
  tick(); setInterval(tick,1000);
}

/* ── Init ── */
function init(){
  initRecentlyViewed();
  initNativeShare();
  initHaptic();
  initThemeColor();
  initInstallBanner();
  initScrollReveal();
  initPageTransition();
  initQuickAdd();
  initPhoneFormat();
  initDealCountdown();
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);
else init();
})();
