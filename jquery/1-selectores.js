'use strict'
$(document).ready( function(){
    

    //selector de id
    var rojo = $("#rojo").css("background" , "red")
        .css("color", "white")
    
    var amarillo = $("#amarillo").css("background" , "yellow")
        .css("color", "green")
    
    var verde = $("#verde").css("background" , "green")
        .css("color", "white")
    

    var miClase = $(".zebra").css("padding", "5px")

    $(".sin_borde").click(function(){
        console.log(this)
        $(this).addClass("zebra")
        console.log(this)
    })
    
    // selectores por etiquetas

    var parrafos = $("p")
    parrafos.css("cursor","pointer")
    parrafos.click(function(){
        var that = $(this)

        if(!that.hasClass("grande")){
            that.addClass("grande")
        }else{
            that.removeClass("grande")
        }
    })

    // selectores de atributo
    $('[title="Google"]').css("background" , "#ccc")
    $('[title="Facebook"]').css("background","blue")

    //otros0
    // $('p , a').addClass("margen-superior")

    var busqueda = $(".caja").find('.resaltado')
    // var busqueda = $(".caja .resaltado")
    //asi buscara la etiqueta con el atributo, no lo encuentra porque esta en otro nivel.
    //busqueda = $(".caja").find('[title="Google"]')
    busqueda = $(".caja .resaltado").eq(0).parent().parent().parent().find('[title="Google"]')
    console.log(busqueda)
} )