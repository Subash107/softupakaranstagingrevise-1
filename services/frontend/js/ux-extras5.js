(function(){
'use strict';

/* ── 1. Cart Upsell Popup ── */
function initCartUpsell(){
  var cooling=false;
  document.addEventListener('click',function(e){
    var btn=e.target.closest('[data-add]'); if(!btn||cooling) return;
    cooling=true;
    setTimeout(function(){
      var cards=Array.from(document.querySelectorAll('.card.popular-card'));
      var cur=btn.closest('.card.popular-card');
      var others=cards.filter(function(c){ return c!==cur&&c.getAttribute('data-preview-id'); });
      if(!others.length){ cooling=false; return; }
      var pick=others[Math.floor(Math.random()*others.length)];
      var name=(pick.querySelector('.cardTitle')||{textContent:''}).textContent.trim();
      var price=(pick.querySelector('.priceMain strong,.price strong')||{textContent:''}).textContent.trim();
      var img=pick.querySelector('img'); var src=img?(img.getAttribute('data-src')||img.src):'';
      var pid=pick.getAttribute('data-preview-id')||'';
      if(!name){ cooling=false; return; }
      var old=document.getElementById('cupPop'); if(old) old.remove();
      var pop=document.createElement('div'); pop.id='cupPop';
      pop.innerHTML='<div class="cupHead"><strong>🛍 Customers also got</strong><button class="cupX" type="button" aria-label="Close">✕</button></div>'+
        '<a class="cupRow" href="product.html#'+encodeURIComponent(pid)+'">'+(src&&!/placeholder|data:/.test(src)?'<img class="cupImg" src="'+src+'" alt="'+name+'" loading="lazy"/>':'<div class="cupImg cupImgPh">📦</div>')+
        '<div class="cupInfo"><span class="cupN">'+name+'</span><span class="cupP">'+price+'</span></div></a>'+
        '<div class="cupFoot"><button class="cupNo" type="button">No thanks</button><a class="btn primary cupYes" href="product.html#'+encodeURIComponent(pid)+'">View Deal →</a></div>';
      document.body.appendChild(pop);
      requestAnimationFrame(function(){ pop.classList.add('cupOn'); });
      var t=setTimeout(function(){ dismiss(pop); cooling=false; },7000);
      pop.querySelector('.cupX').addEventListener('click',function(){ clearTimeout(t); dismiss(pop); cooling=false; });
      pop.querySelector('.cupNo').addEventListener('click',function(){ clearTimeout(t); dismiss(pop); cooling=false; });
    },650);
  });
  function dismiss(el){ el.classList.remove('cupOn'); setTimeout(function(){ if(el.parentNode) el.parentNode.removeChild(el); },350); }
}

/* ── 2. Live Urgency Signals (product page) ── */
function initUrgency(){
  if(!/product/.test(location.pathname+location.hash)) return;
  var v=14+Math.floor(Math.random()*22);
  var bar=document.createElement('div'); bar.id='urgBar';
  bar.innerHTML='<span class="urgV" id="urgV">🔥 <strong>'+v+'</strong> people viewing now</span><span class="urgS">⚡ Only a few left at this price</span>';
  var done=false;
  new MutationObserver(function(m,obs){
    if(done) return;
    var btn=document.getElementById('buyNow'); if(!btn) return;
    done=true; obs.disconnect();
    btn.parentNode.insertBefore(bar,btn);
    setInterval(function(){
      v=Math.max(5,v+Math.floor(Math.random()*9)-4);
      var el=document.getElementById('urgV'); if(el) el.innerHTML='🔥 <strong>'+v+'</strong> people viewing now';
    },30000);
  }).observe(document.body,{childList:true,subtree:true});
}

/* ── 3. Abandoned Checkout Nudge ── */
function initAbandonedNudge(){
  var payModal=document.querySelector('[data-pay-modal]'); if(!payModal) return;
  var timer=null,done=false,shown=false;
  function isOpen(){ return payModal.offsetParent!==null&&!payModal.hidden&&getComputedStyle(payModal).display!=='none'; }
  new MutationObserver(function(){
    if(done) return;
    if(isOpen()&&!timer){
      timer=setTimeout(function(){ if(!done) showNudge(); },3*60*1000);
    } else if(!isOpen()&&timer){ clearTimeout(timer); timer=null; }
    if(payModal.querySelector('[data-pay-body] a[href*="wa.me"]')) done=true;
  }).observe(payModal,{attributes:true,attributeFilter:['style','hidden'],childList:true,subtree:true});
  function showNudge(){
    if(shown) return; shown=true;
    var bar=document.createElement('div'); bar.id='abNudge';
    bar.innerHTML='<span class="abTxt">🛒 Your checkout is waiting!</span>'+
      '<button class="abBtn btn primary" type="button">Resume Checkout →</button>'+
      '<button class="abX" type="button" aria-label="Dismiss">✕</button>';
    document.body.appendChild(bar);
    requestAnimationFrame(function(){ bar.classList.add('abOn'); });
    bar.querySelector('.abBtn').addEventListener('click',function(){
      payModal.removeAttribute('hidden'); payModal.style.display=''; bar.remove();
    });
    bar.querySelector('.abX').addEventListener('click',function(){ bar.remove(); });
  }
}

/* ── 4. Bulk Discount Teaser ── */
function initBulkTeaser(){
  if(!/product|category/.test(location.pathname+location.hash)) return;
  if(document.querySelector('.bulkBar')) return;
  var bar=document.createElement('div'); bar.className='bulkBar';
  bar.innerHTML='<span class="bulkI">🎁</span>'+
    '<span class="bulkT"><strong>Bundle Deal:</strong> Buy 2+ subscriptions &amp; save — '+
    '<a href="https://wa.me/9779800000000?text=Hi!%20I%20want%20a%20bundle%20deal%20for%20multiple%20subscriptions." target="_blank" rel="noreferrer">Ask on WhatsApp</a></span>'+
    '<button class="bulkX" type="button" aria-label="Dismiss">✕</button>';
  var main=document.querySelector('main'); if(!main) return;
  main.insertBefore(bar,main.firstChild);
  bar.querySelector('.bulkX').addEventListener('click',function(){ bar.style.display='none'; });
}

/* ── 5. Animated Review Carousel ── */
function initReviews(){
  if(!document.body.classList.contains('home')&&!/category/.test(location.pathname)) return;
  var reviews=[
    {n:'Rohan S.',c:'Kathmandu',s:5,t:'Got my Netflix Premium in under 5 minutes. Super fast!',p:'Netflix Premium'},
    {n:'Priya T.',c:'Pokhara',s:5,t:'Spotify is working perfectly. Will buy again from here.',p:'Spotify Premium'},
    {n:'Bikash K.',c:'Lalitpur',s:5,t:'Best prices in Nepal. Highly recommend!',p:'PUBG UC'},
    {n:'Anisha R.',c:'Biratnagar',s:5,t:'NordVPN activated in minutes. Great service!',p:'NordVPN'},
    {n:'Suman L.',c:'Chitwan',s:5,t:'WP plugins are 100% genuine. Excellent!',p:'WP Elementor Pro'},
    {n:'Kritika M.',c:'Bhaktapur',s:5,t:'Hassle-free. YouTube Premium working perfectly.',p:'YouTube Premium'}
  ];
  var sec=document.createElement('section'); sec.className='rvCSec';
  sec.innerHTML='<div class="rvCHead container"><h2 class="rvCTitle">❤️ What Customers Say</h2></div>'+
    '<div class="rvCTrack"><div class="rvCReel" id="rvCReel">'+
      reviews.concat(reviews).map(function(r){
        return '<div class="rvCC"><div class="rvCStars">'+'★'.repeat(r.s)+'</div>'+
          '<p class="rvCTxt">"'+r.t+'"</p>'+
          '<div class="rvCUser"><span class="rvCN">'+r.n+'</span><span class="rvCM">🇳🇵 '+r.c+' · '+r.p+'</span></div></div>';
      }).join('')+
    '</div></div>';
  var main=document.querySelector('main');
  var flash=main&&main.querySelector('.flashSec');
  var ref=flash?flash.nextSibling:(main&&main.querySelector('.section')||main&&main.firstChild);
  if(main&&ref) main.insertBefore(sec,ref);
  else if(main) main.appendChild(sec);
  // Pause on hover
  var reel=document.getElementById('rvCReel');
  if(reel){
    reel.addEventListener('mouseenter',function(){ reel.style.animationPlayState='paused'; });
    reel.addEventListener('mouseleave',function(){ reel.style.animationPlayState='running'; });
  }
}

/* ── 6. "Why Buy From Us" Section ── */
function initWhyUs(){
  if(!document.body.classList.contains('home')) return;
  var items=[
    {i:'⚡',t:'Instant Delivery',d:'WhatsApp delivery in 5–30 min'},
    {i:'🇳🇵',t:'Nepal Payments',d:'eSewa, Khalti, IME Pay, ConnectIPS'},
    {i:'💬',t:'24/7 WA Support',d:'We reply in minutes, any time'},
    {i:'✅',t:'100% Genuine',d:'Verified products, always authentic'}
  ];
  var sec=document.createElement('section'); sec.className='whySec';
  sec.innerHTML='<div class="container"><div class="whyGrid">'+
    items.map(function(it){ return '<div class="whyCard"><span class="whyI">'+it.i+'</span><strong class="whyT">'+it.t+'</strong><span class="whyD">'+it.d+'</span></div>'; }).join('')+
  '</div></div>';
  var main=document.querySelector('main');
  var catGrid=main&&main.querySelector('.catGridWrap');
  if(catGrid&&catGrid.nextSibling) main.insertBefore(sec,catGrid.nextSibling);
  else if(main) main.insertBefore(sec,main.firstChild);
}

/* ── 7. Mini-Cart Hover Dropdown ── */
function initMiniCart(){
  var cartBtns=Array.from(document.querySelectorAll('[data-open-cart]')); if(!cartBtns.length) return;
  var CART_KEY='softupakaran_cart_v1';
  var drop=document.createElement('div'); drop.id='miniCart'; drop.hidden=true;
  drop.innerHTML='<div class="mcHead"><strong>🛒 Your Cart</strong></div>'+
    '<div id="mcBody" class="mcBody"></div>'+
    '<div class="mcFoot"><div id="mcTotal" class="mcTotal"></div>'+
    '<button class="mcOpen btn primary" type="button" id="mcOpen">Open Cart →</button></div>';
  document.body.appendChild(drop);
  function loadCart(){ try{ return JSON.parse(localStorage.getItem(CART_KEY)||'[]'); }catch{ return []; } }
  function render(anchor){
    var items=loadCart(); var body=document.getElementById('mcBody'); var tot=document.getElementById('mcTotal');
    if(!body) return;
    if(!items.length){ body.innerHTML='<div class="mcEmpty">Cart is empty</div>'; if(tot) tot.innerHTML=''; return; }
    var total=items.reduce(function(s,i){ return s+(parseFloat(i.price)||0)*(i.qty||1); },0);
    body.innerHTML=items.slice(0,4).map(function(it){
      return '<div class="mcItem"><div class="mcIco">📦</div><div class="mcIInf"><span class="mcIN">'+(it.name||'Item')+'</span><span class="mcIP">Rs. '+(it.price||0)+' × '+(it.qty||1)+'</span></div></div>';
    }).join('')+(items.length>4?'<div class="mcMore">+' + (items.length-4)+' more</div>':'');
    if(tot) tot.innerHTML='Total: <strong>Rs. '+total.toFixed(0)+'</strong>';
    // Position
    if(anchor){ var r=anchor.getBoundingClientRect(); drop.style.top=(r.bottom+6+window.scrollY)+'px'; drop.style.right=(window.innerWidth-r.right)+'px'; }
  }
  var hoverTimer=null;
  cartBtns.forEach(function(btn){
    btn.addEventListener('mouseenter',function(){
      if(window.innerWidth<=768) return;
      clearTimeout(hoverTimer);
      drop.hidden=false; render(btn);
    });
    btn.addEventListener('mouseleave',function(){ hoverTimer=setTimeout(function(){ if(!drop.matches(':hover')) drop.hidden=true; },280); });
  });
  drop.addEventListener('mouseenter',function(){ clearTimeout(hoverTimer); });
  drop.addEventListener('mouseleave',function(){ hoverTimer=setTimeout(function(){ drop.hidden=true; },200); });
  var openBtn=document.getElementById('mcOpen');
  if(openBtn) openBtn.addEventListener('click',function(){
    drop.hidden=true;
    // Trigger the actual cart open
    var realBtn=cartBtns.find(function(b){ return b.offsetParent!==null; });
    if(realBtn) realBtn.click();
  });
  document.addEventListener('click',function(e){ if(!drop.contains(e.target)&&!e.target.closest('[data-open-cart]')) drop.hidden=true; });
}

/* ── 8. Keyboard Shortcut '/' to Focus Search ── */
function initKeySearch(){
  document.addEventListener('keydown',function(e){
    if(e.key!='/') return;
    var tag=(document.activeElement||{}).tagName||'';
    if(tag==='INPUT'||tag==='TEXTAREA'||tag==='SELECT'||e.target.isContentEditable) return;
    e.preventDefault();
    var inp=document.querySelector('[data-search]'); if(!inp) return;
    inp.focus();
    var hdr=document.querySelector('header.topbar');
    if(hdr&&window.innerWidth<=520) hdr.classList.add('mob-search-active');
    // Show hint briefly
    var hint=document.getElementById('searchHint');
    if(!hint){ hint=document.createElement('div'); hint.id='searchHint'; hint.textContent='Press / to search'; document.body.appendChild(hint); }
    hint.classList.add('shOn'); setTimeout(function(){ hint.classList.remove('shOn'); },1500);
  });
}

/* ── 9. Product Image Zoom ── */
function initImageZoom(){
  if(!/product/.test(location.pathname+location.hash)) return;
  var inited=false;
  new MutationObserver(function(m,obs){
    if(inited) return;
    var img=document.querySelector('.hero-img'); if(!img||img.hasAttribute('data-zoom')) return;
    inited=true; obs.disconnect();
    img.setAttribute('data-zoom','1');
    img.classList.add('zoomImg');
    var wrap=img.parentElement; if(wrap) wrap.classList.add('imgZoomWrap');
    // Desktop: CSS handles scale on hover
    // Mobile: pinch-to-zoom
    var dist0=0,sc=1;
    img.addEventListener('touchstart',function(e){
      if(e.touches.length===2) dist0=Math.hypot(e.touches[1].clientX-e.touches[0].clientX,e.touches[1].clientY-e.touches[0].clientY);
    },{passive:true});
    img.addEventListener('touchmove',function(e){
      if(e.touches.length!==2) return;
      var d=Math.hypot(e.touches[1].clientX-e.touches[0].clientX,e.touches[1].clientY-e.touches[0].clientY);
      sc=Math.min(3,Math.max(1,sc*(d/dist0))); dist0=d;
      img.style.transform='scale('+sc+')'; img.style.transition='none';
    },{passive:true});
    img.addEventListener('touchend',function(){
      if(sc<1.15){ sc=1; img.style.transform=''; img.style.transition=''; }
    },{passive:true});
    img.addEventListener('dblclick',function(){ sc=1; img.style.transform=''; img.style.transition=''; });
  }).observe(document.body,{childList:true,subtree:true});
}

/* ── 10. Scroll to Top on Hash Navigation ── */
function initHashScroll(){
  window.addEventListener('hashchange',function(){ window.scrollTo({top:0,behavior:'smooth'}); });
}

/* ── 11. Add-to-Cart Confetti Burst ── */
function initConfetti(){
  var COLORS=['#7c3aed','#06b6d4','#f59e0b','#ef4444','#10b981','#a78bfa','#ffffff','#fbbf24'];
  document.addEventListener('click',function(e){
    if(!e.target.closest('[data-add]')) return;
    var badge=document.querySelector('[data-cart-count]');
    var r=badge?badge.getBoundingClientRect():{left:window.innerWidth-50,top:16,width:20,height:20};
    burst(r.left+r.width/2+window.scrollX,r.top+r.height/2+window.scrollY);
  });
  function burst(cx,cy){
    for(var i=0;i<24;i++){
      var el=document.createElement('div'); el.className='cPart';
      var angle=Math.random()*Math.PI*2, spd=3+Math.random()*6;
      var vx=Math.cos(angle)*spd, vy=Math.sin(angle)*spd-4;
      var sz=4+Math.random()*6;
      var col=COLORS[Math.floor(Math.random()*COLORS.length)];
      var isCircle=Math.random()>.5;
      el.style.cssText='left:'+cx+'px;top:'+cy+'px;width:'+sz+'px;height:'+sz+'px;background:'+col+';border-radius:'+(isCircle?'50%':'2px')+';position:fixed;pointer-events:none;z-index:99999;';
      document.body.appendChild(el);
      animate(el,cx,cy,vx,vy);
    }
  }
  function animate(el,x,y,vx,vy){
    var alpha=1,frame=0;
    (function tick(){
      frame++; vy+=0.38; x+=vx; y+=vy; alpha-=0.027;
      el.style.left=x+'px'; el.style.top=y+'px'; el.style.opacity=Math.max(0,alpha);
      if(alpha>0&&frame<80) requestAnimationFrame(tick); else if(el.parentNode) el.parentNode.removeChild(el);
    })();
  }
}

/* ── 12. Mobile Quick-View Bottom Sheet ── */
function initQuickViewSheet(){
  var sheet=document.createElement('div'); sheet.id='qvSheet';
  sheet.innerHTML='<div class="qvsHandle"></div>'+
    '<button class="qvsClose" type="button" aria-label="Close">✕</button>'+
    '<div class="qvsBody" id="qvsBody"></div>';
  var ov=document.createElement('div'); ov.id='qvsOv';
  document.body.appendChild(sheet); document.body.appendChild(ov);
  function open(card){
    var name=(card.querySelector('.cardTitle')||{textContent:''}).textContent.trim();
    var price=(card.querySelector('.priceMain,.price')||{textContent:''}).textContent.trim();
    var img=card.querySelector('img'); var src=img?(img.getAttribute('data-src')||img.src):'';
    var pid=card.getAttribute('data-preview-id')||'';
    var meta=(card.querySelector('.cardMeta,.cardDesc')||{textContent:''}).textContent.trim();
    document.getElementById('qvsBody').innerHTML=
      (src&&!/placeholder|data:/.test(src)?'<img class="qvsImg" src="'+src+'" alt="'+name+'" loading="lazy"/>':'<div class="qvsImgPh">📦</div>')+
      '<h3 class="qvsName">'+name+'</h3>'+
      (meta?'<p class="qvsMeta">'+meta.slice(0,120)+(meta.length>120?'…':'')+'</p>':'')+
      '<div class="qvsPrice">'+price+'</div>'+
      '<div class="qvsBtns">'+
        '<a class="btn primary qvsFull" href="product.html#'+encodeURIComponent(pid)+'">View Full Details →</a>'+
        '<a class="qvsWA" href="https://wa.me/9779800000000?text='+encodeURIComponent('I want to order: '+name+' from SoftUpakaran')+'" target="_blank" rel="noreferrer">💬 Order via WhatsApp</a>'+
      '</div>';
    sheet.classList.add('qvsOpen'); ov.classList.add('qvsOvOn');
  }
  function close(){ sheet.classList.remove('qvsOpen'); ov.classList.remove('qvsOvOn'); }
  sheet.querySelector('.qvsClose').addEventListener('click',close);
  ov.addEventListener('click',close);
  var sy=0;
  sheet.addEventListener('touchstart',function(e){ sy=e.touches[0].clientY; },{passive:true});
  sheet.addEventListener('touchend',function(e){ if(e.changedTouches[0].clientY-sy>70) close(); },{passive:true});
  // Inject "Quick View" button on each card
  function injectQV(card){
    if(card.querySelector('.qvBtn')||!card.getAttribute('data-preview-id')) return;
    var btn=document.createElement('button'); btn.className='qvBtn'; btn.type='button'; btn.textContent='⚡ Quick View';
    card.appendChild(btn);
    btn.addEventListener('click',function(e){ e.preventDefault(); e.stopPropagation(); open(card); });
  }
  document.querySelectorAll('.card.popular-card').forEach(injectQV);
  new MutationObserver(function(ms){
    ms.forEach(function(m){ m.addedNodes.forEach(function(n){
      if(n.nodeType!==1) return;
      if(n.matches&&n.matches('.card.popular-card')) injectQV(n);
      if(n.querySelectorAll) n.querySelectorAll('.card.popular-card').forEach(injectQV);
    }); });
  }).observe(document.body,{childList:true,subtree:true});
}

/* ── 13. Spin the Deal Wheel ── */
function initDealWheel(){
  var KEY='su_wheel_v1';
  if(localStorage.getItem(KEY)||!document.body.classList.contains('home')) return;
  var prizes=['5% Off','Try Again','Free Delivery','Try Again','10% Off','Try Again','WA Exclusive','Try Again'];
  var colors=['#7c3aed','#374151','#059669','#374151','#dc2626','#374151','#0891b2','#374151'];
  var pop=document.createElement('div'); pop.id='wheelPop';
  pop.innerHTML='<div class="wCard"><button class="wClose" type="button" aria-label="Close">✕</button>'+
    '<h2 class="wTitle">🎰 Spin to Win!</h2><p class="wSub">First-time visitor deal — spin for a reward!</p>'+
    '<div class="wWrap"><div class="wWheel" id="wWheel"></div><div class="wPin">▼</div></div>'+
    '<button class="wSpin btn primary" id="wSpin" type="button">Spin the Wheel!</button>'+
    '<div id="wResult" class="wResult" hidden></div>'+
    '<p class="wNote">Mention your prize when ordering via WhatsApp.</p></div>';
  document.body.appendChild(pop);
  // Build conic-gradient wheel
  var wheel=document.getElementById('wWheel');
  var deg=360/prizes.length;
  var stops=prizes.map(function(p,i){ return colors[i]+' '+(i*deg)+'deg '+(i*deg+deg)+'deg'; }).join(', ');
  wheel.style.background='conic-gradient('+stops+')';
  // Overlay labels
  var labels=document.createElement('div'); labels.className='wLabels';
  prizes.forEach(function(p,i){
    var l=document.createElement('span'); l.className='wLbl'; l.textContent=p;
    l.style.transform='rotate('+(i*deg+deg/2)+'deg) translateY(-62px)';
    labels.appendChild(l);
  });
  wheel.appendChild(labels);
  var spun=false,totalRot=0;
  document.getElementById('wSpin').addEventListener('click',function(){
    if(spun) return; spun=true; this.disabled=true;
    var winIdx=Math.floor(Math.random()*prizes.length);
    // Ensure non-"Try Again" sometimes
    if(prizes[winIdx]==='Try Again'&&Math.random()>.5) winIdx=(winIdx+2)%prizes.length;
    var extra=6+Math.floor(Math.random()*3);
    var target=extra*360+(360-winIdx*deg-deg/2);
    totalRot+=target;
    wheel.style.transition='transform 4.5s cubic-bezier(0.16,1,0.3,1)';
    wheel.style.transform='rotate('+totalRot+'deg)';
    setTimeout(function(){
      var w=prizes[winIdx],res=document.getElementById('wResult');
      res.hidden=false;
      res.innerHTML=w==='Try Again'?
        '<strong>Better luck next time! 😅</strong><br>Follow us on <a href="https://wa.me/9779800000000" target="_blank" rel="noreferrer">WhatsApp</a> for deals.':
        '<strong>🎉 You won: '+w+'!</strong><br>Mention "<strong>SPIN'+w.replace(/\s/g,'').toUpperCase()+'</strong>" when ordering on WhatsApp.';
      localStorage.setItem(KEY,'1');
    },4700);
  });
  pop.querySelector('.wClose').addEventListener('click',function(){ pop.remove(); localStorage.setItem(KEY,'1'); });
  setTimeout(function(){ pop.classList.add('wOn'); },15000);
}

/* ── 14. Order Tracker Step Bar (product page) ── */
function initOrderTracker(){
  if(!/product/.test(location.pathname+location.hash)) return;
  var steps=['Browse','View Product','Checkout','Done ✓'];
  var bar=document.createElement('div'); bar.id='orderTrack';
  bar.innerHTML='<div class="otWrap">'+steps.map(function(s,i){
    var cls='otStep'+(i<2?' otDone':i===2?' otCur':'');
    return '<div class="'+cls+'" data-oti="'+i+'"><div class="otDot"></div><span class="otLbl">'+s+'</span></div>'+(i<steps.length-1?'<div class="otLine'+(i<1?' otFull':'')+'"></div>':'');
  }).join('')+'</div>';
  var main=document.querySelector('main'); if(main) main.insertBefore(bar,main.firstChild);
  function adv(idx){
    var steps=bar.querySelectorAll('.otStep'),lines=bar.querySelectorAll('.otLine');
    steps.forEach(function(s,i){ s.classList.toggle('otDone',i<=idx); s.classList.toggle('otCur',i===idx+1); });
    lines.forEach(function(l,i){ l.classList.toggle('otFull',i<idx); });
  }
  document.addEventListener('click',function(e){
    if(e.target.closest('[data-add]')) adv(2);
    if(e.target.closest('[data-pay-body] a[href*="wa.me"]')) adv(3);
  });
}

/* ── Init ── */
function init(){
  initCartUpsell();
  initUrgency();
  initAbandonedNudge();
  initBulkTeaser();
  initReviews();
  initWhyUs();
  initMiniCart();
  initKeySearch();
  initImageZoom();
  initHashScroll();
  initConfetti();
  initQuickViewSheet();
  initDealWheel();
  initOrderTracker();
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);
else init();
})();
