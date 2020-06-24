'use strict'

var express = require('express')
var bodyParser = require('body-parser')


var app = express()

//cargar archivos de rutas

//middlewares
app.use(bodyParser.urlencoded({extended:false}))
//convierto todo lo que llegue a json
app.use(bodyParser.json())

//cors


//rutas
app.get('/',(req,res)=>{
    res.status(200).send(
        '<h1>hola mundo desde mi api de nodejs</h1>'
    )
})

app.post('/test',(req,res)=>{

    console.log(req.body)
    //obtener parametro enviado por url
    console.log (req.query.web)
    res.status(200).send({
        message:'hola mundo desde mi api de nodejs'
    })
})
app.post('/test/:id',(req,res)=>{

    console.log(req.body)
    //obtener parametro enviado por url
    console.log (req.query.web)
    //captura los parametos que estan definidos en la url ':id'
    console.log(req.params)

    res.status(200).send({
        message:'hola mundo desde mi api de nodejs'
    })
})

app.get('/test',(req,res)=>{
    console.log(req)
    res.status(200).send({
        message:'hola mundo desde mi api de nodejs'
    })
})

//exportar

module.exports = app