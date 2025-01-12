const langButtons = document.querySelectorAll('.lang-button');
const textToChange = document.querySelectorAll('[data-section]');

const jsonBasePath = './';

langButtons.forEach(button => {
    button.addEventListener('click', () => {
        const language = button.dataset.language; // Asegúrate de agregar data-language="en"/"es" en los botones

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
    });
});