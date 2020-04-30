'use strict'

function saludar( nombre ){
    alert('hola '+ nombre)
}
function saludarApellido( apellido ){
    alert('hola '+ apellido)
}



function procesarEntradaUsuario( prueba ){

    var nombre = prompt('Por favor ingresa tu nombre.')

    prueba(nombre)

}


procesarEntradaUsuario( saludar )
procesarEntradaUsuario( saludarApellido )