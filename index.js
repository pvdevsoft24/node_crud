const express = require('express')
const mongoose = require('mongoose')
const Address = require('./model/model')
const bodyParser = require('body-parser')



// init express app 

const app  = express();

// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({rxtended:false}))



// connecting to DB

mongoose.connect('mongodb://localhost:27017/AddressBook',
{useNewUrlParser: true, useUnifiedTopology:true
}).then(() =>{
    console.log('connected to db')
}).catch((error) =>{
    console.log(error)
});

//  Reading a user from AddressBook

app.get('/:id',(req,res) =>{
    Address.findById(req.params.id,(err,user) =>{
        res.send(user)
    })
})

// Adding a user to AddressBook

app.post('/', (req,res) => {
    name = req.body.name,
    email = req.body.email,
    phone = req.body.phone,
    place = req.body.place

    let newAddress = new Address({
        name:name,
        email:email,
        phone:phone,
        place:place
    })

    newAddress.save().then((address) =>{
        res.send(address)
    }).catch((err) =>{
        console.log(error)
    })
})


// init server 

app.listen(3000,() =>{
    console.log('server listening to port 3000');
});