document.addEventListener('DOMContentLoaded', () => {
    const iniciar_sesionBtn = document.getElementById('iniciar_sesionBtn');
    const cerrar_sesionBtn = document.getElementById('cerrar_sesionBtn');

    const loggedInStatus = localStorage.getItem('logStatus');

    if (loggedInStatus === 'true') {
        // Si está logueado:
        if (iniciar_sesionBtn) iniciar_sesionBtn.classList.add('hidden');
        if (cerrar_sesionBtn) cerrar_sesionBtn.classList.remove('hidden');
    } else {
        // Si NO está logueado:
        if (iniciar_sesionBtn) iniciar_sesionBtn.classList.remove('hidden');
        if (cerrar_sesionBtn) cerrar_sesionBtn.classList.add('hidden');
    }

    // Lógica para el botón de Cerrar Sesión en index.html
    if (cerrar_sesionBtn) {
        cerrar_sesionBtn.addEventListener('click', () => {
            localStorage.removeItem('logStatus');
            location.reload();
        });
    }

    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-menu a'); 
    navLinks.forEach(link => {
        link.classList.remove('active');

        const linkPath = link.getAttribute('href'); 

        // Compara si el 'href' del enlace coincide con la ruta actual
        // o si es la página de inicio (index.html) cuando la ruta es la raíz ('')
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });
});

