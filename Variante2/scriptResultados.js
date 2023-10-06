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
            `;
            tablaResultados.appendChild(fila);
        });
    }

    // Cargar los envíos al cargar la página
    cargarEnvios();


});
