window.addEventListener('load',function(){

    var bicicleta = {
        color: 'rojo',
        modelo: 'bmx',
        frenos: 'disco',
        velocidadMaxima: '60km',
        cambiaColor : function(color){
            //bicicleta.color = color
            this.color = color
        }
    }
    
    console.log(bicicleta)
    bicicleta.cambiaColor('blue')
    console.log(bicicleta)


})