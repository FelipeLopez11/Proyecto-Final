document.addEventListener('DOMContentLoaded', () => {
    // boton_sesion.js

    const sesion_container = document.getElementById('sesion_container');
    const loginStatus = localStorage.getItem('logStatus') === 'true';

    if (!sesion_container) return;

    if (loginStatus) {
        sesion_container.innerHTML = `
            <a href="#" id="logoutBtn">Cerrar sesión</a>
        `;
        document.getElementById("logoutBtn").addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("logStatus");
            window.location.href = 'index.html';
        });
    } else {
        sesion_container.innerHTML = `
            <a href="login.html">Iniciar sesión</a>
        `;
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
