const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/calorieapp_development',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to mongodb'));

db.once('open',function(){
    console.log('Connected to database :: MongoDB')
})


module.exports = db;