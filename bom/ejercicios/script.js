'use strict'

window.addEventListener('load',function(){
  

    var form = document.querySelector("#form")
    var boxDashed = document.querySelector(".dashed")
    boxDashed.style.display = "none"
    
    form.addEventListener("submit",function(){
        
        var name = document.querySelector("#name").value
        var lastName = document.querySelector("#lastName").value
        var age = parseInt(document.querySelector("#age").value)
        
        if( name.trim() == null || name.trim().length == 0 ){
            alert("el nombre no es valido")
            document.querySelector("#error_name").innerHTML = "El nombre no es valido"
            return false
        }else{
            document.querySelector("#error_name").style.display = "none"
            // if (document.querySelector("#error_name").textContent.length > 0){
            //     document.querySelector("#error_name").textContent = ""
            // }
        }
        
        if( lastName.trim() == null || lastName.trim().length == 0 ){
            alert("el apellido no es valido")
            return false
        }
        
        if( age == null || age <= 0 || isNaN(age) ){
            alert("La edad no es valida")
            return false
        }


        boxDashed.style.display = "block"
        
        //var dataUser = [name , lastName , age ]
          //agregando informacion a html
        // for( let data in dataUser){
        //     var parrafo = document.createElement("p")
        //     parrafo.append(dataUser[data])
        //     boxDashed.append(parrafo)
        // }
      

        var p_name = document.querySelector("#p-name span")
        var p_lastName = document.querySelector("#p-lastName span")
        var p_age = document.querySelector("#p-age span")

        p_name.innerHTML = name
        p_lastName.innerHTML = lastName
        p_age.innerHTML = age

      

    })



})