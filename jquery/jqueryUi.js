$(document).ready(function(){

    //permite mover elementos en la pag
    $('.elemento').draggable()
    
    //redimensionar elemento 
    //para esto se debe incluir estilos css de jquery-ui
    $('.elemento').resizable()

    //selecionar elementos
    // $('.lista-seleccionable').selectable()
    
    //sortable, no se puede usar en conjunto con el selectable
    $('.lista-seleccionable').sortable({
        update: function(event , ui){
            console.log('cambio la lista')
            console.log(event , ui)
        }
    })


    
    $('#elemento-movido').draggable()
    $('#area').droppable({
        drop: function(){
            console.log('has solatado algo del area')
        }
    })

})