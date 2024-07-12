document.addEventListener('DOMContentLoaded', function () {
    // Función para cargar todas las películas y mostrarlas en la tabla
    function cargarPeliculas() {
        fetch('http://localhost:8080/movies/pelicula')
            .then(response => response.json())
            .then(peliculas => {
                const tableBody = document.getElementById('bodyTablePeliculas');
                tableBody.innerHTML = ''; // Limpiar la tabla
                peliculas.forEach(pelicula => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${pelicula.titulo}</td>
                        <td>${pelicula.duracion}</td>
                        <td>${pelicula.genero}</td>
                        <td><img class="img-thumbnail" src="../assets/img/${pelicula.imagen}" alt="${pelicula.titulo}" width="90"></td>
                        <td>
                            <button class="btn btn-danger" onclick="eliminarPelicula(${pelicula.id})">Eliminar</button>
                            <button class="btn btn-primary" onclick="mostrarFormularioEdicion(${pelicula.id})">Editar</button>
                        </td>
                    `;
                    tableBody.appendChild(row);
                });
            })
            .catch(error => console.error('Error:', error));
    }

    // Función para eliminar una película
    window.eliminarPelicula = function (id) {
        fetch(`http://localhost:8080/movies/pelicula?id=${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                alert('Película eliminada exitosamente');
                cargarPeliculas(); // Recargar la lista de películas
            } else {
                alert('Error al eliminar la película');
            }
        })
        .catch(error => console.error('Error:', error));
    }

    // Función para mostrar el formulario de edición con los datos actuales de la película
    window.mostrarFormularioEdicion = function (id) {
        const pelicula = peliculas.find(p => p.id === id); // Buscar la película por ID
        if (pelicula) {
            document.getElementById('editarTitulo').value = pelicula.titulo;
            document.getElementById('editarGenero').value = pelicula.genero;
            document.getElementById('editarDuracion').value = pelicula.duracion;
            document.getElementById('editarImagen').value = pelicula.imagen;
            document.getElementById('guardarCambiosBtn').onclick = function(event) {
                event.preventDefault();
                editarPelicula(id);
            };
        }
    }

    // Función para editar una película
    function editarPelicula(id) {
        const titulo = document.getElementById('titulo').value;
        const genero = document.getElementById('genero').value;
        const duracion = document.getElementById('duracion').value;
        const imagen = document.getElementById('imagen').value;
        
        const peliculaActualizada = {
            id: id,
            titulo: titulo,
            genero: genero,
            duracion: duracion,
            imagen: imagen
        };

        fetch(`http://localhost:8080/movies/pelicula?id=${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(peliculaActualizada)
        })
        .then(response => {
            if (response.ok) {
                alert('Película actualizada exitosamente');
                cargarPeliculas(); // Recargar la lista de películas
            } else {
                alert('Error al actualizar la película');
            }
        })
        .catch(error => console.error('Error:', error));
    }

    // Función para agregar una nueva película
    // document.getElementById('formNuevaPelicula').onsubmit = function(event) {
    //     event.preventDefault();
    //     const titulo = document.getElementById('titulo').value;
    //     const genero = document.getElementById('genero').value;
    //     const duracion = document.getElementById('duracion').value;
    //     const imagen = document.getElementById('imagen').value;

    //     const nuevaPelicula = {
    //         titulo: titulo,
    //         genero: genero,
    //         duracion: duracion,
    //         imagen: imagen
    //     };

    //     fetch('http://localhost:8080/movies/pelicula', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(nuevaPelicula)
    //     })
    //     .then(response => {
    //         if (response.ok) {
    //             alert('Película agregada exitosamente');
    //             document.getElementById('formNuevaPelicula').reset(); // Resetear el formulario
    //             cargarPeliculas(); // Recargar la lista de películas
    //         } else {
    //             alert('Error al agregar la película');
    //         }
    //     })
    //     .catch(error => console.error('Error:', error));
    // }

    // Cargar todas las películas cuando se cargue la página
    cargarPeliculas();
});
