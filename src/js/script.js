const APP = {
    input: document.getElementById("input"), //obtenemos el input para operar con él
    teclado: document.querySelectorAll(".button"), //obtenemos el teclado para evitar repetir codigo
    estadoTecla: false, //estado de las teclas por defecto en minuscula (false)
    contadorMayus: 0,
    tecladoEmoji: false,
    /**
     * TODO 13: ESTABLECER FECHA INICIAL TOP MENSAJES Y FIJO ✔
     */
    fechaInicial: function () {
        /**
         *
         * @type {string[]} fijamos el nombre de los meses para obtener posteriormente el nombre completo del mes
         */
        const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];


        let fechaActual = new Date(); //creamos objeto de fecha

        let vistaMensajes = document.querySelector(".vistaMensajes"); //obtememos la vista de los mensajes

        let fecha = `${fechaActual.getDay()} de ${meses[fechaActual.getMonth()]} de ${fechaActual.getFullYear()}`; //obtenemos la fecha con un formato X

        /**
         *
         * @type {`<div class="fechaActual">${string}</div>`} creamos mediante template string una plantilla la cual tendra ujna clase e imprimira la fecha
         */
        vistaMensajes.innerHTML += `<div class="fechaActual">${fecha}</div>`;
    },
    /**
     * TODO 1: HACER INICIO DE MANERA QUE OBTENGA LOS BOTONES Y LOS VALORES ✔
     */
    inicio: function () {

        //const botones = document.querySelectorAll(".button"); //obtengo los botones
        const boton = document.getElementById("button"); //obtengo boton para dbclick

        boton.addEventListener("dblclick", function () { //este listener se encargara de escuchar el evento doble click si se produce
            this.permaMayus(); //ejecuta la funcion de las mayusculas permanentes
        }.bind(this))

        this.teclado.forEach(boton => { //los recorro para conocer los valores de cada uno
            boton.addEventListener("click", function () {
                this.input.scrollTop = this.input.scrollHeight;
                if (!boton.getAttribute("name")) { //valora si el boton es una letra o no mediante el atributo "name"
                    this.renderLetras(boton.textContent); //si es una letra, la renderiza en el input
                } else {
                    this.valorarBoton(boton.getAttribute("name")); // si no lo es, comprueba que funcion ha de realizar el boton
                }
            }.bind(this))
        })
    },
    /**
     * TODO 2: REALIZAR CHEQUEO DEL VALOR DE LOS BOTONES E IR A SUS FUNCIONES ✔
     * @param funcion recibe el valor del boton para valorar qué función se debe ejecutar
     */
    valorarBoton: function (funcion) {
        //this se utiliza para acceder a recursos que estén en un mismo objeto {clave:valor} (en este caso)
        this[funcion](); //lo que va entre corchetes es el nombre del atributo que es === al de la funcion y los parentesis indican que es una funcion con ese nombre
        //este metodo es una manera de buscar funciones que se llamen igual que un string que le pasemos y las ejecute
    },
    /**
     * TODO 14: BOTON DE EMOJIS/GIF ✔
     * cuando se pulsa el boton de gif, dependiendo de que teclado este en pantalla, mostrara los emojis o el teclado convencional
     */
    gif: function () {
        /**
         *
         * @type {HTMLElement} obtenemos los div con los emojis y con los botones
         */
        const emojis = document.getElementById("emojis");
        const botones = document.getElementById("botones");
        const gif = document.getElementById("gif");

        /**
         * mediante un booleano, comprobamos que teclado esta operativo para intercambiarlo por el otro
         * se hace mediante bool porque por alguna razon detallada en el README.md, no se puede obtener el display de los elementos
         */

        if (this.tecladoEmoji === false) {
            botones.style.display = "none";
            emojis.style.display = "flex";
            gif.textContent = "⌨";
            this.tecladoEmoji = true;
        } else {
            emojis.style.display = "none";
            botones.style.display = "flex";
            gif.textContent = "😀";
            this.tecladoEmoji = false;
        }
    },
    /**
     * TODO 3: RENDERIZAR LETRAS EN LOS INPUTS ✔
     * @param letra recibe el valor de la letra presionada
     */
    renderLetras: function (letra) {
        if (this.input.value === "") { // si el input está vacio, la primera letra será mayuscula
            this.input.value += letra.toUpperCase();
        } else if (this.contadorMayus === 1) { // si el teclado esta en mayusculas, renderiza la letra y pasa el teclado a minus
            this.input.value += letra;
            this.minus();
        } else {
            this.input.value += letra; // si por defecto esta en minuscula, renderiza la letra y finaliza esta ejecucion
        }
    },
    /**
     * TODO 4: MAYUSCULAS A UN TOQUE; MAYUS/MINUS DEPENDIENDO DEL ESTADO DEL CONTADOR ✔
     */
    mayuscula: function () { //comprueba si el estado de la tecla es 0 o 1
        if (this.contadorMayus === 0) { // si el estado es 0 (minus), establezco que sea 1 y paso las teclas a mayusculas
            this.contadorMayus = 1;
            this.teclado.forEach(boton => {
                boton.textContent = boton.textContent.toUpperCase();
            });
        } else if (this.contadorMayus >= 1) { //si el estado es 1 o 2 (mayus o mayusculas permanentes), establezco que se ponga en 0 y minus
            this.contadorMayus = 0;
            this.minus();
        }
    },
    /**
     * TODO 8: MAYUSUCULAS PERMANENTES ✔
     */
    permaMayus: function () { //recorro las teclas y establezco que sean permanentemente mayusculas y estado 2(permanente)
        this.contadorMayus = 2;
        this.teclado.forEach(boton => {
            boton.textContent = boton.textContent.toUpperCase();
        });
    },
    /**
     * TODO 9: MINUSUCULAS ✔
     */
    minus: function () { //recorro los botones y los paso a minusculas y establezco que el contador de las mayusculas sea 0(minus)
        this.teclado.forEach(boton => {
            boton.textContent = boton.textContent.toLowerCase();
        });
        this.contadorMayus = 0;
    },
    /**
     * TODO 5: BORRAR CARACTERES ✔
     */
    borrar: function () {
        let contenidoInput = this.input.value; //obtengo el valor del input
        /**
         * paso al input el recorte desde el inicio del string hasta la última posicion,
         * simulando que se recorta por caracteres el string en el input al pulsar el boton
         */
        this.input.value = contenidoInput.slice(0, contenidoInput.length - 1);
    },
    /**
     * TODO 6: CREAR ESPACIOS ✔
     */
    espacio: function () {
        this.input.value += " ";
    },

    borradoTotal: function () {
        this.input.value = ""; //funcion que se encarga de limpiar el valor del input

    },
    /**
     * TODO 7: BORRAR PRIMER CARACTER ✔
     */
    borrarPrimero: function () {
        let contenidoInput = this.input.value; //obtenemos el valor del input en local

        this.input.value = contenidoInput.slice(1); //cada vez que pase por aqui, borrara el primer elemento
    },
    /**
     * TODO 10: ENVIAR MENSAJE ✔
     */
    enviarTexto: function () {
        if (this.input.value === "") {
            //no se envia nada porque esta vacio
        } else {
            let fecha = new Date() //objeto date para manejar la fecha de envío del mensaje

            let vistaMensajes = document.getElementsByClassName("vistaMensajes")[0]; //obtengo el div para pintar mensajes
            /**
             * este while sirve para sustituir del input todos los \n por <br> para que se
             * pinten los mensajes con los intros
             */
            while (this.input.value.includes("\n")) {
                this.input.value = this.input.value.replace("\n", "<br>");
            }


            let hora = ("0" + fecha.getHours()).slice(-2) + ':' + ("0" + fecha.getMinutes()).slice(-2);

            vistaMensajes.innerHTML += `<div class="mensaje">${this.input.value}<p class="hora">${hora}</p></div>`;

            this.input.value = "";

            vistaMensajes.scrollTop = vistaMensajes.scrollHeight;
        }
    },
    /**
     * TODO 11: BORRAR ULTIMA PALABRA ✔
     */
    ultimaPalabra: function () {
        let input = (this.input.value).trim();

        let ultimaPalabra = input.lastIndexOf(" ");
        this.input.value = input.substring(0, ultimaPalabra);
    },
    /**
     * TODO 12: INTRO ✔
     */
    intro: function () {
        this.input.value += "\n";
    }

}
APP.fechaInicial(); //cargamos esta funcion al inicio de la app para que emule a WhatsApp a la hora de cargar la fecha del mensaje inicial
APP.inicio(); //llamada a la funcion inicial para que se ejecute la app y se puedan escuchar los eventos "click"