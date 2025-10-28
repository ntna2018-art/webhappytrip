document.addEventListener('DOMContentLoaded', function () {
  if (window.AOS) AOS.init({ duration: 600, once: true });

  const btn = document.getElementById('theme-toggle');
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    btn.textContent = 'Light';
  }
  btn && btn.addEventListener('click', function () {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
      btn.textContent = 'Light';
    } else {
      localStorage.setItem('theme', 'light');
      btn.textContent = 'Dark';
    }
  });


  const sub = document.getElementById('subscribe-form');
  if (sub) {
    sub.addEventListener('submit', function (e) {
      e.preventDefault(); alert('Cảm ơn bạn đã đăng ký!');
      sub.reset();
    });
  }


  const contact = document.getElementById('contact-form');
  if (contact) {
    contact.addEventListener('submit', function (e) {
      e.preventDefault(); alert('Đã gửi liên hệ. Chúng tôi sẽ liên hệ lại sớm!');
      contact.reset();
    });
  }
});

const cta = document.createElement('a');
cta.href = 'tour-detail.html';
cta.id = 'floating-cta';
cta.textContent = 'Đặt tour ngay';
document.body.appendChild(cta);

window.addEventListener('load', () => {
  const pre = document.getElementById('preloader');
  if (pre) {
    setTimeout(() => { pre.classList.add('fade-out'); }, 2200);
    setTimeout(() => { pre.remove(); }, 3000);
  }
});
(function () {
  if (!window.chatbase || window.chatbase("getState") !== "initialized") {
    window.chatbase = (...arguments) => {
      if (!window.chatbase.q) {
        window.chatbase.q = []
      } window.chatbase.q.push(arguments)
    };
    window.chatbase = new Proxy(window.chatbase, {
      get(target, prop) {
        if (prop === "q") { return target.q } return (...args) => target(prop, ...args)
      }
    })
  }
  const onLoad = function () {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "wvI9k0r-6LrTOm_XaVFd2";
    script.domain = "www.chatbase.co";
    document.body.appendChild(script)
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onLoad);
  } else {
    onLoad();
  }
})();
