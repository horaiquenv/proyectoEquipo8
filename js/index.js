document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const peliculaContainer = document.querySelector(".pelicula-carousel");
  const peliculaItems = document.querySelectorAll(".pelicula-item");
  let currentIndex = 0;
  const maxIndex = Math.ceil(peliculaItems.length / 16) - 1;

  // Función para actualizar la visibilidad de las películas
  function updateMovies() {
    peliculaItems.forEach((item, index) => {
      if (index >= currentIndex * 16 && index < (currentIndex + 1) * 16) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  // Función para ir a la página anterior
  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateMovies();
    }
  });

  // Función para ir a la siguiente página
  nextBtn.addEventListener("click", function () {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateMovies();
    }
  });

  // Mostrar las primeras 16 películas al cargar la página
  updateMovies();
});

