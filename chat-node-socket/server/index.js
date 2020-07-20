'use strict'
//cargando modulo de express
var express = require('express')
var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)
const puerto = 6677


//middleware de express
app.use( express.static('client'))

app.get('/hola-mundo',function( req , res ){
    res.status(200).send('hola mundo desde una ruta')
})


var messages = [{
    id:1,
    text:'bienvenido al chat privado de esta casa, probando node',
    nick:'bot pedro jose'
}]

//on permite lanzar eventos
io.on('connection' , function( socket ){
    console.log('el cliente con ip:' + socket.handshake.address + ' se conecto')

    socket.emit('messages',messages)

    socket.on('add-message' , function(data){
        messages.push(data)

        io.sockets.emit('messages', messages)
    })

})


server.listen( puerto , function(){
    console.log('server corriento en ' + puerto) 
})