const { json } = require('express')
const Stream = require('../models/streamdb')
const Eco = require('../models/save')

//GET all stream
const getStream = async (req,res) => {
    const stream = await Stream.find({}).sort({createAt: -1})
    res.status(200).json(stream)
}
//GET single stream
const getSingleStream = async (req,res)=>{
    const {id} = req.params
    
    const stream =  await Stream.findById(id)
    if( !stream){
        return res(404).json({error: "No stream found"})
    }
    return res(200).json(stream) 
} 

//create new stream

const createStream = async (req,res) => {
    const {title,episodes,studio,released_year,status} = req.body
    // add doc to db
    try{
        const stream = await Stream.create({title,episodes,studio,released_year,status})
        res.status(200).json(stream)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
    }
const createEco = async (req,res) =>{
    const {recycle,garbage,compost} = req.body

    try{
        const eco = await Eco.create({recycle,garbage,compost})
        res.status(200).json(eco)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}
//delete new stream

//update a new stream


module.exports = {
    createStream,getSingleStream,getStream,createEco
}
