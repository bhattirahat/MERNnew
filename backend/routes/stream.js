const express = require('express')
const {
    createStream,getSingleStream,getStream, createEco,
} = require('../ Controller/streamController')
const router = express.Router()

//GET ALL stream
router.get('/',getStream)
//get a single stream
router.get('/:id',getSingleStream)
//post single stream

router.post('/', createStream)

router.post('/eco',createEco)

//delete
router.delete('/:id',(req,res)=>{
    res.json({msg:"Delete a stream"})
})

router.patch('/:id',(req,res)=>{
    res.json({msg:"Update  a stream"})
})
module.exports = router


