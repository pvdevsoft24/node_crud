const express = require('express')
const mongoose = require('mongoose')


// init express app 

const app  = express();



// init server 

app.listen(3000,() =>{
    console.log('server listening to port 3000');
});

// connecting to DB

mongoose.connect('mongodb://localhost:27017/AddressBook',
{useNewUrlParser: true, useUnifiedTopology:true
}).then(() =>{
    console.log('connected to db')
}).catch((error) =>{
    console.log(error)
});