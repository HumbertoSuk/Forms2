## 1. Explique el funcionamiento de la etiqueta input en HTML, indicando los diferentes argumentos que puede tener.

La etiqueta <input> en HTML es uno de los elementos más versátiles y utilizados en la construcción de formularios web. Esta etiqueta se utiliza para crear campos de entrada de datos que permiten a los usuarios ingresar información, como texto, números, fechas, contraseñas y más. El elemento <input> tiene varios atributos que permiten personalizar su comportamiento y apariencia. Aquí hay una descripción de los argumentos más comunes que puede tener la etiqueta <input>:

1. **type**: El atributo `type` especifica el tipo de entrada que se debe mostrar. Los valores más comunes son:
   - `text`: Para entradas de texto de una sola línea.
   - `password`: Para contraseñas, donde los caracteres se ocultan por defecto.
   - `checkbox`: Para casillas de verificación que permiten a los usuarios seleccionar múltiples opciones.
   - `radio`: Para botones de opción, donde los usuarios pueden seleccionar una sola opción de un grupo.
   - `file`: Para cargar archivos desde el dispositivo del usuario.
   - `submit`: Para enviar un formulario cuando se hace clic en él.
   - `button`: Para botones de acción personalizados.
   - `date`, `time`, `email`, `number`, etc.: Para tipos específicos de entrada, como fechas, horas, correos electrónicos o números.

2. **name**: El atributo `name` especifica el nombre del campo de entrada. Cuando se envía el formulario, este nombre se utiliza como identificador para los datos ingresados.

3. **value**: El atributo `value` establece el valor predeterminado del campo de entrada. Puede ser útil para prellenar el campo con datos predeterminados.

4. **placeholder**: El atributo `placeholder` muestra un texto de ejemplo dentro del campo de entrada, proporcionando una pista sobre qué tipo de información se espera.

5. **required**: El atributo `required` indica que el campo de entrada debe completarse antes de que el formulario se pueda enviar. Si se deja en blanco y se envía el formulario, se mostrará un mensaje de error.

6. **readonly**: El atributo `readonly` hace que el campo sea de solo lectura, lo que significa que los usuarios pueden ver su contenido pero no pueden editarlo.

7. **disabled**: El atributo `disabled` deshabilita el campo de entrada, lo que impide que los usuarios interactúen con él y envíen datos a través de él.

8. **maxlength**: El atributo `maxlength` establece la longitud máxima de caracteres permitidos en el campo de entrada de texto.

9. **min** y **max**: Estos atributos son específicos de los tipos numéricos y definen los valores mínimo y máximo permitidos en el campo de entrada.

10. **pattern**: El atributo `pattern` permite definir una expresión regular que debe coincidir con el valor ingresado en el campo. Es útil para validar entradas de texto específicas.

11. **autofocus**: El atributo `autofocus` indica que el campo de entrada debe recibir el enfoque automáticamente cuando se carga la página, lo que permite una entrada más rápida.

12. **autocomplete**: Controla si el navegador debe recordar y completar automáticamente la entrada anterior del usuario para ese campo.




## 2. Explique como puede configurarse la etiqueta button

La etiqueta <button> se utiliza de la siguiente manera en HTML:
`<button type="tipo" name="nombre" value="valor">Texto del botón</button>`
Donde:

`type`: Especifica el tipo de botón. Puede ser "button" (valor predeterminado), "submit" (enviar el formulario) o "reset" (restablecer el formulario a sus valores iniciales).

`name (opcional)`: Define un nombre para el botón, que se usa para identificar el botón cuando se envía un formulario.

`value (opcional)`: Establece el valor que se envía al servidor cuando se hace clic en el botón, útil cuando se trabaja con formularios.

`Texto del botón:` El texto que se muestra en el botón.


La configuración de la función de un botón en HTML se realiza mediante JavaScript. Primero, se identifica el botón en el código HTML usando un atributo id o class. Luego, se agrega un evento de escucha al botón en JavaScript para capturar el clic del usuario. Dentro de la función del evento, puedes definir acciones personalizadas que se ejecutarán cuando se haga clic en el botón, como mostrar una alerta o realizar operaciones más complejas, como enviar formularios o solicitudes al servidor. Recuerde agregar los listeners para que detecte los eventos.

## 3. Explique el método addEventlistener y como se utiliza en este proyecto

El método addEventListener es una función de JavaScript que se utiliza para asignar eventos a elementos HTML y definir las acciones que deben realizarse cuando ocurren esos eventos. En este proyecto específico, se utiliza para manejar el evento de envío del formulario y validar los datos ingresados por el usuario antes de enviarlos 

En primer lugar, se utiliza `document.addEventListener(DOMContentLoaded)` para esperar a que todo el documento HTML se cargue antes de ejecutar el código JavaScript. Esto garantiza que el código se ejecute cuando el DOM esté completamente disponible para su manipulación.
Luego, se selecciona el formulario HTML con `const formulario = document.getElementById("formulario");`. Esto se hace utilizando el atributo id del formulario, que es "formulario" en este caso.

Esto significa que cuando el usuario envía el formulario haciendo clic en el botón "Enviar", se ejecutará la función definida como segundo argumento.

Dentro de la función de evento, `event.preventDefault();` se utiliza para prevenir el comportamiento predeterminado del formulario, que sería el envío de datos.

A partir de este punto, se implementa la lógica de validación del formulario. Cada campo se valida individualmente para asegurarse de que cumple con los criterios deseados.

## 4. Explique la forma en que son validadas cada una de las entradas.

En el proyecto del formulario de validación, cada una de las entradas (campos del formulario) se valida mediante el uso de expresiones regulares y condiciones específicas para asegurarse de que cumplan con los criterios requeridos. A continuación, se explica cómo se valida cada entrada:

1. **ID (5 dígitos exactos):**

   - **Validación:** Se utiliza la expresión regular `/^\d{5}$/` para garantizar que el ID ingresado tenga exactamente 5 dígitos numéricos.

2. **Nombre y Apellidos (no pueden estar vacíos):**

   - **Validación:** Se verifica que tanto el nombre como los apellidos no estén vacíos. Esto se hace utilizando el método `trim()` para eliminar los espacios en blanco al principio y al final de los valores ingresados.

3. **Teléfono (###)###-####:**

   - **Validación:** Se utiliza la expresión regular `/^\(\d{3}\)\d{3}-\d{4}$/` para asegurarse de que el teléfono tenga el formato correcto, que consta de tres dígitos entre paréntesis, seguidos de tres dígitos, un guion y cuatro dígitos adicionales.

4. **Correo Electrónico:**

   - **Validación:** Se utiliza la expresión regular `/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/` para verificar que el correo electrónico tenga un formato válido. Esta expresión regular comprueba que el correo electrónico incluya un nombre de usuario seguido de un símbolo "@" y un dominio válido.

5. **Edad (número positivo):**

   - **Validación:** Se convierte el valor de la edad a un número entero utilizando `parseInt()`, y luego se verifica que sea un número positivo (mayor que cero).

6. **Fecha de Nacimiento (AAAA-MM-DD):**

   - **Validación:** Se utiliza la expresión regular `/^\d{4}-\d{2}-\d{2}$/` para garantizar que la fecha de nacimiento tenga el formato correcto de año (AAAA), mes (MM) y día (DD).

