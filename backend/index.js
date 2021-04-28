const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const app = express();
const {mongoose} = require("./database")

//Configuracion
app.set('port',process.env.PORT || 3000)

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));

//Routes
app.use('/api/pizzas',require('./routes/pizzas.routes'))

//Iniciar el Servidor
app.listen(app.get('port'),() =>{
    console.log('El Servidor escucha en el puerto 3000')
})