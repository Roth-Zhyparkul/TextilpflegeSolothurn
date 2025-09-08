document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = "Vielen Dank für Ihre Nachricht! Wir melden uns so schnell wie möglich.";
    document.getElementById('contact-form').reset();
});