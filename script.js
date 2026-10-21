var dict = window.CIRCL_I18N;

(function(){
  var root = document.documentElement;
  var btn = document.getElementById('themeToggle');
  btn.addEventListener('click', function(){
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
  });
})();

(function(){
  var toggle = document.getElementById('menuToggle');
  var drawer = document.getElementById('mobileDrawer');
  toggle.addEventListener('click', function(){
    drawer.classList.toggle('open');
  });
  drawer.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ drawer.classList.remove('open'); });
  });
})();

(function(){
  var langButtons = document.querySelectorAll('.lang-btn');
  function setLang(lang){
    if(!dict[lang]) return;
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      if(dict[lang][key] !== undefined){
        el.style.transition = 'opacity .2s ease';
        el.style.opacity = 0;
        setTimeout(function(){
          el.innerHTML = dict[lang][key];
          el.style.opacity = 1;
        }, 160);
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){
      var key = el.getAttribute('data-i18n-placeholder');
      if(dict[lang][key] !== undefined) el.placeholder = dict[lang][key];
    });
    document.body.classList.remove('lang-en','lang-si','lang-ta');
    document.body.classList.add('lang-' + lang);
    document.documentElement.setAttribute('lang', lang);
    langButtons.forEach(function(b){ b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false'); });
  }
  langButtons.forEach(function(b){
    b.addEventListener('click', function(){ setLang(b.dataset.lang); });
  });
  window.__circlSetLang = setLang;
})();

var langFontStyle = document.createElement('style');
langFontStyle.textContent =
  "body.lang-si [data-i18n], body.lang-si input, body.lang-si textarea{font-family:var(--font-si);}" +
  "body.lang-ta [data-i18n], body.lang-ta input, body.lang-ta textarea{font-family:var(--font-ta);}";
document.head.appendChild(langFontStyle);

(function(){
  var words = [
    {text:"Discover", lang:"en"},
    {text:"සොයාගන්න", lang:"si"},
    {text:"கண்டறியுங்கள்", lang:"ta"}
  ];
  var el = document.getElementById('slDemoWord');
  if(!el) return;
  var i = 0;
  setInterval(function(){
    i = (i + 1) % words.length;
    el.style.transition = 'opacity .3s ease';
    el.style.opacity = 0;
    setTimeout(function(){
      el.textContent = words[i].text;
      el.setAttribute('data-lang', words[i].lang);
      el.style.opacity = 1;
    }, 300);
  }, 2200);
})();

(function(){
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.15});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

  var logoEl = document.getElementById('scrollFlipLogo');
  var phoneEl = document.getElementById('phoneMock');
  if(logoEl && phoneEl){
    var flipObserver = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          logoEl.classList.remove('do-flip');
          void logoEl.offsetWidth;
          logoEl.classList.add('do-flip');
        }
      });
    }, {threshold: 0.3});
    flipObserver.observe(phoneEl);
  }
})();

(function(){
  var pills = document.querySelectorAll('#simPills .pill-btn');
  var screens = document.querySelectorAll('.sim-screen');
  var navItems = document.querySelectorAll('.sim-nav-item, .sim-nav-item-center');

  function switchScreen(targetId) {
    screens.forEach(function(s){ s.classList.remove('active'); });
    var targetScreen = document.getElementById(targetId);
    if(targetScreen) targetScreen.classList.add('active');

    pills.forEach(function(p){
      p.classList.toggle('active', p.getAttribute('data-target') === targetId);
    });

    navItems.forEach(function(n){
      n.classList.toggle('active', n.getAttribute('data-target') === targetId);
    });
  }

  pills.forEach(function(pill){
    pill.addEventListener('click', function(){
      switchScreen(pill.getAttribute('data-target'));
    });
  });

  navItems.forEach(function(nav){
    nav.addEventListener('click', function(){
      switchScreen(nav.getAttribute('data-target'));
    });
  });
})();

(function(){
  document.querySelectorAll('.faq-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      var item   = btn.parentElement;
      var answer = item.querySelector('.faq-answer');
      var isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item.open').forEach(function(other){
        if(other !== item){
          other.classList.remove('open');
          other.querySelector('.faq-answer').style.maxHeight = null;
        }
      });

      if(isOpen){
        item.classList.remove('open');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  var origSetLang = window.__circlSetLang;
  if(origSetLang){
    window.__circlSetLang = function(lang){
      origSetLang(lang);
      setTimeout(function(){
        document.querySelectorAll('.faq-item.open .faq-answer').forEach(function(a){
          a.style.maxHeight = a.scrollHeight + 'px';
        });
      }, 250);
    };
  }
})();

(function(){
  var form = document.getElementById('contactForm');
  var btn = document.getElementById('submitBtn');
  var status = document.getElementById('formStatus');
  if(!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var currentLang = document.documentElement.getAttribute('lang') || 'en';
    var originalLabel = btn.textContent;
    btn.disabled = true;
    btn.textContent = '...';
    status.textContent = '';
    status.className = 'form-status';

    var data = new FormData(form);

    fetch('https://formsubmit.co/ajax/admin.circl@gmail.com', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: data
    }).then(function(res){
      if(res.ok){
        status.textContent = dict[currentLang].form_sent;
        status.className = 'form-status ok';
        form.reset();
      } else {
        status.textContent = dict[currentLang].form_error;
        status.className = 'form-status err';
      }
    }).catch(function(){
      status.textContent = dict[currentLang].form_error;
      status.className = 'form-status err';
    }).finally(function(){
      btn.disabled = false;
      btn.textContent = dict[currentLang].form_submit || originalLabel;
    });
  });
})();

(function(){
  var phone = document.getElementById('phoneMock');
  var wrap = document.querySelector('.phone-wrap');
  if(!phone || !wrap) return;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isTouch = window.matchMedia('(hover: none)').matches;
  if(reduceMotion || isTouch) return;
  wrap.addEventListener('mousemove', function(e){
    var rect = wrap.getBoundingClientRect();
    var px = (e.clientX - rect.left) / rect.width - 0.5;
    var py = (e.clientY - rect.top) / rect.height - 0.5;
    phone.style.transform = 'rotateY(' + (-10 - px * 10) + 'deg) rotateX(' + (4 + py * 8) + 'deg)';
  });
  wrap.addEventListener('mouseleave', function(){
    phone.style.transform = '';
  });
})();