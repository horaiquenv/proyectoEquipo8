// Función para validar el inicio de sesión
function validarInicioSesion(event) {
    // Evitar que el formulario se envíe automáticamente
    event.preventDefault();

    // Obtener los valores de usuario y contraseña del formulario
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var email = emailInput.value.trim();
    var password = passwordInput.value.trim();

    // Verificar que se hayan ingresado valores válidos
    if (email === '' || password === '') {
        alert('Por favor, ingresa un correo electrónico y una contraseña válidos.');
        return;
    }

    // Validar si el nombre de usuario es un correo electrónico
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isEmail = emailPattern.test(email);

    if (!isEmail) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    // Supongamos que el usuario y la contraseña válidos son 'usuario@example.com' y '123'
    if (email === 'usuario@example.com' && password === '123') {
        // Usuario y contraseña válidos
        // Almacenar información del usuario en el almacenamiento local
        localStorage.setItem('usuarioValidado', 'Bienvenido ' + email);

        // Mostrar el nombre de usuario y el icono
        var nombreUsuarioElement = document.getElementById('nombre-usuario');
        if (nombreUsuarioElement) {
            nombreUsuarioElement.textContent = email;
        }

        var iconoUsuarioElement = document.getElementById('icono-usuario');
        if (iconoUsuarioElement) {
            iconoUsuarioElement.classList.remove('hidden');
        }

        // Ocultar el botón de inicio de sesión
        var botonContainer = document.querySelector('.button');
        if (botonContainer) {
            botonContainer.style.display = 'none';
        }

        // Redireccionar a la página principal (indexRegistrado.html)
        window.location.href = '../pages/indexRegistrado.html';
    } else {
        // Usuario o contraseña incorrectos
        alert('Usuario o contraseña incorrectos');
        // Limpiar los campos de usuario y contraseña
        emailInput.value = '';
        passwordInput.value = '';
    }
}

// Obtener el formulario de inicio de sesión al cargar el DOM
window.onload = function() {
    // Obtener el formulario de inicio de sesión
    var loginForm = document.querySelector('.form');

    // Verificar si el formulario se encontró correctamente antes de agregar el evento
    if (loginForm) {
        // Agregar un evento de escucha para el envío del formulario
        loginForm.addEventListener('submit', validarInicioSesion);
    } else {
        console.error('No se encontró el formulario de inicio de sesión.');
    }
}
