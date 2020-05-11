'use strict'

var form = document.querySelector("#formPelis")
var formDel = document.querySelector("#formDelPelis")


form.addEventListener("submit" , function(){
    
    var namePeli = document.querySelector("#addPelicula").value
    
    console.log(namePeli)

    if( namePeli.length >= 1){
        localStorage.setItem( namePeli , namePeli)
    }else{
        alert("debe agregar el titulo")
    }
})

var ul =document.querySelector("#listPelis")

for(var i in localStorage){
    if( typeof localStorage[i] == "string"){
            var li = document.createElement("li")
            li.append(localStorage[i])
            ul.append(li)
    }
}

formDel.addEventListener("submit" , function(){
    var namePeli = document.querySelector("#delPelicula").value 
    var flag = false

    for(var i in localStorage){
        if( typeof localStorage[i] == "string"){
            if( localStorage[i] == namePeli){
                localStorage.removeItem(namePeli)
                flag = true
            }
        }
    }
    if(flag == true){
        alert("se ha removido el item:" + " " + namePeli)
    }else{
        alert("no se encuentra el item: " + " " + namePeli )
    }
})
