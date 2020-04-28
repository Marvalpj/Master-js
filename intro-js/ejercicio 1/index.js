'use strict'

/*
 programa que pida dos numeros y que nos diga cual es el mayor el menor y si son iguales
*/

var numero1 = parseInt( prompt('introduce el primer numero' , 0 ) )
var numero2 = parseInt( prompt('introduce el segundo numero', 0 ) )


while( isNaN(numero1) || isNaN(numero2) ){
    
    numero1 = parseInt( prompt('introduce el primer numero' , 0 ) )
    numero2 = parseInt( prompt('introduce el segundo numero', 0 ) )

}


if( numero1 == numero2 ){
    alert("los numeros son iguales")
}else if( numero1 > numero2 ){
    alert("mayor:" + numero1 + " " + "menor:"+numero2)
}else if( numero2 > numero1){
    alert("mayor:" + numero2 + " " + "menor:"+numero1)
}




// console.log(numero1 + typeof(numero1) )
// console.log(numero2 + typeof(numero1) )

