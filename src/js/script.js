const APP = {
    input: document.getElementById("input"),

    /**
     * TODO 1: HACER INICIO DE MANERA QUE OBTENGA LOS BOTONES Y LOS VALORES ✔
     */
    inicio: function () {

        const botones = document.querySelectorAll(".button"); //obtengo los botones

        botones.forEach(boton => { //los recorro para conocer los valores de cada uno
            boton.addEventListener("click", function () {

                if (!boton.getAttribute("name")) { //valora si el boton es una letra o no mediante el atributo "name"
                    this.renderLetras(boton.textContent); //si es una letra, la renderiza en el input
                } else {
                    this.valorarBoton(boton.getAttribute("name")); // si no lo es, comprueba que funcion ha de realizar el boton
                }
            }.bind(this))
        })

    },
    /**
     * TODO 2: REALIZAR CHEQUEO DEL VALOR DE LOS BOTONES E IR A SUS FUNCIONES
     * @param funcion recibe el valor del boton para valorar qué función se debe ejecutar
     */
    valorarBoton: function (funcion) {
        //this se utiliza para acceder a recursos que estén en un mismo objeto {clave:valor} (en este caso)
        this[funcion](); //lo que va entre corchetes es el nombre del atributo que es === al de la funcion y los parentesis indican que es una funcion con ese nombre
        //este metodo es una manera de buscar funciones que se llamen igual que un string que le pasemos y las ejecute
    },
    /**
     * TODO 3: RENDERIZAR LETRAS EN LOS INPUTS ✔
     * @param letra recibe el valor de la letra presionada
     */
    renderLetras: function (letra) {
        this.input.value += letra; // renderiza cada letra pulsada
    },
    /**
     * TODO 4: MAYUSCULAS A UNO O DOS TOQUES
     */
    mayuscula: function(){},
    /**
     * TODO 5: BORRAR CARACTERES ✔
     */
    borrar: function(){
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
    espacio: function(){
        this.input.value += " ";
    },

    borradoTotal: function () {
        this.input.value = ""; //funcion que se encarga de limpiar el valor dle input

    },
    /**
     * TODO 7: CREAR TABULACIONES ✔
     */
    tabular: function(){
        this.input.value += "      ";
    }

}
APP.inicio(); //llamada a la funcion inicial para que se ejecute la app y se puedan escuchar los eventos "click"