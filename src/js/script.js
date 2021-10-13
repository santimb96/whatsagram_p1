const APP = {
    input: document.getElementById("input"),

    /**
     * TODO 1: HACER INICIO DE MANERA QUE OBTENGA LOS BOTONES Y LOS VALORES
     */
    inicio: function () {
        //obtengo los botones

        const botones = document.querySelectorAll(".button");

        //los recorro para conocer los valores de cada uno
        botones.forEach(boton => {
            boton.addEventListener("click", function(){
                this.input.value += boton.textContent;
            }.bind(this))
        })

    }
}
APP.inicio();