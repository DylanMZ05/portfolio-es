window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
        // Si está activo, añade la clase `closing` y elimina `active` después
        navMenu.classList.add('closing');
        navMenu.classList.remove('active');
        hamburger.classList.remove('open');

        // Después de la animación, oculta completamente el menú
        setTimeout(() => {
            navMenu.classList.remove('closing');
        }, 300); // Coincide con la duración de la animación de salida
    } else {
        // Si no está activo, muéstralo con la animación de entrada
        navMenu.classList.add('active');
        hamburger.classList.add('open');
    }
});


window.addEventListener('scroll', () => {
    const header = document.getElementById('header');

    if (window.scrollY > 50) { 
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



function copyToClipboard(elementId, triggerElement) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => {
        triggerElement.classList.add('copied');
        setTimeout(() => {
            triggerElement.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar el texto', err);
    });
}