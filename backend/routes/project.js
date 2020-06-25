'use strict'

var express = require('express')
var ProjectControler = require('../controller/project')

var router = express.Router()

router.get('/home',ProjectControler.home)
router.post('/test',ProjectControler.test)
router.post('/save-project',ProjectControler.saveProject)
//ruta con parametro
router.get('/project/:id?',ProjectControler.getProject)
//por get porque es para sacar data del backend
router.get('/projects',ProjectControler.getProjects)
//update
router.put('/project/:id',ProjectControler.updateProject)
//delete
router.delete('/project/:id',ProjectControler.deleteProject)

module.exports =  router