(function(){
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('primaryNav');
  if(!toggle || !nav) return;

  function closeNav(){
    nav.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded','false');
    toggle.setAttribute('aria-label','Open menu');
  }
  function openNav(){
    nav.classList.add('nav-open');
    toggle.setAttribute('aria-expanded','true');
    toggle.setAttribute('aria-label','Close menu');
  }

  toggle.addEventListener('click', function(e){
    e.stopPropagation();
    if(nav.classList.contains('nav-open')){ closeNav(); } else { openNav(); }
  });

  nav.addEventListener('click', function(e){
    if(e.target.tagName === 'A'){ closeNav(); }
  });

  document.addEventListener('click', function(e){
    if(nav.classList.contains('nav-open') && !nav.contains(e.target) && e.target !== toggle){
      closeNav();
    }
  });

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){ closeNav(); }
  });

  window.addEventListener('resize', function(){
    if(window.innerWidth > 900){ closeNav(); }
  });
})();
