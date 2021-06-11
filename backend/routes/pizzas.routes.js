const { json } = require('express');
const express = require('express');
const router = express.Router();
const pizzas = require('../controllers/pizza.controller')

router.get('/',pizzas.getPizzas);
router.post('/',pizzas.crearPizza);
router.get('/:id',pizzas.obtenerPizza)
router.put('/:id',pizzas.editarPizza),
router.delete('/:id',pizzas.eliminarPizza),

module.exports = router;