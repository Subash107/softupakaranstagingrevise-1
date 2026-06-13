(function(){
'use strict';

/* ── 1. Homepage Category Icon Grid ── */
function initCategoryGrid(){
  if(!document.body.classList.contains('home')) return;
  var cats=[
    {i:'📺',l:'Netflix',h:'category#netflix'},
    {i:'🎵',l:'Spotify',h:'category#spotify'},
    {i:'🎮',l:'Gaming',h:'category#gaming'},
    {i:'⚙️',l:'WP Plugins',h:'category#wp-plugins'},
    {i:'🎨',l:'WP Themes',h:'category#wp-themes'},
    {i:'🔒',l:'VPN',h:'category#vpn'},
    {i:'🛒',l:'eCommerce',h:'category#ecommerce'},
    {i:'🎬',l:'Streaming',h:'category#subscriptions'},
    {i:'🎸',l:'Live Events',h:'live-events.html'},
    {i:'🤘',l:'Judas Priest',h:'category#judas-priest'}
  ];
  var wrap=document.createElement('div');
  wrap.className='catGridWrap';
  wrap.innerHTML='<div class="catGrid container">'+cats.map(function(c){
    return '<a class="catItem" href="'+c.h+'"><span class="catIcon">'+c.i+'</span><span class="catLabel">'+c.l+'</span></a>';
  }).join('')+'</div>';
  var main=document.querySelector('main');
  if(main) main.insertBefore(wrap,main.firstChild);
}

/* ── 2. Product Card Gradient Border on Hover ── */
function initCardEnhancements(){
  function tag(card){
    if(card.hasAttribute('data-ce')) return;
    card.setAttribute('data-ce','1');
    card.classList.add('cardGlow');
  }
  document.querySelectorAll('.card.popular-card').forEach(tag);
  new MutationObserver(function(ms){
    ms.forEach(function(m){
      m.addedNodes.forEach(function(n){
        if(n.nodeType!==1) return;
        if(n.matches&&n.matches('.card.popular-card')) tag(n);
        if(n.querySelectorAll) n.querySelectorAll('.card.popular-card').forEach(tag);
      });
    });
  }).observe(document.body,{childList:true,subtree:true});
}

/* ── 3. Flash Sale Section ── */
function initFlashSale(){
  if(!document.body.classList.contains('home')) return;
  function pad(n){ return String(n).padStart(2,'0'); }
  function tick(){
    var end=new Date(); end.setHours(23,59,59,999); var d=end-Date.now();
    var h=Math.floor(d/3600000),m=Math.floor(d%3600000/60000),s=Math.floor(d%60000/1000);
    var el=document.getElementById('fsTimer');
    if(el) el.innerHTML='<span class="fsu"><b>'+pad(h)+'</b><em>HRS</em></span><span class="fsep">:</span><span class="fsu"><b>'+pad(m)+'</b><em>MIN</em></span><span class="fsep">:</span><span class="fsu"><b>'+pad(s)+'</b><em>SEC</em></span>';
  }
  var sec=document.createElement('section');
  sec.className='flashSec section';
  sec.id='flashSec';
  sec.innerHTML='<div class="flashTop"><div><span class="flashBadge">⚡ Flash Sale</span><h2 class="flashH">Today\'s Best Deals</h2></div><div class="flashTimerWrap" id="fsTimer"></div></div><div class="flashCards" id="fsCards"><div class="fsLoad">Loading deals…</div></div>';
  var main=document.querySelector('main');
  var firstSec=main&&main.querySelector('.section');
  if(firstSec) main.insertBefore(sec,firstSec.nextSibling||null);
  tick(); setInterval(tick,1000);
  // Populate once product cards are in DOM
  var filled=false;
  new MutationObserver(function(m,obs){
    if(filled) return;
    var cards=Array.from(document.querySelectorAll('.grid .card.popular-card,[data-trending] .card,.card[data-preview-id]')).slice(0,4);
    if(!cards.length) return;
    filled=true; obs.disconnect();
    var grid=document.getElementById('fsCards');
    if(!grid) return;
    grid.innerHTML='<div class="fsGrid">'+cards.map(function(c){
      var name=(c.querySelector('.cardTitle')||{textContent:''}).textContent.trim();
      var price=(c.querySelector('.priceMain strong,.price strong')||{textContent:''}).textContent.trim();
      var img=c.querySelector('img');
      var src=img?(img.getAttribute('data-src')||img.src):'';
      var id=c.getAttribute('data-preview-id')||'';
      return '<a class="fsCard" href="product.html#'+encodeURIComponent(id)+'">'+
        '<div class="fsImg">'+(src&&!/placeholder|data:/.test(src)?'<img src="'+src+'" alt="'+name+'" loading="lazy"/>':'📦')+'</div>'+
        '<span class="fsName">'+name+'</span><span class="fsPrice">'+price+'</span>'+
        '<span class="fsCta">Buy Now →</span>'+
      '</a>';
    }).join('')+'</div>';
  }).observe(document.body,{childList:true,subtree:true});
}

/* ── 4. WhatsApp Quick-Reply Widget ── */
function initWAWidget(){
  if(document.getElementById('waWidget')) return;
  var replies=[
    {l:'Place an Order',m:'Hi! I want to place an order on SoftUpakaran.'},
    {l:'Track My Order',m:'Hi! I want to track my order. Order ID: '},
    {l:'Payment Issue',m:'Hi! I am having trouble with payment.'},
    {l:'Need Support',m:'Hi! I need help with my product from SoftUpakaran.'}
  ];
  var w=document.createElement('div');
  w.id='waWidget'; w.className='waWidget';
  w.innerHTML='<button class="waWTrig" id="waWTrig" type="button" aria-label="Chat on WhatsApp" aria-expanded="false">'+
    '<svg viewBox="0 0 32 32" width="24" height="24" fill="currentColor"><path d="M16 3C9.4 3 4 8.4 4 15c0 2.3.6 4.4 1.8 6.2L4 29l8-1.6c1.2.5 2.6.7 4 .7 6.6 0 12-5.4 12-12S22.6 3 16 3zm4.2 16.1c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1s-.7.8-.9 1c-.1.2-.3.2-.5.1-1.8-.9-3-2.2-3.6-3.4-.2-.3 0-.5.1-.6l.3-.4c.1-.1.1-.2.2-.4 0-.1 0-.3 0-.4 0-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.6 2.6 4 3.6 2.3 1 2.3.7 2.7.6.4-.1 1.4-.6 1.6-1.1.2-.5.2-.9.1-1z"/></svg>'+
    '<span class="waWDot"></span></button>'+
  '<div class="waWPanel" id="waWPanel" hidden>'+
    '<div class="waWHead"><div><strong>💬 SoftUpakaran Support</strong><span class="waWOnline">● Online now</span></div><button class="waWClose" type="button" aria-label="Close">✕</button></div>'+
    '<div class="waWBody"><p class="waWGreet">Hi! How can we help you? Choose a topic:</p>'+
      replies.map(function(r){
        return '<a class="waWReply" href="https://wa.me/9779800000000?text='+encodeURIComponent(r.m)+'" target="_blank" rel="noreferrer">'+r.l+' <span>→</span></a>';
      }).join('')+
    '</div>'+
    '<a class="waWOpen" href="https://wa.me/9779800000000" target="_blank" rel="noreferrer">Open WhatsApp ↗</a>'+
  '</div>';
  document.body.appendChild(w);
  var trig=document.getElementById('waWTrig'),panel=document.getElementById('waWPanel');
  trig.addEventListener('click',function(){
    var open=!panel.hidden; panel.hidden=open;
    trig.setAttribute('aria-expanded',String(!open));
    if(!open) w.querySelector('.waWDot').style.display='none';
  });
  w.querySelector('.waWClose').addEventListener('click',function(){ panel.hidden=true; trig.setAttribute('aria-expanded','false'); });
  document.addEventListener('click',function(e){ if(!w.contains(e.target)) panel.hidden=true; });
  // Hide old raw WA chatFab to avoid duplication
  var old=document.querySelector('.chatFab[href*="wa.me"],.chatFab[href*="whatsapp"]');
  if(old) old.style.display='none';
}

/* ── 5. Search Price Filter ── */
function initSearchPriceFilter(){
  var inp=document.querySelector('[data-search]'),dd=document.querySelector('[data-search-dropdown]');
  if(!inp||!dd) return;
  var FILTERS=[{l:'Under Rs. 500',min:0,max:500},{l:'Rs. 500–2K',min:500,max:2000},{l:'Rs. 2K+',min:2000,max:Infinity}];
  var active=null;
  var bar=document.createElement('div');
  bar.className='srPFBar';
  bar.innerHTML='<span class="srPFLbl">Price:</span>'+FILTERS.map(function(f,i){
    return '<button class="srPFBtn" type="button" data-pfi="'+i+'">'+f.l+'</button>';
  }).join('');
  dd.parentNode.insertBefore(bar,dd);
  bar.addEventListener('click',function(e){
    var btn=e.target.closest('.srPFBtn'); if(!btn) return;
    var i=parseInt(btn.getAttribute('data-pfi'));
    active=(active===i?null:i);
    bar.querySelectorAll('.srPFBtn').forEach(function(b,j){ b.classList.toggle('srPFOn',j===active); });
    inp.dispatchEvent(new Event('input',{bubbles:true}));
  });
  new MutationObserver(function(){
    if(active===null) return;
    var f=FILTERS[active];
    dd.querySelectorAll('[data-id],[href*="product"]').forEach(function(el){
      var pe=el.querySelector('.srPrice,.price,.cardPrice');
      if(!pe) return;
      var p=parseFloat(pe.textContent.replace(/[^0-9.]/g,''))||0;
      el.style.display=(p>=f.min&&p<f.max)?'':'none';
    });
  }).observe(dd,{childList:true,subtree:true});
  inp.addEventListener('focus',function(){ bar.classList.add('srPFVis'); });
  document.addEventListener('click',function(e){ if(!bar.contains(e.target)&&!inp.contains(e.target)) bar.classList.remove('srPFVis'); });
}

/* ── 6. Frequently Bought Together ── */
function initFreqBought(){
  if(!/product/.test(location.pathname+location.hash)) return;
  var done=false;
  new MutationObserver(function(m,obs){
    if(done) return;
    var root=document.querySelector('[data-product]');
    if(!root||!document.querySelector('#buyNow')) return;
    done=true; obs.disconnect();
    setTimeout(function(){
      var cards=Array.from(document.querySelectorAll('.card[data-preview-id]')).slice(0,3);
      if(!cards.length) return;
      var sec=document.createElement('div'); sec.className='fbtSec';
      sec.innerHTML='<h3 class="fbtH">🛍 Frequently Bought Together</h3>'+
        '<div class="fbtRow">'+cards.map(function(c){
          var name=(c.querySelector('.cardTitle')||{textContent:''}).textContent.trim();
          var price=(c.querySelector('.priceMain strong,.price strong')||{textContent:''}).textContent.trim();
          var img=c.querySelector('img'); var src=img?(img.getAttribute('data-src')||img.src):'';
          var pid=c.getAttribute('data-preview-id')||'';
          return '<a class="fbtCard" href="product.html#'+encodeURIComponent(pid)+'">'+
            '<div class="fbtThumb">'+(src&&!/placeholder|data:/.test(src)?'<img src="'+src+'" alt="'+name+'" loading="lazy"/>':'📦')+'</div>'+
            '<span class="fbtN">'+name+'</span><span class="fbtP">'+price+'</span></a>';
        }).join('<span class="fbtPlus">+</span>')+'</div>';
      root.appendChild(sec);
    },1500);
  }).observe(document.body,{childList:true,subtree:true});
}

/* ── 7. Order Confirmation Screen ── */
function initOrderConfirm(){
  var payModal=document.querySelector('[data-pay-modal]'); if(!payModal) return;
  function show(){
    if(document.getElementById('ocOverlay')) return;
    var id='ORD-'+Date.now().toString(36).toUpperCase();
    var ov=document.createElement('div'); ov.id='ocOverlay';
    ov.innerHTML='<div class="ocCard"><div class="ocEmoji">🎉</div><h2 class="ocTitle">Order Sent!</h2>'+
      '<p class="ocSub">Your order is on WhatsApp. We\'ll confirm &amp; deliver in <strong>5–30 minutes</strong>.</p>'+
      '<div class="ocRef">Reference: <strong>'+id+'</strong></div>'+
      '<div class="ocSteps"><div class="ocS ocSDone">✓ Order placed</div><div class="ocS ocSActive">⏳ Confirming</div><div class="ocS">📦 Delivery</div></div>'+
      '<div class="ocBtns"><a class="btn primary" href="https://wa.me/9779800000000" target="_blank" rel="noreferrer">Open WhatsApp</a>'+
      '<button class="btn" type="button" id="ocDone">Continue Shopping</button></div></div>';
    document.body.appendChild(ov);
    requestAnimationFrame(function(){ ov.classList.add('ocOpen'); });
    document.getElementById('ocDone').addEventListener('click',function(){
      ov.classList.remove('ocOpen');
      setTimeout(function(){ ov.remove(); },300);
      var c=document.querySelector('[data-pay-close]'); if(c) c.click();
    });
  }
  new MutationObserver(function(){
    var body=payModal.querySelector('[data-pay-body]'); if(!body) return;
    var waLink=body.querySelector('a[href*="wa.me"]');
    if(!waLink||waLink.hasAttribute('data-oc')) return;
    waLink.setAttribute('data-oc','1');
    waLink.addEventListener('click',function(){ setTimeout(show,500); });
  }).observe(payModal,{childList:true,subtree:true});
}

/* ── 8. Better Mobile Bottom Nav ── */
function initBetterMobileNav(){
  var nav=document.querySelector('.mobileNav'); if(!nav) return;
  if(!nav.querySelector('[data-mnav-search]')){
    var s=document.createElement('button');
    s.className='mobileNavBtn'; s.type='button'; s.setAttribute('data-mnav-search',''); s.setAttribute('aria-label','Search');
    s.innerHTML='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><span>Search</span>';
    s.addEventListener('click',function(){
      var hdr=document.querySelector('header.topbar');
      if(hdr){ hdr.classList.add('mob-search-active'); var i=hdr.querySelector('[data-search]'); if(i) setTimeout(function(){ i.focus(); },60); }
    });
    nav.insertBefore(s,nav.firstChild);
  }
  if(!nav.querySelector('[data-mnav-wl]')){
    var wl=document.createElement('a');
    wl.className='mobileNavBtn'; wl.href='product.html#wishlist'; wl.setAttribute('data-mnav-wl',''); wl.setAttribute('aria-label','Wishlist');
    wl.innerHTML='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg><span>Wishlist</span>';
    nav.insertBefore(wl,nav.children[1]||null);
  }
}

/* ── 9. Swipe to Dismiss Cart ── */
function initSwipeCart(){
  var modal=document.querySelector('[data-cart-modal] .modal'); if(!modal) return;
  var sx=0,sy=0,drag=false;
  modal.addEventListener('touchstart',function(e){ sx=e.touches[0].clientX; sy=e.touches[0].clientY; drag=true; modal.style.transition='none'; },{passive:true});
  modal.addEventListener('touchmove',function(e){
    if(!drag) return;
    var dx=e.touches[0].clientX-sx, dy=e.touches[0].clientY-sy;
    if(Math.abs(dx)>Math.abs(dy)&&Math.abs(dx)>8) modal.style.transform='translateX('+dx+'px)';
  },{passive:true});
  modal.addEventListener('touchend',function(e){
    if(!drag) return; drag=false;
    var dx=e.changedTouches[0].clientX-sx;
    modal.style.transition='';
    if(Math.abs(dx)>75){ var cb=document.querySelector('[data-cart-close]'); if(cb) cb.click(); }
    modal.style.transform='';
  });
}

/* ── 10. Mobile Product CTA Bar ── */
function initMobProdCTA(){
  if(!/product/.test(location.pathname+location.hash)) return;
  var bar=document.createElement('div'); bar.id='mpCTA';
  bar.innerHTML='<button class="mpAdd" id="mpAdd" type="button">🛒 Add to Cart</button><a class="mpWA" id="mpWA" href="https://wa.me/9779800000000" target="_blank" rel="noreferrer">💬 Order via WhatsApp</a>';
  document.body.appendChild(bar);
  function sync(){
    var n=document.querySelector('.h1'), p=document.querySelector('.badge:not(.delivery-badge):not(.brand-badge):not(.nav-badge)');
    if(n&&n.textContent.trim()){
      var msg='I want to order: '+n.textContent.trim()+(p?' ('+p.textContent.trim()+')':'')+' from SoftUpakaran.';
      var a=document.getElementById('mpWA'); if(a) a.href='https://wa.me/9779800000000?text='+encodeURIComponent(msg);
    }
    var btn=document.getElementById('buyNow');
    if(btn){ var r=btn.getBoundingClientRect(); bar.classList.toggle('mpVisible',r.bottom<0||r.top>window.innerHeight); }
  }
  document.getElementById('mpAdd').addEventListener('click',function(){ var b=document.getElementById('buyNow'); if(b) b.click(); });
  new MutationObserver(sync).observe(document.body,{childList:true,subtree:true});
  window.addEventListener('scroll',sync,{passive:true});
}

/* ── 11. Press / Social Proof Bar ── */
function initPressBar(){
  if(!document.body.classList.contains('home')) return;
  var mentions=['📰 Tech Lekha Nepal','💻 Nepal Tech Blog','🇳🇵 Digital Nepal','👨‍💻 Kathmandu Dev','⚡ Byte Nepal','🛒 IT Shop Nepal'];
  var bar=document.createElement('div'); bar.className='pressBar';
  bar.innerHTML='<span class="pressLbl">Trusted by Nepal\'s community</span><div class="pressScroll">'+
    mentions.map(function(m){ return '<span class="pressBadge">'+m+'</span>'; }).join('')+'</div>';
  var main=document.querySelector('main');
  if(main) main.insertBefore(bar,main.firstChild);
}

/* ── 12. Live Order Notifications ── */
function initLiveOrders(){
  var NAMES=['Bikash','Suman','Priya','Aarav','Kritika','Rohan','Nisha','Dipesh','Anisha','Ramesh','Sunita','Anil'];
  var CITIES=['Kathmandu','Pokhara','Biratnagar','Lalitpur','Butwal','Chitwan','Dharan','Bhaktapur','Birgunj','Janakpur'];
  var PRODS=['Netflix Premium 4K','Spotify Premium','PUBG UC 660','NordVPN 1 Year','YouTube Premium','Free Fire 1000 Diamonds','WP Elementor Pro','ExpressVPN','WooCommerce Premium','Disney+ Hotstar'];
  function rand(a){ return a[Math.floor(Math.random()*a.length)]; }
  function show(){
    var el=document.createElement('div'); el.className='lotToast';
    el.innerHTML='<span class="lotIco">🛒</span><div class="lotTxt"><strong>'+rand(NAMES)+' from '+rand(CITIES)+'</strong><br>just ordered <em>'+rand(PRODS)+'</em></div><button class="lotX" type="button">✕</button>';
    document.body.appendChild(el);
    requestAnimationFrame(function(){ el.classList.add('lotOn'); });
    var t=setTimeout(function(){ dismiss(el); },5000);
    el.querySelector('.lotX').addEventListener('click',function(){ clearTimeout(t); dismiss(el); });
  }
  function dismiss(el){ el.classList.remove('lotOn'); setTimeout(function(){ if(el.parentNode) el.parentNode.removeChild(el); },400); }
  setTimeout(function loop(){ show(); setTimeout(loop,35000+Math.random()*20000); },10000);
}

/* ── 13. Google Product Structured Data ── */
function initProductSchema(){
  if(!/product/.test(location.pathname+location.hash)) return;
  var el=document.createElement('script'); el.type='application/ld+json'; el.id='pdSchema';
  document.head.appendChild(el);
  var set=false;
  new MutationObserver(function(){
    if(set) return;
    var n=document.querySelector('.h1'),p=document.querySelector('.badge:not(.delivery-badge):not(.brand-badge):not(.nav-badge)'),img=document.querySelector('.hero-img');
    if(!n||!n.textContent.trim()) return;
    set=true;
    var price=parseFloat((p?p.textContent:'').replace(/[^0-9.]/g,''))||0;
    el.textContent=JSON.stringify({'@context':'https://schema.org/','@type':'Product','name':n.textContent.trim(),'image':img?(img.getAttribute('data-src')||img.src):'https://softupakaran.com/assets/logo.svg','description':'Digital product delivered instantly via WhatsApp in Nepal.','brand':{'@type':'Brand','name':'SoftUpakaran'},'offers':{'@type':'Offer','priceCurrency':'NPR','price':price,'availability':'https://schema.org/InStock','url':location.href,'seller':{'@type':'Organization','name':'SoftUpakaran'}}});
  }).observe(document.body,{childList:true,subtree:true,characterData:true});
}

/* ── Init ── */
function init(){
  initCategoryGrid();
  initCardEnhancements();
  initFlashSale();
  initWAWidget();
  initSearchPriceFilter();
  initFreqBought();
  initOrderConfirm();
  initBetterMobileNav();
  initSwipeCart();
  initMobProdCTA();
  initPressBar();
  initLiveOrders();
  initProductSchema();
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);
else init();
})();
