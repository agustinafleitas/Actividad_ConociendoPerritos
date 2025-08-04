//Almacenar en una variable el contenedor y el botón

/*COMPLETAR*/.addEventListener('click', () => { //¿A quien le agregamos el evento?¿Donde debemos hacer click?
   /*COMPLETAR*/.textContent = 'Cargando perrito...';

    // Completa la URL correcta de la API dentro del fetch
    fetch(/*COMPLETAR*/)

    // Convierte la respuesta a JSON
        .then(response => /*COMPLETAR*/)

    // Usa los datos para mostrar la imagen
        .then(data => {
        // Usa obtener la URL de la imagen y mostrarla en el contenedor. ¿Qué etiqueta HTML necesitamos para cargar la imagen? ¿Qué información de la API vamos a cargar?
            /*COMPLETAR*/.innerHTML = `
            /*COMPLETAR*/
        `;
        console.log(data);
    })

    // En caso de error muestra un mensaje y el error en consola
    .catch(error => {
        console.error('Error al obtener imagen:', error);
        /*COMPLETAR*/.textContent = ' COMPLETAR ';
    });
});
