document.getElementById("year").innerHTML = new Date().getFullYear();


/* ventana emergete */
const open2 = document.getElementById('open2');
const modalcontainer2 = document.getElementById('modalcontainer2');
const cerrarmodal2 = document.getElementById('cerrarmodal2');


open2.addEventListener('click', () => {
  modalcontainer2.classList.add('show');
  alert ('prueba');
});

cerrarmodal2.addEventListener('click', () => {
  modalcontainer2.classList.add('show');
});

  /* fin ventana emergente */