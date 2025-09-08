// Hamburger menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('main-nav').classList.toggle('open');
});

// Close menu when a link is tapped
document.querySelectorAll('#main-nav a').forEach(function(link) {
  link.addEventListener('click', function () {
    if(window.innerWidth <= 800) {
      document.getElementById('main-nav').classList.remove('open');
    }
  });
});

// Make logo scroll to top smoothly
document.getElementById('logo-link').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({top: 0, behavior: 'smooth'});
});

// Contact form handler (keep your existing code)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = "Vielen Dank für Ihre Nachricht! Wir melden uns so schnell wie möglich.";
    document.getElementById('contact-form').reset();
});

// Hamburger menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('main-nav').classList.toggle('open');
});

// Close menu when any nav link is tapped (on mobile)
document.querySelectorAll('#main-nav a').forEach(function(link) {
  link.addEventListener('click', function () {
    if(window.innerWidth <= 800) {
      document.getElementById('main-nav').classList.remove('open');
    }
  });
});