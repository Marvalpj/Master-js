'use strict'
/* 
programa para mostrar todos los numeros entre dos dados por el usuario

*/

var numero1 = parseInt(prompt('introduce el primer numero',0))
var numero2 = parseInt(prompt('introduce el segundo numero',0))

while( isNaN(numero1) || isNaN(numero2) ){
    numero1 = parseInt(prompt('introduce el primer numero',0))
    numero2 = parseInt(prompt('introduce el segundo numero',0))    
}

document.write( "<h1>De" + numero1 + " a " + numero2 + "estan estos numeros:</h1>" )

for( let i = numero1; i <= numero2; i++ ){
    document.write(i+"<br>")
}