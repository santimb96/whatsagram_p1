const APP = {
    input: document.getElementById("input"),

    /**
     * TODO 1: HACER INICIO DE MANERA QUE OBTENGA LOS BOTONES Y LOS VALORES ✔
     */
    inicio: function () {
        //obtengo los botones

        const botones = document.querySelectorAll(".button");

        //los recorro para conocer los valores de cada uno
        botones.forEach(boton => {
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
        try{ //bloque try/catch para evitar que la app reviente en caso de error (control de errores)
            switch (funcion) {
                case "Up":
                    this.mayuscula();
                    break;
                case "borrar":
                    this.borrarCaracter();
                    break;
                case "espacio":
                    this.crearEspacio();
                    break;
                case "C":
                    this.limpiar();
                    break;
                case "CE":
                    break;
                case "tabular":
                    this.crearTabulacion();
                    break;
                default:
                    break;
            }
        } catch (e) {
            console.error(e);
        }

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
    borrarCaracter: function(){
        let contenidoInput = this.input.value; //obtengo el valor del input
        /**
         * paso al input el recorte desde el inicio del string hasta la última posicion,
         * simulando que se recorta por caracteres el string en el input al pulsar el boton
         */
        this.input.value = contenidoInput.slice(0, contenidoInput.length - 1);
    },
    /**
     * TODO 6: CREAR ESPACIOS
     */
    crearEspacio: function(){
        this.input.value += " ";
    },

    limpiar: function () {
        this.input.value = ""; //funcion que se encarga de limpiar el valor dle input

    },

    crearTabulacion: function(){
        this.input.value += "      ";
    }

}
APP.inicio(); //llamada a la funcion inicial para que se ejecute la app y se puedan escuchar los eventos "click"