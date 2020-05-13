'use strict'


//fetch (ajax) y peticiones a servicios / apis rest
var usuarios = []

// var prueba

var box = document.querySelector("#users")

fetch('https://reqres.in/api/users?page=2')
    .then( data => data.json() )
    .then(  users => {
        usuarios  = users.data
        console.log( usuarios )

        usuarios.map( ( user , i ) => {
            let nombre =  document.createElement("h2")
            nombre.innerHTML = i + "." + user.first_name + " " + user.last_name
            box.appendChild(nombre)
        })
    })

    //asi tambien funciona
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then( function( data ) {
//         return data.json()
//     } )
//     .then(  function( data ){
//         prueba = data
//         console.log( prueba )
//     })