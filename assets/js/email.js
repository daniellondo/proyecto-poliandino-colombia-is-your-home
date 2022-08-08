emailjs.init("qIkuGeU_9NaOaoLH6");

const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault();
    btn.value = 'Enviando...';
    const serviceID = 'service_o465mri';
    const templateID = 'template_us25cee';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'Enviar';
        alert('Mensaje Enviado!!');
    }, function(error) {
        btn.value = 'Enviar';
        alert(JSON.stringify(error));
    });
})