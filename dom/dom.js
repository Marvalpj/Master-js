'use strict'

// var caja = document.getElementById("caja")


// var todosLosDiv = document.getElementsByTagName("div")

//seleccionar y agregar elementos al dom

// console.log(todosLosDiv)

// var valor
// for( valor in todosLosDiv ){
//     if(typeof todosLosDiv[valor].textContent == "string"){
//         var parrafo = document.createElement("p")
//         var texto = document.createTextNode(todosLosDiv[valor].textContent)
//         parrafo.append(texto)
//         document.querySelector("#seccion").append(parrafo)
//     }
// }

var rojo = document.getElementsByClassName('rojo')
var amarillo = document.getElementsByClassName('amarillo')
 
for(var div in rojo){
    if( rojo[div].className == "rojo" ){
        rojo[div].style.background = "red"
    }
}
for(var div in amarillo){
    if( amarillo[div].className == "amarillo" ){
        amarillo[div].style.background = "yellow"
    }
}
