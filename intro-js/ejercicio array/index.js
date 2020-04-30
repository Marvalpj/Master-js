'use strict'
/* 
pide 6 numeros por pantalla y agregalos a un array
debe mostrar todos los elementos del array en la pag y la consola
sacar el array ordenado y mostrarlo
invertir array y mostrar
mostrar cuantos elementos tiene el array
buscar valor introducido por el user y que diga si esta en el array mas la posicion
*/

function mostrarArray(elementos , texto = ""){
    document.write("<h1>Contenidos del array"+texto+"</h1>")
    document.write("<ul>")
    elementos.forEach( 
        (numero , index) => {
            document.write("<strong>"+numero+"</strong></br>")
        }   
    )
    document.write("</ul>")
}

 var numeros = []
 for( let i = 0; i < 6; i++ ){
    // numeros[i] = parseInt( prompt('ingrese un numero.',0) )
    numeros.push(parseInt(prompt('ingrese un numero.',0)))
 }
// contenidos del array mostrado en la pag
mostrarArray(numeros)
//  mostrar por consola
 console.log(numeros)


 numeros.sort()
 mostrarArray(numeros , "ordenado")
 console.log(numeros)