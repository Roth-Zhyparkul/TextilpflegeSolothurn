// Hamburger menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('main-nav').classList.toggle('open');
});

// Optional: Close menu when a link is tapped (for nice UX)
document.querySelectorAll('#main-nav a').forEach(function(link) {
  link.addEventListener('click', function () {
    if(window.innerWidth <= 800) {
      document.getElementById('main-nav').classList.remove('open');
    }
  });
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = "Vielen Dank für Ihre Nachricht! Wir melden uns so schnell wie möglich.";
    document.getElementById('contact-form').reset();
});