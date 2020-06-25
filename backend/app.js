'use strict'

var express = require('express')
var bodyParser = require('body-parser')


var app = express()

//cargar archivos de rutas
var project_routes = require('./routes/project')

//middlewares
app.use(bodyParser.urlencoded({extended:false}))


//convierto todo lo que llegue a json
app.use(bodyParser.json())

//cors


//rutas
app.use('/api',project_routes)

//exportar

module.exports = app