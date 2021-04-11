const express = require('express');
const morgan = require('morgan');
const app = express();
const {mongoose} = require("./database")

//Configuracion
app.set('port',process.env.PORT || 3000)

//Middlewares
app.use(morgan('dev'));
app.use(express.json())

//Routes
app.use('/api/pizzas',require('./routes/pizzas.routes'))

//Iniciar el Servidor
app.listen(app.get('port'),() =>{
    console.log('El Servidor escucha en el puerto 3000')
})