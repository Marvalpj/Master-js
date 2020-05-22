$(document).ready(function(){
    

//mouseOver and mouseOut
    var box = $('#box')
    //1
    // box.mouseover(function(){
    //     var that = $(this)
    //     that.css('background','red')
    // })
    // box.mouseout(function(){
    //     var that = $(this)
    //     that.css('background','yellow')
    // })
    
    //2
    // box.mouseover( chanceRed )
    // box.mouseout( chanceYellow )

    function chanceRed(){
        var that = $(this)
        that.css('background','red')
    }
    function chanceYellow(){
        var that = $(this)
        that.css('background','yellow')
    }
    //3
    box.hover(  chanceRed , chanceYellow )

    //click , dbclick
    box.click( function(){
        console.log("entro")
        var that = $(this)
        that.css('background','blue')
            .css('color' , 'white')
    })

    // focus y blur
    var name = $("#name")
    var data = $("#data")
    name.focus(function(){
        $(this).css("border","2px solid green")
    })
    name.blur(function(){
        $(this).css("border","2px solid #ccc")
        data.text( $(this).val()).show()
    })

    //mousedown mouseup

    data.mousedown(function(){
        $(this).css("border-color","green")
    })
    data.mouseup(function(){
        $(this).css("border-color","black")
    })

    $(document).mousemove(function(){
        console.log(event.clientX)
        console.log(event.clientY)
        var sigueme = $(".sigueme") 
        sigueme.css("left",event.clientX)
        sigueme.css("top",event.clientY)
        
        sigueme.css("left",event.clientX)
            $("body").css("cursor","none")
            .css("top",event.clientY)
    })

})