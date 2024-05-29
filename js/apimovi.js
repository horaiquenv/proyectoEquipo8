//definir funciones para cargar peliculas
async function getPopularMovies() {
    const apiKey = '03ed727080a2fb6dc267d9264faee778'; // Reemplaza 'TU_CLAVE_DE_API' con tu clave de API de TMDb
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
  
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
  
        const moviesGrid = document.getElementById('carouselMovies').querySelector('.carousel-inner');
        // Limpiar el contenido actual del carousel
        moviesGrid.innerHTML = '';
  
        // Obtener las películas en grupos de 8
        const moviesChunks = chunkArray(data.results, 8);
  
        // Iterar sobre los grupos de películas y agregarlas al carousel
        moviesChunks.forEach((chunk, index) => {
            const activeClass = index === 0 ? 'active' : ''; // Añadir la clase 'active' solo a la primera película
            const carouselItem = document.createElement('div');
            carouselItem.className = `carousel-item ${activeClass}`;
            const movieRow = document.createElement('div');
            movieRow.className = 'row row-cols-1 row-cols-md-4 g-4';
            chunk.forEach(movie => {
                const movieCard = `
            <div class="col">
                <div class="card h-100 movie-card"> <!-- Añadir la clase 'movie-card' a la tarjeta -->
                  <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="${movie.title}">
                  <div class="card-body">
                      <a href="./pages/detalles.html">
                    <h5 class="card-title">${movie.title}</h5>
                    </a>
                  </div>
                </div>
              </div>
          `;
                movieRow.innerHTML += movieCard;
            });
            carouselItem.appendChild(movieRow);
            moviesGrid.appendChild(carouselItem);
        });
    } catch (error) {
        console.error('Error al obtener las películas:', error);
    }
  }
  
  async function getFeaturedMovies() {
    const apiKey = '03ed727080a2fb6dc267d9264faee778'; // Reemplaza 'TU_CLAVE_DE_API' con tu clave de API de TMDb
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
  
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
  
        const carouselFeatured = document.getElementById('carouselFeatured').querySelector('.carousel-inner');
        // Limpiar el contenido actual del carousel
        carouselFeatured.innerHTML = '';
  
        // Obtener las películas en grupos de 5
        const moviesChunks = chunkArray(data.results, 5);
  
        // Iterar sobre los grupos de películas y agregarlas al carousel
        moviesChunks.forEach((chunk, index) => {
            const activeClass = index === 0 ? 'active' : ''; // Añadir la clase 'active' solo a la primera película
            const carouselItem = document.createElement('div');
            carouselItem.className = `carousel-item ${activeClass}`;
            const movieRow = document.createElement('div');
            movieRow.className = 'row flex-nowrap overflow-auto';
            chunk.forEach(movie => {
                const movieCard = `
            <div class="col">
                <div class="card h-100 movie-card"> <!-- Añadir la clase 'movie-card' a la tarjeta -->
                  <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="${movie.title}">
                  <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                  </div>
                </div>
              </div>
          `;
                movieRow.innerHTML += movieCard;
            });
            carouselItem.appendChild(movieRow);
            carouselFeatured.appendChild(carouselItem);
        });
    } catch (error) {
        console.error('Error al obtener las películas destacadas:', error);
    }
  }
  
  // Llamar a la función para obtener películas cuando se cargue la página
  document.addEventListener('DOMContentLoaded', () => {
    getPopularMovies();
    getFeaturedMovies();
  });
  
  // Función para dividir un array en chunks
  function chunkArray(array, size) {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }
  
