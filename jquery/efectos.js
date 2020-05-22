$(document).ready(function(){

    var box = $(".box")

    $("#show").hide()

    $("#hidden").click(function(){
        $(this).hide()
        $("#show").show()

        box.slideUp('slow')
    })
    
    $("#show").click(function(){
        $(this).hide()
        $("#hidden").show()

        box.slideDown('slow')
    })
    
    $("#toggle").click(function(){
        box.slideToggle()
    })

    $('#animame').click(function(){
        box.animate({
            marginLeft: '500px',
            fontSize: '40px',
            height: 'auto'
            }    , 'slow')
    })


})