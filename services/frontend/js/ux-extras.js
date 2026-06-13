(function(){
'use strict';

/* ── 1. Back to Top ── */
function initBackToTop(){
  var btn=document.createElement('button');
  btn.id='backToTop';
  btn.setAttribute('aria-label','Back to top');
  btn.setAttribute('type','button');
  btn.innerHTML='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="18 15 12 9 6 15"/></svg>';
  document.body.appendChild(btn);
  window.addEventListener('scroll',function(){ btn.classList.toggle('bttVisible',window.scrollY>300); },{passive:true});
  btn.addEventListener('click',function(){ window.scrollTo({top:0,behavior:'smooth'}); });
}

/* ── 2. Recent Searches ── */
var RECENT_KEY='su_recent_searches';
function getRecent(){ try{ return JSON.parse(localStorage.getItem(RECENT_KEY)||'[]'); }catch(e){ return []; } }
function saveRecent(q){ if(!q) return; var r=getRecent().filter(function(x){ return x!==q; }).slice(0,4); r.unshift(q); localStorage.setItem(RECENT_KEY,JSON.stringify(r)); }
function initRecentSearches(){
  var inp=document.querySelector('[data-search]');
  var dd=document.querySelector('[data-search-dropdown]');
  if(!inp||!dd) return;
  inp.addEventListener('focus',function(){
    if(inp.value.trim()) return;
    var recent=getRecent();
    if(!recent.length) return;
    dd.innerHTML='<div class="srRecentWrap"><span class="srRecentLabel">Recent searches</span>'+
      recent.map(function(q){ return '<button class="srRecentItem" type="button">'+q+'</button>'; }).join('')+'</div>';
    dd.classList.add('open');
    dd.querySelectorAll('.srRecentItem').forEach(function(b){
      b.addEventListener('click',function(){
        inp.value=b.textContent;
        inp.dispatchEvent(new Event('input',{bubbles:true}));
        inp.focus();
      });
    });
  });
  inp.addEventListener('keydown',function(e){
    if(e.key==='Enter'&&inp.value.trim()) saveRecent(inp.value.trim());
  });
  dd.addEventListener('click',function(e){
    if(e.target.closest('[data-id],[href]')&&inp.value.trim()) saveRecent(inp.value.trim());
  });
}

/* ── 3. WhatsApp Share on Product Cards ── */
function addShareBtn(card){
  if(card.querySelector('.waShareBtn')) return;
  var nameEl=card.querySelector('.cardTitle');
  var id=card.getAttribute('data-preview-id')||'';
  var name=nameEl?nameEl.textContent.trim():'this product';
  var url='https://softupakaran.com/product.html'+(id?'#'+id:'');
  var msg=encodeURIComponent('Check this out on SoftUpakaran: '+name+'\n'+url);
  var btn=document.createElement('button');
  btn.className='waShareBtn';
  btn.type='button';
  btn.setAttribute('aria-label','Share on WhatsApp');
  btn.innerHTML='<svg viewBox="0 0 32 32" width="13" height="13" fill="currentColor"><path d="M16 3C9.4 3 4 8.4 4 15c0 2.3.6 4.4 1.8 6.2L4 29l8-1.6c1.2.5 2.6.7 4 .7 6.6 0 12-5.4 12-12S22.6 3 16 3zm4.2 16.1c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.9 1-.1.2-.3.2-.5.1-1.8-.9-3-2.2-3.6-3.4-.2-.3 0-.5.1-.6l.3-.4c.1-.1.1-.2.2-.4 0-.1 0-.3 0-.4 0-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.6 2.6 4 3.6 2.3 1 2.3.7 2.7.6.4-.1 1.4-.6 1.6-1.1.2-.5.2-.9.1-1z"/></svg>Share';
  btn.addEventListener('click',function(e){
    e.preventDefault();
    e.stopPropagation();
    window.open('https://wa.me/?text='+msg,'_blank','noreferrer');
  });
  var body=card.querySelector('.popular-card__body');
  if(body) body.appendChild(btn);
}
function initWhatsAppShare(){
  document.querySelectorAll('.card[data-preview-id]').forEach(addShareBtn);
  new MutationObserver(function(mutations){
    mutations.forEach(function(m){
      m.addedNodes.forEach(function(n){
        if(n.nodeType!==1) return;
        if(n.matches&&n.matches('.card[data-preview-id]')) addShareBtn(n);
        if(n.querySelectorAll) n.querySelectorAll('.card[data-preview-id]').forEach(addShareBtn);
      });
    });
  }).observe(document.body,{childList:true,subtree:true});
}

/* ── 4. Sticky Buy Bar (product page) ── */
function initStickyBuyBar(){
  var bar=document.createElement('div');
  bar.id='stickyBuyBar';
  bar.innerHTML='<div class="stickyBuyInner"><div class="stickyBuyInfo"><span id="stickyName" class="stickyBuyName">SoftUpakaran</span><span id="stickyPrice" class="stickyBuyPrice"></span></div><a id="stickyWALink" class="stickyBuyBtn" href="https://wa.me/9779800000000" target="_blank" rel="noreferrer">💬 Order via WhatsApp</a></div>';
  document.body.appendChild(bar);

  function syncBar(){
    var nameEl=document.querySelector('.h1,[data-pd-name]');
    var priceEl=document.querySelector('.badge:not(.delivery-badge):not(.brand-badge):not(.nav-badge)');
    var name=nameEl?nameEl.textContent.trim():'';
    var price=priceEl?priceEl.textContent.trim():'';
    if(name) document.getElementById('stickyName').textContent=name;
    if(price) document.getElementById('stickyPrice').textContent=price;
    if(name){
      var msg='I want to order: '+name+(price?' ('+price+')':'')+' from SoftUpakaran.';
      document.getElementById('stickyWALink').href='https://wa.me/9779800000000?text='+encodeURIComponent(msg);
    }
  }

  new MutationObserver(syncBar).observe(document.querySelector('[data-product]')||document.body,{childList:true,subtree:true,characterData:true});

  var buyBtn=null;
  function observeBuyBtn(){
    var b=document.getElementById('buyNow');
    if(b&&b!==buyBtn){
      buyBtn=b;
      new IntersectionObserver(function(entries){
        bar.classList.toggle('stickyVisible',!entries[0].isIntersecting);
      },{threshold:0.1}).observe(buyBtn);
    }
  }
  new MutationObserver(observeBuyBtn).observe(document.body,{childList:true,subtree:true});
  syncBar();
}

/* ── 5. Skeleton Loading ── */
function makeSkeleton(){
  return '<div class="skeletonCard"><div class="skeleton sk-img"></div><div class="skeleton sk-title"></div><div class="skeleton sk-sub"></div><div class="skeleton sk-btn"></div></div>';
}
function initSkeletons(){
  var grids=document.querySelectorAll('.grid,[data-category-products]');
  grids.forEach(function(g){
    if(g.children.length>0) return;
    var count=Math.min(8,Math.max(4,Math.floor(g.offsetWidth/220)));
    var html='';
    for(var i=0;i<count;i++) html+=makeSkeleton();
    g.innerHTML=html;
    new MutationObserver(function(mutations,obs){
      if(g.querySelector('.card,.popular-card')){
        obs.disconnect();
        g.querySelectorAll('.skeletonCard').forEach(function(s){ s.remove(); });
      }
    }).observe(g,{childList:true});
  });
}

/* ── Init ── */
function init(){
  initBackToTop();
  initRecentSearches();
  initWhatsAppShare();
  initSkeletons();
  if(/product/.test(location.pathname+location.hash)) initStickyBuyBar();
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);
else init();
})();
