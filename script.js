// Hamburger menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

menuToggle.addEventListener('click', function() {
  mainNav.classList.toggle('open');
});

// Close menu when a link is tapped (mobile only)
mainNav.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function () {
    if(window.innerWidth <= 800) {
      mainNav.classList.remove('open');
    }
  });
});

// Smooth scroll for logo
document.getElementById('logo-link').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({top: 0, behavior: 'smooth'});
});

// Contact form handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = "Vielen Dank für Ihre Nachricht! Wir melden uns so schnell wie möglich.";
    document.getElementById('contact-form').reset();
});