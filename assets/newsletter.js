(function(){
  var forms = document.querySelectorAll('form[data-newsletter]');
  forms.forEach(function(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var wrap = form.closest('.newsletter-box');
      var msg = wrap ? wrap.querySelector('.newsletter-msg') : null;
      var btn = form.querySelector('button');
      var data = new FormData(form);

      if(btn){ btn.disabled = true; btn.textContent = 'Sending…'; }

      fetch(window.location.pathname, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString()
      }).then(function(res){
        if(!res.ok){ throw new Error('bad status'); }
        form.reset();
        form.hidden = true;
        if(msg){
          msg.textContent = "You're in — check your inbox to confirm your subscription.";
          msg.classList.remove('err');
          msg.classList.add('show', 'ok');
        }
      }).catch(function(){
        if(btn){ btn.disabled = false; btn.textContent = 'Subscribe'; }
        if(msg){
          msg.textContent = 'Something went wrong — please try again in a moment.';
          msg.classList.remove('ok');
          msg.classList.add('show', 'err');
        }
      });
    });
  });
})();
