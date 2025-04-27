document.addEventListener("DOMContentLoaded", function () {
    const paragraphs = document.querySelectorAll('.animated-text');
    let currentIndex = 0;
    const totalParagraphs = paragraphs.length;

    // Función para verificar el tamaño de la pantalla
    function getItemsToShow() {
        if (window.innerWidth <= 768) {
            return 1;  // Mostrar 1 párrafo a la vez en pantallas pequeñas
        } else {
            return 2;  // Mostrar 2 párrafos a la vez en pantallas grandes
        }
    }

    // Función para mostrar los párrafos
    function showParagraphs() {
        const itemsToShow = getItemsToShow();  // Obtener cuántos párrafos mostrar
        const nextIndex = Math.min(currentIndex + itemsToShow, totalParagraphs);

        for (let i = currentIndex; i < nextIndex; i++) {
            paragraphs[i].classList.add('show');  // Mostrar el párrafo
        }

        currentIndex = nextIndex;

        // Si no hay más párrafos por mostrar, reiniciar
        if (currentIndex >= totalParagraphs) {
            currentIndex = 0;
            setTimeout(showParagraphs, 4000); // Reinicia después de 4 segundos
        }
    }

    // Mostrar los párrafos automáticamente cada 4 segundos
    setInterval(showParagraphs, 4000);
});
