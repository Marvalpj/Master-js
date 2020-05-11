'use strict'


var pelicula = {
    title: 'batman' , 
    year : '2017',
    pais : 'usa'
}

var peliculas = [
    {title : "la verdad duele " , year : 2016 , pais : "francias"} , 
    pelicula
]

var box_peli = document.querySelector("#peliculas")
console.log(peliculas)

for( var index in peliculas ){

    var p = document.createElement("p")
    p.append( peliculas[index].title + " " + peliculas[index].year)
    box_peli.append(p)

}