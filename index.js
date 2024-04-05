const express = require('express')
const mongoose = require('mongoose')
// const Address = require('./model/model')
const bodyParser = require('body-parser')



// init express app 

const app  = express();

// parse application/x-www-form-urlencoded

// app.use(bodyParser.urlencoded({rxtended:false}))



// connecting to DB

// mongoose.connect('mongodb://localhost:27017/AddressBook',
// {useNewUrlParser: true, useUnifiedTopology:true
// }).then(() =>{
//     console.log('connected to db')
// }).catch((error) =>{
//     console.log(error)
// });

mongoose.connect('mongodb://localhost:27017/AddressBook',
{useNewUrlParser: true});
const con= mongoose.connection;
app.use(express.json());
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}




// init Router 

const addressRouter = require('./routes/address');
app.use('/address',addressRouter)


// init server 

app.listen(3000,() =>{
    console.log('server listening to port 3000');
});