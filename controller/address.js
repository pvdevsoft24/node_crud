const express= require('express');
const mongoose= require('mongoose');

const Address = require('../model/model.js');


const router = express.Router();


// Read Address Data

const getAddress = async (req,res) =>{

    try{
        const address = await Address.find();
        res.send(200).json(address);
    }catch(error){
        res.status(404).json({message:error.message});
    }
}

// Create Address Data

const createAddress = async (req,res) =>{
    console.log(req.body);

    const newAddressData = new Address({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        place:req.body.place
    })

    try{
        await newAddressData.save();
        res.status(201).json(newAddressData);
    }catch(error){
        console.log("Babaji "+error.message);
        res.status(400).json({message:error.message});
    }
}


module.exports.getAddress = getAddress;
module.exports.createAddress = createAddress;