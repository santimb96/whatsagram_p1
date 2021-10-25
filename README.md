# WHATSAGRAM IN PROCESS!

#### AUTOR: SANTI MARTINEZ
#### CURSO: 2ºDAW

## INTRODUCCION

Este proyecto es el primero que combina las asignaturas de Entorno Cliente e Interficies Web.

En él, se pretende simular estéticamente una interfaz móvil semejante a la de WhatsApp o Apps similares.

La funcionalidad, en este caso, no requiere de interacción por parte de terceros; se centra en el manejo básico de strings y el uso de FlexBox y Grid para crear una interfaz adaptable.

## TECNOLOGÍAS USADAS

### 3. JAVASCRIPT 

Este proyecto ha sido creado a partir de HTML5, CSS y JS en sus versiones sintáticas más modernas (ES6).

En el caso de *JavaScript*, las funcionalidades que interactúan directamente con el DOM han sido almacenadas en un objeto, obteniendo así una App la cual se accede por métodos JSON.

Las variables globales son guardadas como si guardáramos en un JSON valores `{clave:valor}`, mientras que las funciones han sido almacenadas de manera semejante, solo que los accesos a éstas es algo diferente.

En este proyecto se usa la palabra reservada *this*, la cual sirve en este caso para acceder a las claves públicas del objeto (ya sean variables globales o funciones de ámbito idéntico). Es importante comprender el funcionamiento de *this* y los *addEventListener()* para poder acceder a las propiedades de las claves. Y para ello, desde ES6 se usa la función *.bind(this)* justo al cerrar el escuchador de eventos.

Por otra parte, se han utilizado *arrow functions*, *funciones de orden superior*, *bucles de orden superior*, y un largo etcétera.
### 2. CSS
Por otro lado, en cuanto al *CSS*, se ha utilizado *display:flex y display:grid*, dos maneras de confeccionar páginas de manera responsive ahorrando trabajo a la hora de readaptar el contenido visible de la App.

También se ha hecho uso de las *media querys* para poder trabajar en funciones exclusivas que existen solo en versiones de móvil o desktop, aparte de las globales que son funcionales independientemente del tamaño de la página.

### 3. HTML

Por último, por parte de la interfaz HTML, se ha confeccionado a partir de secciones (`<div>`), las cuales organizan el contenido dependiendo de éste:

    1. Un div padre que organiza a las tres secciones principales: la vista de los mensajes, la caja de texto y los botones.
    2. Cada div tiene una distribución mediante Grid de columnas y filas, asignada mediante porcentajes del total de la interfaz.
    3. Cada contenido es mantenido por CSS.

También se *linkea* hacia la hoja de estilos externa, así como a webs externas para obtener las *Google Web Fonts* y también para enlazar con el JS externo.

## DIFICULTADES ENCONTRADAS

