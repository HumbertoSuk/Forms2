document.addEventListener("DOMContentLoaded", function() {
    const tablaResultados = document.getElementById("tablaResultados");
    const botonLimpiar = document.getElementById("limpiarTabla"); // Agregar el botón "Limpiar Tabla"

    // Obtener los envíos almacenados en el almacenamiento local
    const envios = JSON.parse(localStorage.getItem("envios")) || [];

    // Función para cargar los envíos en la tabla
    function cargarEnvios() {
        // Limpiar la tabla antes de cargar los envíos
        while (tablaResultados.firstChild) {
            tablaResultados.removeChild(tablaResultados.firstChild);
        }

        // Recorrer los envíos y agregar filas a la tabla
        envios.forEach((envio, index) => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${envio.id}</td>
                <td>${envio.nombre}</td>
                <td>${envio.apellidos}</td>
                <td>${envio.telefono}</td>
                <td>${envio.correo}</td>
                <td>${envio.edad}</td>
                <td>${envio.fechaNacimiento}</td>
                <td><button class="btn btn-danger" data-index="${index}">Eliminar</button></td>
            `;
            tablaResultados.appendChild(fila);
        });
    }

    // Cargar los envíos al cargar la página
    cargarEnvios();

    // Agregar event listener para los botones de eliminación
    const botonesEliminar = document.querySelectorAll(".btn-danger");
    botonesEliminar.forEach((boton) => {
        boton.addEventListener("click", function() {
            const index = boton.getAttribute("data-index");
            if (confirm("¿Estás seguro de que quieres eliminar este registro?")) {
                // Eliminar el registro del arreglo de envíos
                envios.splice(index, 1);

                // Actualizar el almacenamiento local con el nuevo arreglo
                localStorage.setItem("envios", JSON.stringify(envios));

                // Volver a cargar los envíos en la tabla después de eliminar
                cargarEnvios();
                location. reload();
            }
        });
    });

    // Agregar event listener para el botón "Limpiar Tabla"
    botonLimpiar.addEventListener("click", function() {
        if (confirm("¿Estás seguro de que quieres limpiar todos los registros de la tabla?")) {
            // Limpiar el arreglo de envíos
            envios.length = 0;

            // Actualizar el almacenamiento local con el arreglo vacío
            localStorage.setItem("envios", JSON.stringify(envios));

            // Limpiar la tabla
            cargarEnvios();
            location. reload();
        }
    });
});
