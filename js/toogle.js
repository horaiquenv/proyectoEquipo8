document.addEventListener('DOMContentLoaded', () => {
    // Configurar el botón de hamburguesa
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
  
    navbarToggler.addEventListener('click', () => {
      navbarCollapse.classList.toggle('active');
    });
  });