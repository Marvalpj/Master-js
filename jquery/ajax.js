$(document).ready(function(){

    //load : metodo para hacer peticion ajax por get e insertar data
    //$(".data").load('https://reqres.in/')

    //metodos get post
    $.get('https://reqres.in/api/users' , {page : 2 } , function ( response ) {
        
        response.data.forEach( (element , index) => {
            $('.data').append("<p>"+element.first_name+ " "+element.last_name +"</p>")
        });

    })

    // var user = {
    //     name : "Pedro J",
    //     web  : "leader"
    // }

    // $.post( 'https://reqres.in/api/users' , user , function( response ){
    //     console.log(response)
    // })


    $("#form").submit(function(e) {
        
        //e.PreventDefault() se utiliza para detener una acción por omisión, utilizada comunmente sobre etiquetas (a) o botones input:submit ..
        e.preventDefault()

        var user = {
            name : $('input[name="first_name"]').val(),
            web  : $('input[name="web"]').val()
        }
        //asi se accede a la url cuando esta en el form
        //$(this).attr("action")
        // console.log(user)
        // $.post( $(this).attr("action") , user , function(response){
        //     console.log(response)
        // }).done(function(){
        //     //si pasas un parametro al callback obtienes la data de la respuesta
        //     alert("se agrego")
        // })

        $.ajax({
            type: 'POST',
            url:  $(this).attr("action"),
            //parametros
            data: user,
            beforeSend: function(){
                console.log('enviando users...')
            },
            success: function(response){
                console.log(response)
            },
            error: function(){
                console.log("error")
            },
            timeout: 1000   //si tarda mas de el tiempo estimado da error
        })

        
    })

    //$.ajax


})