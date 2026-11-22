emailjs.init({ publicKey: 'UYIUMI6rR0fdRlFW6' });

const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    formStatus.textContent = 'Enviando tu mensaje…';
    submitButton.disabled = true;

    emailjs.sendForm('service_vneod7q', 'template_545vbv9', form)
        .then(function() {
            formStatus.textContent = '¡Mensaje enviado! Gracias por escribirme.';
            form.reset();
        })
        .catch(function(error) {
            console.error('No se pudo enviar el mensaje de contacto.', error);
            formStatus.textContent = 'No se pudo enviar el mensaje. Podés escribirme directamente a juanignacionemi@gmail.com.';
        })
        .finally(function() {
            submitButton.disabled = false;
        });
});

document.getElementById('current-year').textContent = new Date().getFullYear();