'user strict'

var mongoose = require('mongoose')

var app = require('./app')
var port = 3700

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/portafolio')
    .then(
        ()=>{
            console.log('conexion establecida con exito, funcionado...')
            //creacion del server
            app.listen(port , () =>{
                console.log('servidor corriendo correctamente en la url localhost:3700')
            })
        }
    )
    .catch(
        err => {
        console.log(err)
    })