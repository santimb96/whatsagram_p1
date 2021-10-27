# WHATSAGRAM_P1 (DWEC+DIW)

#### AUTOR: _SANTIAGO MARTINEZ_ (smartinez@cifpfbmoll.eu)

#### CURSO: _2ºDAW_

## INTRODUCCION

Este proyecto es el primero que combina las asignaturas de Entorno Cliente e Interficies Web.

En él, se pretende simular estéticamente una interfaz móvil semejante a la de WhatsApp o Apps similares.

La funcionalidad, en este caso, no requiere de interacción por parte de terceros; se centra en el manejo básico de
strings y el uso de FlexBox y Grid para crear una interfaz adaptable.

## TECNOLOGÍAS USADAS

### 1. JAVASCRIPT

Este proyecto ha sido creado a partir de HTML5, CSS y JS en sus versiones sintáticas más modernas (ES6).

En el caso de *JavaScript*, las funcionalidades que interactúan directamente con el DOM han sido almacenadas en un
objeto, obteniendo así una App la cual se accede por métodos JSON.

Las variables globales son guardadas como si guardáramos en un JSON valores `{clave:valor}`, mientras que las funciones
han sido almacenadas de manera semejante, solo que los accesos a éstas es algo diferente.

En este proyecto se usa la palabra reservada *this*, la cual sirve en este caso para acceder a las claves públicas del
objeto (ya sean variables globales o funciones de ámbito idéntico). Es importante comprender el funcionamiento de *this*
y los *addEventListener()* para poder acceder a las propiedades de las claves. Y para ello, desde ES6 se usa la
función *.bind(this)* justo al cerrar el escuchador de eventos.

Por otra parte, se han utilizado *arrow functions*, *funciones de orden superior*, *bucles de orden superior*, y un
largo etcétera.

### 2. CSS

Por otro lado, en cuanto al *CSS*, se ha utilizado *display:flex y display:grid*, dos maneras de confeccionar páginas de
manera responsive ahorrando trabajo a la hora de readaptar el contenido visible de la App.

También se ha hecho uso de las *media querys* para poder trabajar en funciones exclusivas que existen solo en versiones
de móvil o desktop, aparte de las globales que son funcionales independientemente del tamaño de la página.

### 3. HTML

Por último, por parte de la interfaz HTML, se ha confeccionado a partir de secciones (`<div>`), las cuales organizan el
contenido dependiendo de éste:

    1. Un div padre que organiza a las tres secciones principales: la vista de los mensajes, la caja de texto y los botones.
    2. Cada div tiene una distribución mediante Grid de columnas y filas, asignada mediante porcentajes del total de la interfaz.
    3. Cada contenido es mantenido por CSS.

También se *linkea* hacia la hoja de estilos externa, así como a webs externas para obtener las *Google Web Fonts* y
también para enlazar con el JS externo.

## DIFICULTADES ENCONTRADAS

### BOTÓN "GIF/EMOJI":

Tal y como comenté en clase, mi intención con este botón es hacer un simple reemplazo de teclado mediante las
propiedades *display: flex/none*. Sin embargo, a la hora de obtener el estilo de cada elemento para detectar cuál está
en *none* y cuál en *flex*, me obtenía el elemento pero no el estilo. El código era tal que
así: `elemento.style.display === "none/flex"`.

### MAYÚSCULAS:

A la hora de fijar los estados de las mayúsculas, pueden darse dos soluciones principales: utilizar dos booleanos o bien
un contador que almacene, de manera global, los estados que vayamos fijando para controlar cada casuística. En mi caso,
el mayor conflicto que podía tener radica en un conflicto entre el doble clic y el clic convencional, para comprobar si
se ha presionado mayúscula de un carácter o bien mayúsculas permanentes. Por lo tanto, mi solución pasa por contener un
contador con los diversos estados y tener tres funciones (modularidad), las cuales cada una maneja un tipo de estado:
minúsculas, mayúsculas y mayúsculas permanentes (ver TODOS 4, 8 Y 9 en *script.js*).

### FLEX/GRID:

En relación con la hoja de estilos, la mayor dificultad recae en la falta de práctica previa con esto y la adaptación
rápida frente a flex y grid, ambas metodologías son complejas de gestionar y requieren de mucha práctica.

## A TENER EN CUENTA

La acción *dbclick* en el *addEventListener()* en referencia a las mayúsculas permanentes, **NO FUNCIONA** en la versión
móvil. Los teléfonos móviles no tienen la acción de ratón de doble clic, por lo que es irreal que funcione de esta
manera en un terminal portable. Por lo tanto, si la App se evalúa en Mozilla Firefox, hay una opción en el display del
móvil que te permite cambiar el puntero del "dedo" por el del ratón sin cambiar la view del terminal portable. En Google
Chrome desconozco si esta funcionalidad existe; no la he podido hallar y no sé si existe algún plugin.

La propiedad `Word-wrap: break-Word;` (**_CSS_**), determina que si el contenido de un contenedor supera el ancho
fijado, el texto en este caso realiza un salto de línea en el mensaje que se imprime por pantalla, de manera que así
impedimos que el texto se desborde por el ancho y de paso habilitamos los saltos de línea automáticos, que se agradecen
a la lectura de los mensajes.

Por otra parte, cabe entender en cuenta que sucede (en mi dispositivo), un problema visto en clase con el profesor
relacionado con la vista en terminal móvil: la App no se ajustaba al ancho y largo muy a pesar de que en la vista móvil
se utilizaba las propiedades *vh* y *vm* en los *height* y *width* despectivamente. Este problema solo me sucede al
utilizar la vista móvil en Chrome; en Firefox o Edge, por ejemplo, esto no me sucede, por lo que el problema no recae en
un mal uso o adaptación del CSS de la App.