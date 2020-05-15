'use strict'


//fetch (ajax) y peticiones a servicios / apis rest
var usuarios = []

// var prueba

var boxUsers = document.querySelector("#users")
var boxUser = document.querySelector("#user")
var boxProf = document.querySelector(".profesor")
    getUsuarios()
    .then( data => data.json() )
    .then(  users => {
        listarUsuarios(users.data)

      
        return getInfo()
    })
    .then(data => {
        console.log(data)
        loadTeacher(data)
        return getUsuario()
    })
    .then( data => data.json())
    .then( user => {
        loadDataUser(user.data)
    })
    .catch( error => {
        console.log(error + "error")
    })

function getUsuarios(){
    return fetch('https://reqres.in/api/users?page=2')
} 

function getUsuario(){
    return fetch('https://reqres.in/api/users/2')
}
  

function getInfo(){
    var profesor = {
        nombre: "victor",
        apellido: "robles",
        url: "https://www.victorroblesweb.es"
    }
    return new Promise( (resolve , reject) => {
        var profesor_string = ''
        setTimeout(function(){
            profesor_string = JSON.stringify(profesor)

            if( typeof profesor_string  != 'string' || profesor_string == ''){
                return reject('error')
            }  

            
        return resolve(profesor_string)
        }, 3000)
    }) 
}

function listarUsuarios( usuarios ){
    usuarios.map( ( user , i ) => {
        let nombre =  document.createElement("h2")
        nombre.innerHTML = i + "." + user.first_name + " " + user.last_name
        document.querySelector("#users .loading").style.display = "none"
        boxUsers.appendChild(nombre)
    })
}

function loadDataUser( usuario){
    let nombre = document.createElement("h2")
    let avatar = document.createElement("img")

    nombre.innerHTML = usuario.first_name + " " + usuario.last_name
    
    avatar.src = usuario.avatar
    avatar.width = '100'
    
    boxUser.appendChild(nombre)
    boxUser.appendChild(avatar)

    document.querySelector("#user .loading").style.display = "none"
}

function loadTeacher( prof ){
    let info = document.createElement("h2")
    info.innerHTML = prof
    boxProf.appendChild(info)

    document.querySelector(".profesor #loading").style.display = "none"

}
