'use strict'

window.addEventListener('load',() => {
    
    var btn = document.querySelector(".btn")
    btn.addEventListener("click", cambiarColor)

    function cambiarColor(){
        var bg = btn.style.background
        if( bg == "green" ){
            btn.style.background = "red"
        }else{
            btn.style.background = "green"
        }
    }

    var input = document.querySelector("#campoNombre")
        input.addEventListener("focus", function(){
        console.log("estas sobre el input")
    })
    var input = document.querySelector("#campoNombre")
        input.addEventListener("blur", function(){
        console.log("estas fuera del input")
    })

    function intervalo(){

        var tiempo = setInterval(function(){
            console.log("ejecutando intervalo")
            var encabezado = document.querySelector(".timers")
            if( encabezado.style.fontSize == "50px" ){
                encabezado.style.fontSize = "30px"
            }else{
                encabezado.style.fontSize = "50px"
            }

        },1000)

        return tiempo
    }

    var tiempo = intervalo()

    var start = document.querySelector(".start")
    var stop = document.querySelector(".stop")

    start.addEventListener("click",function(){
       tiempo = intervalo()
    })

    stop.addEventListener("click",function(){
        alert("intervalo detenido")
        clearInterval(tiempo)
    })





})

