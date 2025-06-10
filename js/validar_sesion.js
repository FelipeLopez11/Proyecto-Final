// validar_sesion.js

document.addEventListener('DOMContentLoaded', () => {
    const loginStatus = localStorage.getItem('logStatus');

    // Lista de rutas protegidas
    const paginasProtegidas = [
        'ventajas_solar.html',
        'Funcionamiento.html',
        'nosotros.html'
    ];

    const estaProtegida = paginasProtegidas.some(pagina =>
        location.pathname.endsWith(pagina)
    );

    if (estaProtegida && loginStatus !== 'true') {
        alert("Debes iniciar sesión para ver esta página.");
        window.location.href = 'login.html';
    }


});

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
