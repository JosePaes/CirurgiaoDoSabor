const express = require('express');
const UserController = require('./Controllers/UserController')
const PizzaController = require('./Controllers/PizzaController')
const EndrecoController = require('./Controllers/EnderecoController')

const routes = express.Router();

routes.post('/user', UserController.CreateUser)
routes.get('/user', UserController.ListaUser)

routes.post('/pizza', PizzaController.CreatePizza)
routes.get('/pizza', PizzaController.ListaPizza)

routes.post('/endereco', EndrecoController.CreateEndereco)
module.exports = routes;