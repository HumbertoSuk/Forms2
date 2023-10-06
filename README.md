# Explique los arreglos en JavaScript

Los arreglos son estructuras de datos fundamentales en JavaScript que permiten almacenar y acceder a una colección ordenada de elementos. Cada elemento en un arreglo se identifica mediante un índice, comenzando desde 0 para el primer elemento. Los arreglos pueden contener elementos de diferentes tipos, incluyendo números, cadenas, objetos, funciones, otros arreglos, entre otros.

Como se puede observar es la misma estructura de datos que otros lenguajes.

### Creación de arreglos:

### 1. Sintaxis literal de arreglo:

```javascript
const miArreglo = [1, 2, 3, 4, 5];
```

### 2. Usando el constructor Array:

```javascript
const otroArreglo = new Array(3); // Crea un arreglo con 3 elementos vacíos
```

## Agregar elementos dinámicamente:

```javascript
const arregloVacio = [];
arregloVacio.push(1); // Agrega un elemento al final
arregloVacio.unshift(0); // Agrega un elemento al principio
```

### 3. Acceso:

Puedes acceder a los elementos de un arreglo utilizando su índice

```javascript
const miArreglo = [10, 20, 30, 40, 50];
console.log(miArreglo[2]); // Imprime 30
```

## Propiedades y métodos útiles

Los arreglos en JavaScript tienen propiedades y métodos útiles que facilitan su manipulación:

### Propiedades:

1- `length:` Devuelve la cantidad de elementos en el arreglo.

```javascript
const miArreglo = [1, 2, 3, 4, 5];
console.log(miArreglo.length); // Imprime 5
```

### Metodos:

1- `push():` Agrega un elemento al final del arreglo.

2- `pop():` Elimina el último elemento del arreglo.

3- `shift():` Elimina el primer elemento del arreglo.

4- `unshift():` Agrega un elemento al principio del arreglo.

5- `splice():` Permite agregar, eliminar o reemplazar elementos en cualquier posición del arreglo.

6- `concat():` Combina dos o más arreglos para crear uno nuevo.

7- `slice():` Devuelve una copia superficial de un rango de elementos del arreglo.

```javascript
const miArreglo = [1, 2, 3];
miArreglo.push(4); // [1, 2, 3, 4]
miArreglo.pop(); // [1, 2, 3]
miArreglo.shift(); // [2, 3]
miArreglo.unshift(0); // [0, 2, 3]
```

### Iteración sobre arreglos

Puedes recorrer un arreglo usando bucles como `for`, o métodos de iteración como `forEach`, `map`, `filter`, `reduce`, entre otros.

```javascript
const miArreglo = [1, 2, 3, 4, 5];
miArreglo.forEach((elemento) => {
  console.log(elemento);
});
```

# Explique el almacenamiento del navegador (sessionStorage y localStorage) indique ventajas y desventajas, capacidad de almacenamiento y como accederlo utilizando java script (como almacenar, recuperar y eliminar datos)

El almacenamiento web en el navegador proporciona una forma conveniente de guardar datos en el lado del cliente. En JavaScript, puedes utilizar dos tipos de almacenamiento: sessionStorage y localStorage. Aquí te explicamos cada uno de ellos y cómo utilizarlos.

## SessionStorage

### Ventajas

- Los datos se almacenan solo durante la sesión actual del navegador. Se borran cuando se cierra la pestaña o ventana del navegador.
- Capacidad de almacenamiento de aproximadamente 5-10 MB, dependiendo del navegador.

### Desventajas

- Los datos no persisten después de cerrar la pestaña o ventana del navegador.
- Comparte datos solo en una misma ventana o pestaña.

## Cómo utilizar sessionStorage en JavaScript:

### Almacenar datos:

```javascript
sessionStorage.setItem("clave", "valor");
```

### Recuperar datos:

```javascript
const valor = sessionStorage.getItem("clave");
```

### Eliminar datos:

```javascript
sessionStorage.removeItem("clave");
```

## LocalStorage

### Ventajas:

- Los datos se almacenan de forma persistente en el navegador, incluso después de cerrar y volver a abrir el navegador.
- Capacidad de almacenamiento similar a sessionStorage, aproximadamente 5-10 MB, pero varía según el navegador.

### Desventajas:

- No se borra automáticamente, lo que puede llevar a una acumulación no deseada de datos.
- Comparte datos entre todas las pestañas y ventanas abiertas del mismo dominio.

## Cómo utilizar localStorage en JavaScript:

### Almacenar datos:

```javascript
localStorage.setItem("clave", "valor");
```

### Recuperar datos:

```javascript
const valor = localStorage.getItem("clave");
```

### Eliminar datos:

```javascript
localStorage.removeItem("clave");
```

# ¿Qué es JSON?

JSON (JavaScript Object Notation) es un formato de intercambio de datos ligero y fácil de leer. Se utiliza comúnmente para transmitir datos entre un servidor y un cliente, o entre diferentes partes de una aplicación. JSON se deriva de JavaScript, pero es un formato de texto independiente del lenguaje de programación, lo que significa que es compatible con una amplia variedad de lenguajes de programación.

### Las características clave de JSON son las siguientes:

- _Legible por humanos:_ Los datos en formato JSON están formateados de manera legible por humanos, lo que facilita su comprensión visual. Esto hace que sea más fácil depurar y trabajar con datos en JSON.
- _Ligero:_ JSON es un formato de datos ligero, lo que significa que no agrega una sobrecarga significativa en términos de tamaño de archivo o recursos de procesamiento. Esto es especialmente útil en aplicaciones web y móviles donde se deben transmitir datos de manera eficiente.
- _Basado en texto:_ Los datos en formato JSON son representados como cadenas de texto, lo que facilita su manipulación y lectura en cualquier lenguaje de programación que pueda trabajar con texto.
- _Estructura de datos jerárquica:_ JSON admite estructuras de datos jerárquicas, lo que significa que puedes anidar objetos y arreglos dentro de otros objetos y arreglos. Esto permite representar datos complejos de manera organizada y estructurada.
- _Soporte para tipos de datos comunes:_ JSON admite tipos de datos comunes como números, cadenas, booleanos, nulos, objetos y arreglos. Esto lo hace adecuado para representar una amplia variedad de datos.

JSON se utiliza ampliamente en aplicaciones web para intercambiar datos entre el cliente y el servidor, para el almacenamiento de configuraciones y datos en aplicaciones, y como formato de intercambio en servicios web y APIs (Application Programming Interfaces). También se usa en la configuración de aplicaciones y en la representación de datos en bases de datos NoSQL que almacenan documentos JSON.

### Ejemplo:

```javascript
{
  "nombre": "Julio",
  "edad": 21,
  "ciudad": "Mexicali",
  "activo": true,
  "intereses": ["programación", "lectura", "piano"]
}

```

# ¿Qué hacen las funciones JSON.parse() y JSON.stringify() ?

Las funciones `JSON.parse()` y `JSON.stringify()` son dos funciones fundamentales en JavaScript que se utilizan para trabajar con objetos JSON (JavaScript Object Notation).

`JSON.parse(): ` Esta función se utiliza para analizar o deserializar una cadena JSON y convertirla en un objeto JavaScript. Toma una cadena JSON como entrada y devuelve un objeto JavaScript equivalente. Esto es útil cuando se reciben datos JSON desde un servidor y se desea trabajar con ellos como objetos JavaScript en lugar de cadenas JSON.

Ejemplo de uso:

```javascript
const jsonString = '{"nombre": "Juan", "edad": 30}';
const objeto = JSON.parse(jsonString);
console.log(objeto.nombre); // Imprime "Juan"
```

`JSON.stringify():` Esta función se utiliza para serializar un objeto JavaScript en una cadena JSON. Toma un objeto JavaScript como entrada y devuelve una cadena JSON que representa ese objeto. Es útil cuando deseas enviar datos de JavaScript a un servidor o almacenarlos en un formato que sea fácil de transmitir o persistir.

Ejemplo de uso:

```javascript
const objeto = { nombre: "Juan", edad: 30 };
const jsonString = JSON.stringify(objeto);
console.log(jsonString); // Imprime '{"nombre": "Juan", "edad": 30}'
```

## ¿Cómo funciona window.location.href ?

'window.location.href' es una propiedad de JavaScript que se utiliza para obtener o establecer la URL completa de la página actual en el navegador web. Puedes usar esta propiedad para redirigir a los usuarios a otras páginas web o para conocer la dirección URL actual.

### Obtener la URL actual

Para obtener la URL actual de la página en la que se encuentra el script de JavaScript, simplemente puedes acceder a window.location.href como una cadena de texto. Aquí tienes un ejemplo:

```javascript
const urlActual = window.location.href;
console.log(urlActual); // Imprime la URL completa actual
```

## Redireccionar a otra página

También puedes utilizar `window.location.href` para redirigir a los usuarios a otra página web. Para hacerlo, simplemente asigna una nueva URL a `window.location.href`:

```javascript
window.location.href = "https://www.ejemplo.com";
```

## Modificar la URL actual

Si deseas modificar la URL actual sin redireccionar al usuario a una nueva página, puedes asignar una nueva URL a `window.location.href.` Por ejemplo:

```javascript
window.location.href = "https://www.ejemplo.com/nueva-ruta";
```

## Explique el funcionamiento de scriptResultados.js

Obtención de Elementos HTML: El script comienza obteniendo referencias a los elementos HTML relevantes mediante el uso de `document.getElementById():`

```javascript
const tablaResultados = document.getElementById("tablaResultados");
const botonLimpiar = document.getElementById("limpiarTabla");
```

```javascript
const tablaResultados = document.getElementById("tablaResultados");
const botonLimpiar = document.getElementById("limpiarTabla");
```

Recuperación de Datos desde `localStorage:` A continuación, el script utiliza localStorage para recuperar datos previamente almacenados bajo la clave "envios" y los almacena en la variable envios como un arreglo de objetos JSON.

Función `cargarEnvios():` Esta función se encarga de cargar los datos de envíos en la tabla. Primero, elimina todas las filas existentes en la tabla para evitar duplicados:

```javascript
while (tablaResultados.firstChild) {
  tablaResultados.removeChild(tablaResultados.firstChild);
}
```

Luego, itera a través del arreglo envios utilizando un bucle `forEach()` para crear una fila en la tabla para cada registro de envío.

Event Listeners para Eliminar Registros: El script agrega event listeners a los botones "Eliminar" de cada fila de la tabla. Cuando se hace clic en uno de estos botones, se obtiene el índice del registro que se va a eliminar mediante el atributo `data-index` del botón. Luego, muestra un cuadro de confirmación al usuario y, si se confirma la eliminación, elimina el registro correspondiente del arreglo envios utilizando `splice()`, actualiza `localStorage` y vuelve a cargar los envíos en la tabla utilizando la función.

```javascript
const botonesEliminar = document.querySelectorAll(".btn-danger");
botonesEliminar.forEach((boton) => {
  boton.addEventListener("click", function () {
    const index = boton.getAttribute("data-index");
    if (confirm("¿Estás seguro de que quieres eliminar este registro?")) {
      // Eliminar el registro del arreglo de envíos
      envios.splice(index, 1);

      // Actualizar el almacenamiento local con el nuevo arreglo
      localStorage.setItem("envios", JSON.stringify(envios));

      // Volver a cargar los envíos en la tabla después de eliminar
      cargarEnvios();
      location.reload(); // Recargar la página para reflejar los cambios
    }
  });
});
```

`Event Listener` para Limpiar la Tabla: Finalmente, el script agrega un event listener al botón "Limpiar Tabla". Cuando se hace clic en este botón, muestra un cuadro de confirmación al usuario y, si se confirma, borra todo el arreglo envios, actualiza `localStorage` y limpia la tabla utilizando la función `cargarEnvios()`:

```javascript
botonLimpiar.addEventListener("click", function () {
  if (
    confirm(
      "¿Estás seguro de que quieres limpiar todos los registros de la tabla?"
    )
  ) {
    // Limpiar el arreglo de envíos
    envios.length = 0;

    // Actualizar el almacenamiento local con el arreglo vacío
    localStorage.setItem("envios", JSON.stringify(envios));

    // Limpiar la tabla
    cargarEnvios();
    location.reload(); // Recargar la página para reflejar los cambios
  }
});
```
