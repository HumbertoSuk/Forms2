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
miArreglo.forEach(elemento => {
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
sessionStorage.setItem('clave', 'valor');
```

### Recuperar datos:
```javascript
const valor = sessionStorage.getItem('clave');
```

### Eliminar datos:
```javascript
sessionStorage.removeItem('clave');
```

## LocalStorage
### Ventajas:
- Los datos se almacenan de forma persistente en el navegador, incluso después de cerrar y volver a abrir el navegador.
- Capacidad de almacenamiento similar a sessionStorage, aproximadamente 5-10 MB, pero varía según el navegador.
### Desventajas:
- No se borra automáticamente, lo que puede llevar a una acumulación no deseada de datos.
- Comparte datos entre todas las pestañas y ventanas abiertas del mismo dominio.

## Cómo utilizar localStorage  en JavaScript:
### Almacenar datos:
```javascript
localStorage.setItem('clave', 'valor');
```

### Recuperar datos:
```javascript
const valor = localStorage.getItem('clave');
```

### Eliminar datos:
```javascript
localStorage.removeItem('clave');
```

# ¿Qué es JSON?

JSON (JavaScript Object Notation) es un formato de intercambio de datos ligero y fácil de leer. Se utiliza comúnmente para transmitir datos entre un servidor y un cliente, o entre diferentes partes de una aplicación. JSON se deriva de JavaScript, pero es un formato de texto independiente del lenguaje de programación, lo que significa que es compatible con una amplia variedad de lenguajes de programación.
### Las características clave de JSON son las siguientes:

- *Legible por humanos:* Los datos en formato JSON están formateados de manera legible por humanos, lo que facilita su comprensión visual. Esto hace que sea más fácil depurar y trabajar con datos en JSON.
- *Ligero:* JSON es un formato de datos ligero, lo que significa que no agrega una sobrecarga significativa en términos de tamaño de archivo o recursos de procesamiento. Esto es especialmente útil en aplicaciones web y móviles donde se deben transmitir datos de manera eficiente.
- *Basado en texto:* Los datos en formato JSON son representados como cadenas de texto, lo que facilita su manipulación y lectura en cualquier lenguaje de programación que pueda trabajar con texto.
- *Estructura de datos jerárquica:* JSON admite estructuras de datos jerárquicas, lo que significa que puedes anidar objetos y arreglos dentro de otros objetos y arreglos. Esto permite representar datos complejos de manera organizada y estructurada.
- *Soporte para tipos de datos comunes:* JSON admite tipos de datos comunes como números, cadenas, booleanos, nulos, objetos y arreglos. Esto lo hace adecuado para representar una amplia variedad de datos.

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

# ¿Cómo funciona window.location.href ?

## Explique el funcionamiento de scriptResultados.js
