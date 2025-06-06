document.addEventListener('DOMContentLoaded', () => {
    const cerrar_sesionBtn = document.getElementById('cerrar_sesionBtn');

    
    const loginStatus = localStorage.getItem('logStatus');

    if (loginStatus !== 'true') {
        
        if (cerrar_sesionBtn) {
            cerrar_sesionBtn.classList.add('hidden');
        }
        alert("Debes iniciar sesión para ver esta página.");
        window.location.href = 'login.html'; 
        return; 
    } else {
        if (cerrar_sesionBtn) {
            cerrar_sesionBtn.classList.remove('hidden');
        }
    }

    if (cerrar_sesionBtn) {
        cerrar_sesionBtn.addEventListener('click', () => {
            localStorage.removeItem('logStatus'); 
            window.location.href = 'index.html'; 
        });
    }
});