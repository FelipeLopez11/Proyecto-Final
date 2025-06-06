document.addEventListener('DOMContentLoaded', () => {
    // ** Usuario y contraseña predefinidos **
    const username = 'admin';
    const password = 'admin';

    const sesion = document.getElementById('sesion');
    const usernameInput = document.getElementById('username'); 
    const passwordInput = document.getElementById('password'); 
    const mensaje = document.getElementById('mensaje'); 

     if (sesion) {
        sesion.addEventListener('submit', (event) => {
            event.preventDefault();

            const ingresarUsuario = usernameInput.value;
            const ingresarPasword = passwordInput.value;

            if (ingresarUsuario === username && ingresarPasword === password) {
                mensaje.textContent = '¡Inicio de sesión exitoso! Redirigiendo...';

                localStorage.setItem('logStatus', 'true');

                setTimeout(() => {
                    window.location.href = 'sesion_iniciada.html';
                }, 1000);
            } else {
                mensaje.textContent = 'Usuario o contraseña incorrectos.';
                localStorage.removeItem('logStatus');
            }
        });
    }
});