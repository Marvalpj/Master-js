'use strict'

var mongoose = require('mongoose')

var Schema = mongoose.Schema

//esquema de project

var ProjectSchema = Schema ({
    name : String,
    description : String,
    category : String,
    year : Number,
    langs : String,
    image: String
})
//param1 nombre de la entidad
//param2 el esquema
module.exports = mongoose.model('Project' , ProjectSchema)
//project ---> guarda los documentos en la colecion