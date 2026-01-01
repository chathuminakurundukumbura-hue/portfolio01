document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  var menuToggle = document.querySelector('.menu-toggle');
  var mobileMenu = document.querySelector('.mobile-menu');
  var closeMenu = document.querySelector('.close-menu');

  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      mobileMenu && mobileMenu.classList.toggle('active');
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener('click', function () {
      mobileMenu && mobileMenu.classList.remove('active');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        var targetEl = document.querySelector(href);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // hide mobile menu after click
        if (mobileMenu) mobileMenu.classList.remove('active');
      }
    });
  });

  // Intersection observer for section animations
  var observerOptions = { threshold: 0.3, rootMargin: '0px' };
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  document.querySelectorAll('section').forEach(function (section) {
    observer.observe(section);
  });

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Theme toggle (dark mode) - read preference from localStorage
  var themeToggle = document.getElementById('themeToggle');
  function applyTheme(theme) {
    if (theme === 'dark') document.body.classList.add('dark');
    else document.body.classList.remove('dark');
    if (themeToggle) themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
  var savedTheme = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = document.body.classList.contains('dark') ? 'dark' : 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem('theme', next); } catch (e) { }
    });
  }

  // Contact form submit handler (simple UI feedback)
  var form = document.getElementById('contactForm');
  var submitMsg = document.getElementById('submitMessage');
  // Send contact form contents to WhatsApp when submitted.
  // NOTE: Assumes the provided local number (0701688606) is Sri Lanka. Convert leading 0 to country code 94 => 94701688606
  var whatsappNumber = '94701688606';
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('name') ? document.getElementById('name').value.trim() : '';
      var email = document.getElementById('email') ? document.getElementById('email').value.trim() : '';
      var message = document.getElementById('message') ? document.getElementById('message').value.trim() : '';
      var text = 'Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message;
      var encoded = encodeURIComponent(text);
      var waUrl = 'https://wa.me/' + whatsappNumber + '?text=' + encoded;
      window.open(waUrl, '_blank', 'noopener');

      if (submitMsg) {
        submitMsg.style.display = 'block';
        setTimeout(function () {
          submitMsg.style.display = 'none';
        }, 2500);
      }
      form.reset();
    });
  }
});
