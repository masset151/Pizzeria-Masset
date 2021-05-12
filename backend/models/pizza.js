const mongoose = require('mongoose');
const {Schema} = mongoose;

const PizzaSchema = new Schema({
    //id:{type:Number,required:true,unique:true},
    nombre:{type:String,required: true},
    ingredientes: {type:String, required:true},
    image:{type:String,required:false},
    precio: {type:Number,required:true}
});

module.exports = mongoose.model('pizza',PizzaSchema)

