document.addEventListener('DOMContentLoaded', () => {

    // Referencias al DOM
    // CAMBIO: Seleccionamos el encabezado principal en lugar de solo la barra de navegación
    const mainHeader = document.querySelector('.main-header');

    // 1. STICKY HEADER EFFECT
    // Agrega una sombra extra cuando el usuario hace scroll hacia abajo
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add('scrolled');
            mainHeader.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
        } else {
            mainHeader.classList.remove('scrolled');
            mainHeader.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        }
    });

    // 2. MENÚ MÓVIL
    // ELIMINADO: La lógica del menú móvil ahora es manejada por Alpine.js en index.html
    // Se ha eliminado el event listener de vanilla JS para evitar conflictos.

    // 3. INTERACTIVIDAD DE TARJETAS (Opcional - UX Detail)
    // Simula feedback táctil en móviles para las tarjetas de servicios
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        card.addEventListener('touchstart', () => {
            card.style.transform = 'scale(0.98)';
        });
        card.addEventListener('touchend', () => {
            card.style.transform = 'translateY(-10px)';
        });
    });
});

// Añadir al final de script.js
function toggleAccordion(element) {
    // Busca el siguiente elemento hermano (el cuerpo del acordeón)
    const body = element.nextElementSibling;
    const icon = element.querySelector('i');

    // Alternar visualización
    if (body.style.display === "block") {
        body.style.display = "none";
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    } else {
        body.style.display = "block";
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    }
}