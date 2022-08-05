emailjs.init("aUyHGKH_UHuUqNE_D");

const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault();
    btn.value = 'Enviando...';
    const serviceID = 'service_0ynhlfn';
    const templateID = 'template_bldgsrt';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'Enviar';
        alert('Mensaje Enviado!!');
    }, function(error) {
        btn.value = 'Enviar';
        alert(JSON.stringify(error));
    });
})