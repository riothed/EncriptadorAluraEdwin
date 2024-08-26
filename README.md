**Mi Encriptador de Texto**

Este encritador reemplaza lo siguien en un texto:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

+ **Restricciones:**

	+ Funcionar solo con letras minúsculas
	+ No acepta letras con acentos ni caracteres especiales
	+ Tiene función de desencriptar: devuelve una palabra encriptada para su versión original.

**Descripción del archivo HTML**

**Inicio**

	+ <!DOCTYPE html>: Esto le dice a la computadora que estamos usando el lenguaje HTML para crear una página web.
	+ <html lang="es" data-theme="dark">: Aquí empieza la página web. lang="es" significa que el idioma de la página es español, y data-theme="dark" indica que la página puede tener un tema oscuro.

**Head**

	+ <meta charset="UTF-8">: Esto asegura que la página pueda mostrar letras y símbolos de todos los idiomas correctamente.
	+ <meta name="viewport"...>: Hace que la página se vea bien en teléfonos y computadoras.
	+ <link rel="icon"...>: Aquí se dice qué imagen se muestra en la pestaña del navegador, como un logo.
	+ <link rel="stylesheet"...>: Aquí se conecta el archivo que contiene los estilos (colores, tamaños, etc.) para que la página se vea bonita.
	+ <title>: Este es el nombre de la página que aparece en la pestaña del navegador.

**Otros**

	+ <<body>: Aquí empieza el cuerpo de la página, donde colocamos todo lo que queremos mostrar en la pantalla.
	+ <<header>: Es la parte de arriba de la página. Aquí hay un enlace (algo en lo que puedes hacer clic) con dos imágenes (un logo y una mascota). Como no hay un destino en el enlace, hacer clic no te llevará a ninguna parte.
	+ <<main>: Es el contenido principal de la página. Aquí es donde sucede la magia de la encriptación.
	+ <<section>: Las secciones dividen el contenido en partes diferentes. Aquí hay dos secciones: una para encriptar y otra para mostrar el texto encriptado o desencriptado.
	+ <<textarea> y <button>: El área donde escribes el texto y los botones para encriptar, desencriptar o copiar el texto.
	+ <<footer>: Es la parte de abajo de la página. Aquí están los derechos de autor y enlaces a perfiles de LinkedIn y GitHub.
	+ <<script>: Aquí se conecta un archivo JavaScript que añade interactividad a la página, como la encriptación y desencriptación de texto.

**Descripción del archivo Java Script**

JavaScript es un lenguaje que le dice a la página web cómo actuar cuando haces clic en botones o escribes algo. Es como si le dieras instrucciones a un robot para que haga cosas por ti.

**Validaciones y Encriptación del Texto:**

	+ Verificar si el campo está vacío: Si no escribiste nada, te avisa.
	+ Si usaste letras con acentos o caracteres extraños, te avisa que no se pueden usar.
	+ Si usaste mayúsculas, te pide que uses solo minúsculas.
	+ El código cambia las vocales del texto por palabras secretas para encriptarlo.

**Descripción del archivo CSS**
CSS es como el disfraz de una página web. Mientras que HTML crea la estructura básica (como un esqueleto), CSS es lo que hace que la página se vea bonita, con colores, tamaños y estilos. El CSS de este proyecto codifica lo siguiente:

	+ @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap'); este código trae una fuente llamada "Inter" desde internet para que la página pueda usarla. Es como elegir un tipo de letra para escribir.
	+ Colores y Variables
	+ Estilos Básicos para Todo
	+ Colores al Seleccionar Texto
	+ Estilos para el Cuerpo y las Imágenes
	+ Diseño de la Cabecera y Logos
	+ Estilos del Contenido Principal
	+ Estilos de los Botones
	+ Respuestas en la Tarjeta
	+ Adaptación para Teléfonos y Pantallas Pequeñas
