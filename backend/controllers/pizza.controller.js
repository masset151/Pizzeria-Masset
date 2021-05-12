const { json } = require("express");
const pizza = require("../models/pizza");
const { model } = require("../models/pizza");
const Pizza = require("../models/pizza")
const PizzaCtrl = {}

PizzaCtrl.getPizzas = async (req, res) => {
    const pizzas = await Pizza.find();
    res.json(pizzas)
}






PizzaCtrl.obtenerPizza = async (req,res) =>{
    console.log(req.params.id)
    const pizza = await Pizza.findById(req.params.id).exec()
    res.json(pizza)
    


    

}



PizzaCtrl.crearPizza =  async (req,res) => {
   const npizza = new pizza(req.body);
    await  npizza.save();
    console.log(req.body);
    res.json({
        'status':'Pizza Guardada'
    })
    

}

PizzaCtrl.editarPizza = async (req,res) => {
    const {id} = req.params
    const pizza = {
        nombre:req.body.nombre,
        ingredientes: req.body.ingredientes,
        image: req.body.image,
        precio:req.body.precio
    }
    const pizzaU = await Pizza.findByIdAndUpdate(id,{$set:pizza},{new:true})

    res.json({
        "status":"Pizza actualizada"
    })


};

PizzaCtrl.eliminarPizza = async (req,res) => {
    const {id} = req.params
    const dpizza =  await Pizza.findByIdAndDelete(id);
   
    

    res.json({
        "status":"Pizza eliminada"
    })

}


module.exports = PizzaCtrl;