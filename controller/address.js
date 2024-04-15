const express= require('express');
const mongoose= require('mongoose');

const Address = require('../model/model.js');


const router = express.Router();


// Read Address Data

const getAddress = async (req,res) =>{
    // res.send("sucess");

    try{
        const address = await Address.find();
        res.send(address);
    }catch(error){
        res.status(404).json({message:error.message});
    }
}

// Create Address Data

const createAddress = async (req,res) =>{

    console.log("Babaji");

    var mName = req.query.name;
    var mEmail = req.query.email;
    var mPhone = req.query.phone;
    var mPlace = req.query.place;

    console.log(mName);

    const newAddressData = new Address({
        name:mName,
        email:mEmail,
        phone:mPhone,
        place:mPlace
    })

    try{
        await newAddressData.save();
        res.send(newAddressData);
        console.log("Saved ");
    }catch(error){
        console.log("Babaji "+error.message);
        res.status(400).json({message:error.message});
    }
}


module.exports.getAddress = getAddress;
module.exports.createAddress = createAddress;