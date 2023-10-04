document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        // Obtener los valores de los campos
        const id = formulario.id.value;
        const nombre = formulario.nombre.value;
        const apellidos = formulario.apellidos.value;
        const telefono = formulario.telefono.value;
        const correo = formulario.correo.value;
        const edad = formulario.edad.value;
        const fechaNacimiento = formulario.fechaNacimiento.value;

        // Función para mostrar errores debajo de los campos
        function mostrarError(campo, mensaje) {
            const errorElement = document.getElementById("error" + campo.charAt(0).toUpperCase() + campo.slice(1));
            errorElement.textContent = mensaje;

            // Agregar o quitar la clase "error-border" para establecer o eliminar el borde rojo
            if (mensaje) {
                formulario[campo].classList.add("error-border");
            } else {
                formulario[campo].classList.remove("error-border");
            }

            errorElement.style.color = "red"; // Cambiar el color a rojo
        }

        // Validar ID (5 dígitos exactos)
        if (!/^\d{5}$/.test(id)) {
            mostrarError("id", "El ID debe tener 5 dígitos exactos."); // Mostrar error debajo del campo
        } else {
            mostrarError("id", ""); // Limpiar el campo
        }

        // Validar nombre y apellidos (no pueden estar vacíos)
        if (nombre.trim() === "" || apellidos.trim() === "") {
            mostrarError("nombre", "El nombre y los apellidos no pueden estar vacíos.");
            mostrarError("apellidos", "El nombre y los apellidos no pueden estar vacíos.");
        } else {
            mostrarError("nombre", ""); // Limpiar el campo
            mostrarError("apellidos", ""); // Limpiar el campo
        }

        // Validar teléfono (###)###-####
        if (!/^\(\d{3}\)\d{3}-\d{4}$/.test(telefono)) {
            mostrarError("telefono", "El teléfono debe tener el formato (###)###-####.");
        } else {
            mostrarError("telefono", ""); // Limpiar el campo
        }

        // Validar correo electrónico
        if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(correo)) {
            mostrarError("correo", "El correo electrónico no es válido.");
        } else {
            mostrarError("correo", ""); // Limpiar el campo
        }

        // Validar edad (número positivo)
        const edadNum = parseInt(edad);
        if (isNaN(edadNum) || edadNum <= 0) {
            mostrarError("edad", "La edad debe ser un número positivo.");
        } else {
            mostrarError("edad", ""); // Limpiar el campo
        }

        // Validar fecha de nacimiento (AAAA-MM-DD)
        if (!/^\d{4}-\d{2}-\d{2}$/.test(fechaNacimiento)) {
            mostrarError("fechaNacimiento", "La fecha de nacimiento debe tener el formato AAAA-MM-DD.");
        } else {
            mostrarError("fechaNacimiento", ""); // Limpiar el campo
        }


            // Si no hay errores, puedes enviar el formulario o realizar otras acciones aquí
            mensaje.textContent = "Formulario enviado con éxito.";

    });
});
