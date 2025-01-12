const langButtons = document.querySelectorAll('.lang-button');
const textToChange = document.querySelectorAll('[data-section]');

const jsonBasePath = './';

document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'es';
    loadLanguage(savedLanguage);
});

langButtons.forEach(button => {
    button.addEventListener('click', () => {
        const language = button.dataset.language;
        localStorage.setItem('language', language);
        loadLanguage(language);
    });
});

function loadLanguage(language) {
    fetch(`${jsonBasePath}${language}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar el archivo: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            textToChange.forEach(el => {
                const section = el.dataset.section;
                const value = el.dataset.value;

                if (data[section] && data[section][value]) {
                    el.innerHTML = data[section][value];
                } else {
                    console.warn(`Clave no encontrada: ${section}.${value}`);
                }
            });
        })
        .catch(error => {
            console.error('Error al cargar el idioma:', error);
        });
}