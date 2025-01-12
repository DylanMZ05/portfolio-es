const showModalButton = document.getElementById('showModal');
const favDialog = document.getElementById('favDialog');
const closeModalButton = document.getElementById('closeModal');

// Mostrar el modal con animación
showModalButton.addEventListener('click', () => {
    favDialog.showModal(); // Abre el modal
});

// Cerrar el modal con animación
closeModalButton.addEventListener('click', () => {
    favDialog.classList.add('closing'); // Agrega la clase para la animación de salida
    favDialog.addEventListener('animationend', () => {
        favDialog.classList.remove('closing'); // Quita la clase después de la animación
        favDialog.close(); // Cierra el modal oficialmente
    }, { once: true }); // Asegura que el evento solo se ejecute una vez
});