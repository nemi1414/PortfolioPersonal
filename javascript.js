emailjs.init('UYIUMI6rR0fdRlFW6');

  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_vneod7q', 'template_545vbv9', this)
      .then(() => alert('Mensaje enviado!'))
      .catch(err => alert('Error al enviar: ' + JSON.stringify(err)));
  });