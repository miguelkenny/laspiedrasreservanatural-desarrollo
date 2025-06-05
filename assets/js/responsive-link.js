function updateLinkTargets() {
    var links = document.querySelectorAll('.responsive-link');
    if (window.innerWidth < 768) { // Pantallas pequeñas
        links.forEach(function(link) {
            link.setAttribute('target', '_self');
        });
    } else { // Pantallas grandes
        links.forEach(function(link) {
            link.setAttribute('target', '_blank');
        });
    }
}

// Actualizar los enlaces al cargar la página y al redimensionar la ventana
window.addEventListener('load', updateLinkTargets);
window.addEventListener('resize', updateLinkTargets);