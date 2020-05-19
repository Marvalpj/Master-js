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

})