'use strict'



// parametros rest y spread

function listadoFrutas( fruta1 , fruta2 , ...frutas ){
    console.log("fruta 1 :"+fruta1)
    console.log("fruta 2 :"+fruta2)
    console.log(frutas)
}

listadoFrutas("hola" , "loca")
listadoFrutas("mango" , "pomalaca" , "naranja" )
listadoFrutas("mango" , "pomalaca" , "naranja" , "mandarina" , ",mas")