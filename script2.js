document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario");
    const mensajeError = document.getElementById("mensajeError");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        // Inicializar una variable para almacenar los errores
        let errores = [];

        // Obtener los valores de los campos
        const id = formulario.id.value;
        const nombre = formulario.nombre.value;
        const apellidos = formulario.apellidos.value;
        const telefono = formulario.telefono.value;
        const correo = formulario.correo.value;
        const edad = formulario.edad.value;
        const fechaNacimiento = formulario.fechaNacimiento.value;

        // Validar ID (5 dígitos exactos)
        if (!/^\d{5}$/.test(id)) {
            errores.push("El ID debe tener 5 dígitos exactos.");
        }

        // Validar nombre y apellidos (no pueden estar vacíos)
        if (nombre.trim() === "" || apellidos.trim() === "") {
            errores.push("El nombre y los apellidos no pueden estar vacíos.");
        }

        // Validar teléfono (###)###-####
        if (!/^\(\d{3}\)\d{3}-\d{4}$/.test(telefono)) {
            errores.push("El teléfono debe tener el formato (###)###-####.");
        }

        // Validar correo electrónico
        if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(correo)) {
            errores.push("El correo electrónico no es válido.");
        }

        // Validar edad (número positivo)
        const edadNum = parseInt(edad);
        if (isNaN(edadNum) || edadNum <= 0) {
            errores.push("La edad debe ser un número positivo.");
        }

        // Validar fecha de nacimiento (AAAA-MM-DD)
        if (!/^\d{4}-\d{2}-\d{2}$/.test(fechaNacimiento)) {
            errores.push("La fecha de nacimiento debe tener el formato AAAA-MM-DD.");
        }

        // Mostrar todos los errores acumulados
        if (errores.length > 0) {
            mensajeError.innerHTML = "<ul>";
            errores.forEach(function(error) {
                mensajeError.innerHTML += "<li>" + error + "</li>";
            });
            mensajeError.innerHTML += "</ul>";
        } else {
            // Si no hay errores, puedes enviar el formulario o realizar otras acciones aquí
            mensajeError.textContent = "Formulario enviado con éxito.";
        }
    });
});
