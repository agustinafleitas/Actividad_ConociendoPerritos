//Almacenar en una variable el contenedor y el botón

... .addEventListener('click', () => {
    contenedorPerrito.textContent = 'Cargando perrito...';

    // Completa la URL correcta de la API dentro del fetch
    fetch(/* Aquí va la URL de la API, que esta en el readme.md */)
    // Convierte la respuesta a JSON
        .then(response => /* Completar aquí para convertir a JSON */)
    // Usa los datos para mostrar la imagen
        .then(data => {
        // Usa data.message para obtener la URL de la imagen
            contenedorPerrito.innerHTML = `
            <img src="${/* Completar con la URL de la imagen */}" alt="Imagen de perrito" />
        `;
        console.log(data);
    })
    // En caso de error muestra un mensaje y el error en consola
    .catch(error => {
        console.error('Error al obtener imagen:', error);
        contenedorPerrito.textContent = 'Hubo un problema al cargar la imagen.';
    });
});
