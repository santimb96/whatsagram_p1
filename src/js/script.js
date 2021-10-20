const APP = {
    input: document.getElementById("input"), //obtenemos el input para operar con él
    teclado: document.querySelectorAll(".button"), //obtenemos el teclado para evitar repetir codigo
    estadoTecla: false, //estado de las teclas por defecto en minuscula (false)
    mayusPermanente: false, //mayusculas permanentes en false
    contadorMayus: 0,

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
     * TODO 3: RENDERIZAR LETRAS EN LOS INPUTS ✔
     * @param letra recibe el valor de la letra presionada
     */
    renderLetras: function (letra) {
        /*if (this.input.value === "") { //si el input esta vacio, primera lietra en mayusculas
            this.input.value += letra.toUpperCase();
        } else if (this.estadoTecla) { //si las teclas estan en mayusculas, render en upperCase
            this.input.value += letra.toUpperCase();
            this.estadoTecla = false;
            if (this.mayusPermanente) { //si es mayus permanente, evitamos que se pongan las teclas en minusculas
                this.estadoTecla = true;
            } else {
                this.estadoTecla = false; // si no, se pondrán en minusculas con el estado en false
            }
        } else {
            this.input.value += letra; //insertamos valor normal y corriente en el input
        }*/
        if(this.input.value === ""){
            this.input.value += letra.toUpperCase();
        } else if (this.contadorMayus === 1){
            this.input.value += letra;
            this.minus();
        } else {
            this.input.value += letra;
        }
    },

    /**
     * TODO 4: MAYUSCULAS A UN TOQUE ✔
     */
    mayuscula: function (letra) { //comprueba si el estado de la tecla es verdad y las pasa a minusculas y el permanente a false
     /*   if (this.estadoTecla) {
            this.minus();
            this.mayusPermanente = false;
            this.estadoTecla = false;
        } else {
            this.teclado.forEach(boton => {
                boton.textContent = boton.textContent.toUpperCase();
            })
            this.estadoTecla = true;
        }*/
        if(this.contadorMayus === 0){
            this.contadorMayus = 1;
            this.teclado.forEach(boton => {
                boton.textContent = boton.textContent.toUpperCase();
            });
        } else if (this.contadorMayus >= 1){
            this.contadorMayus = 0;
            this.minus();
        }
    },
    /**
     * TODO 8: MAYUSUCULAS PERMANENTES ✔
     */
    permaMayus: function () { //recorro las teclas y establezco que sean permanentemente mayusuclas y estado true
        /*this.teclado.forEach(boton => {
            boton.textContent = boton.textContent.toUpperCase();
        });
        this.estadoTecla = true;*/
        this.contadorMayus = 2;

        this.teclado.forEach(boton => {
            boton.textContent = boton.textContent.toUpperCase();
        });

    },
    /**
     * TODO 9: MINUSUCULAS ✔
     */
    minus: function () { //recorro los botones y los paso a minusculas y establezco que el estado de las teclas es false(minus)
        /*this.teclado.forEach(boton => {
            boton.textContent = boton.textContent.toLowerCase();
        });

        this.estadoTecla = false;*/
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
        this.input.value = ""; //funcion que se encarga de limpiar el valor dle input

    },
    /**
     * TODO 7: BORRAR PRIMER CARACTER ✔
     */
    borrarPrimero: function () {
        let contenidoInput = this.input.value; //obtenemos el valor del input

        this.input.value = contenidoInput.slice(1); //cada vez que pase por aqui, borrara el primer elemento
    },
    /**
     * TODO 10: ENVIAR MENSAJE ✔
     */
    enviarTexto: function(){
        if(this.input.value === ""){
            //no se envia nada porque esta vacio
        }else {
            let fecha = new Date() //objeto date para manejar la fecha de envío del mensaje
            let vistaMensajes = document.getElementsByClassName("vistaMensajes")[0]; //obtengo el div para pintar mensajes
            let elemento = document.createElement("div"); //creo un elemento div
            elemento.setAttribute("class", "mensaje"); //creamos una clase para el div para poder darle estilo
            let texto = document.createTextNode(`${this.input.value} ${("0"+fecha.getHours()).slice(-2)+':'+("0"+fecha.getMinutes()).slice(-2)}`); //creamos nodo de texto mediante el contenido del input
            elemento.appendChild(texto); //añadimos al elemento el texto

            vistaMensajes.appendChild(elemento); //añadimos al contenedor padre los mensajes que se iran pintando
            this.input.value = "";
        }
    },
    /**
     * TODO 11: BORRAR ULTIMA PALABRA ✔
     */
    ultimaPalabra: function(){
        let input = (this.input.value).trim();

        let ultimaPalabra = input.lastIndexOf(" ");
        this.input.value = input.substring(0, ultimaPalabra);
    },
    /**
     * TODO 12: INTRO ✔
     */
    intro: function(){
        this.input.value += "\n";
    }

}
APP.inicio(); //llamada a la funcion inicial para que se ejecute la app y se puedan escuchar los eventos "click"