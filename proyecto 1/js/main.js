$(document).ready(function(){
   
    if(window.location.href.indexOf('index') > -1 ){
        
        //slider
        $('.bxslider').bxSlider({
              mode: 'fade',
              captions: true,
              slideWidth: 1200,
        });
        
          //posts

        var posts = [
            {
                title : 'prueba de titulo 1' , 
                date : 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format("yyyy"),
                content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium rhoncus sem, et auctor sapien facilisis ut. Praesent nunc nisl, varius bibendum scelerisque id, semper nec est. Proin dignissim erat nec nisl viverra, a congue diam tempor. Aliquam fermentum dui scelerisque, tristique libero et, laoreet mi. '
        
            } ,
            
            {
                title : 'prueba de titulo 1' , 
                date : 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format("yyyy"),
                content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium rhoncus sem, et auctor sapien facilisis ut. Praesent nunc nisl, varius bibendum scelerisque id, semper nec est. Proin dignissim erat nec nisl viverra, a congue diam tempor. Aliquam fermentum dui scelerisque, tristique libero et, laoreet mi. '
        
            } ,
            
            {
                title : 'prueba de titulo 1' , 
                date : 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format("yyyy"),
                content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium rhoncus sem, et auctor sapien facilisis ut. Praesent nunc nisl, varius bibendum scelerisque id, semper nec est. Proin dignissim erat nec nisl viverra, a congue diam tempor. Aliquam fermentum dui scelerisque, tristique libero et, laoreet mi. '
        
            } ,
            
            {
                title : 'prueba de titulo 1' , 
                date : 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format("yyyy"),
                content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium rhoncus sem, et auctor sapien facilisis ut. Praesent nunc nisl, varius bibendum scelerisque id, semper nec est. Proin dignissim erat nec nisl viverra, a congue diam tempor. Aliquam fermentum dui scelerisque, tristique libero et, laoreet mi. '
        
            } 
            
        ]
    
        //console.log(posts)

        posts.forEach( (item , index) => {
            
            //console.log(item)

            var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}
                </p>
                <a href="#" class="btnMore">leer mas</a>
            </article>
            `

            $('#posts').append(post)

        })
        
    }
    
    //scrroll arriba 
    $('.subir').click(function(e){

        e.preventDefault()

        $('html , body').animate(
            {
            scrollTop:0
            },
            1000
        )

    })


    // login falso

    $('#login form').submit(function(e){
        e.preventDefault()
        
        var name = $('#form_name').val()
        localStorage.setItem('form_name' , name )

    })

    
    var form_name = localStorage.getItem('form_name')

    if(form_name != null && form_name != 'undefined'){
        var abou_parrafo = $('#about p')

        abou_parrafo.html('bienvenido, ' + form_name)
        abou_parrafo.append('<a href="#" id="logout"> Cerrar Sesion</a>')
        $('#login form').hide()


        $('#logout').click(function(){
            localStorage.clear()
            location.reload()
        })
        

    }


    if(window.location.href.indexOf('about') > -1){
        console.log('ofaidna')
        $('.acordeon').accordion()
    }

    if( window.location.href.indexOf('reloj') > -1 ){

        mostrarHora()
        setInterval( function(){
            mostrarHora()
        },1000)

        function mostrarHora(){
            var reloj = moment().format('h:mm:ss a')
            $('.reloj').html(reloj)
        }
    }

    if(window.location.href.indexOf('contact') > -1){
       
        $('#form_contact input[name="date"]').datepicker()

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollTopOnError: true
          });

    }

});