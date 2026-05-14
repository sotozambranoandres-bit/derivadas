// script.js

// Lógica para las animaciones de aparición suave al hacer scroll (Fade-in)
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos todos los elementos que tienen la clase 'fade-in'
    const fadeElements = document.querySelectorAll('.fade-in');
    // Configuramos el "observador" que detecta cuando un elemento entra en la pantalla
    const observerOptions = {
        root: null, // Usa el viewport (la pantalla visible)
        rootMargin: '0px',
        threshold: 0.15 // El 15% del elemento debe ser visible para disparar la animación
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento ya es visible en la pantalla
            if (entry.isIntersecting) {
                // Le agregamos la clase 'visible' para que CSS haga la animación
                entry.target.classList.add('visible');
                // Dejamos de observarlo para que la animación solo ocurra una vez
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Le decimos al observador que vigile todos los elementos 'fade-in'
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});

// Lógica para los botones de Mostrar/Ocultar Solución
function toggleSolution(id) {
    const container = document.getElementById(id);
    // El botón está justo antes del contenedor en el HTML
    const button = container.previousElementSibling; 

    if (container.classList.contains('show')) {
        container.classList.remove('show');
        button.innerHTML = '👁️ Mostrar Solución';
    } else {
        container.classList.add('show');
        button.innerHTML = '🙈 Ocultar Solución';
    }
}

// Lógica para el Menú Móvil (Hamburguesa)
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuBtn && navMenu) {
        // Al hacer clic en el botón de hamburguesa
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Cambiar icono entre hamburguesa y X
            if (navMenu.classList.contains('active')) {
                mobileMenuBtn.innerHTML = '✕'; // Icono de cerrar
            } else {
                mobileMenuBtn.innerHTML = '☰'; // Icono de hamburguesa
            }
        });

        // Cerrar menú automáticamente al hacer clic en cualquiera de los enlaces
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuBtn.innerHTML = '☰';
            });
        });
    }
});
