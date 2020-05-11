'use strict'

//comprobar compatibilidad de localstorage
if( typeof( Storage ) !== 'undefined' ){
    console.log("disponible")
}

//guardar data 

localStorage.setItem("tittle" , "pedro practica mas seguido")

//recuperar elemento

console.log( localStorage.getItem("tittle") )
document.querySelector("#data").innerHTML = localStorage.getItem("tittle") 

//guardar obj 

var user =  {
    name : "pedro",
    email: "email",
    password : 123
}
//asi no se debe hacer, antes de guardar un json se debe convertir en STRING
//el localstora no permite guardar un obj de js en formato nativo(puro)
localStorage.setItem("userPruebaError" , user)

localStorage.setItem("user" , JSON.stringify(user) )

//recuperar objeto
var userjs = JSON.parse(localStorage.getItem("user"))
console.log(  userjs )

//sacar item de localstora
localStorage.removeItem("user")
//limpiar localstora 
localStorage.clear()