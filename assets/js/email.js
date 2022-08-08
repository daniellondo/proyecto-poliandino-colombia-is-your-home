emailjs.init("aUyHGKH_UHuUqNE_D");

const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault();
    btn.value = 'Enviando...';
    const serviceID = 'service_s1y0soe';
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