'use strict'

window.addEventListener('load',function(){
  

    var form = document.querySelector("#form")
    var boxDashed = document.querySelector(".dashed")
    boxDashed.style.display = "none"
    form.addEventListener("submit",function(){
        
        var name = document.querySelector("#name").value
        var lastName = document.querySelector("#lastName").value
        var age = document.querySelector("#age").value

        var dataUser = [name , lastName , age ]
        
        boxDashed.style.display = "block"

        var p_name = document.querySelector("#p-name span")
        var p_lastName = document.querySelector("#p-lastName span")
        var p_age = document.querySelector("#p-age span")

        p_name.innerHTML = name
        p_lastName.innerHTML = lastName
        p_age.innerHTML = age

        //agregando informacion a html
        // for( let data in dataUser){
        //     var parrafo = document.createElement("p")
        //     parrafo.append(dataUser[data])
        //     boxDashed.append(parrafo)
        // }

    })



})