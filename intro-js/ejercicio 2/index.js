'use strict'

var suma = 0
var contador = 0

do{

    var numero = parseInt( prompt('introduce numeros hasta que ingreses uno negativo') )

    if( isNaN(numero) ){
        numero = 0
    }else if(numero >= 0){
        
        suma += numero
        contador++

    }
    console.log(suma)
    console.log("promedio:" + (suma / contador) )
    

}while( numero >= 0 )