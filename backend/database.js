const mongoose = require('mongoose')

const URI = 'mongodb+srv://masset:Cachorro2020@massetsoft.mjz1w.mongodb.net/pizzeria';
mongoose.connect(URI)
.then(db => console.log('Base de datos conectada'))
.catch(err => console.error(err))

module.exports = mongoose;


