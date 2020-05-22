$(document).ready(function(){

    reloadLinks()

    
    
    $('#addBtn')
        //remove attr
        .removeAttr('disabled')
        //evento click
        .click(function(){
        var input = $("#addLink").val()
        console.log(input)
        if( input != ' ' ){
            console.log("if")
            $('#menu').append( '<li><a href="'+input+'"></a></li>')
            input = ''
            //aniade de primero
            // $('#menu').prepend( '<li><a href="'+input+'"></a></li>')
            
            //fuera de la lista
            //$('#menu').before( '<li><a href="'+input+'"></a></li>')
            
            reloadLinks()
        }else{
            console.log('else')
            alert('escribe algo...')
        }
    })

    


})


function reloadLinks(){
    // recorre el aaray
    $('a').each( function(index){
        var that = $(this) 
        var link = that.attr('href')

        //agregar atributos
        that.attr('target','_blank')

        that.text(link)
    } )
}
