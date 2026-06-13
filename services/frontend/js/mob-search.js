(function(){
  function init(){
    var nav=document.querySelector('.topbar .navlinks');
    if(!nav)return;
    var btn=document.createElement('button');
    btn.className='btn icon mob-search-btn';
    btn.setAttribute('aria-label','Search');
    btn.setAttribute('type','button');
    btn.innerHTML='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
    nav.insertBefore(btn,nav.firstChild);
    btn.addEventListener('click',function(e){
      e.stopPropagation();
      var hdr=document.querySelector('header.topbar');
      hdr.classList.toggle('mob-search-active');
      if(hdr.classList.contains('mob-search-active')){
        var inp=hdr.querySelector('[data-search]');
        if(inp)setTimeout(function(){inp.focus();},60);
      }
    });
    document.addEventListener('keydown',function(e){
      if(e.key==='Escape'){
        var hdr=document.querySelector('header.topbar');
        if(hdr)hdr.classList.remove('mob-search-active');
      }
    });
    document.addEventListener('click',function(e){
      if(!e.target.closest('.search')&&!e.target.closest('.mob-search-btn')){
        var hdr=document.querySelector('header.topbar');
        if(hdr)hdr.classList.remove('mob-search-active');
      }
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);
  else init();
})();
