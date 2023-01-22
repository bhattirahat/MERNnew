const mongoose = require('mongoose') 
const Schema = mongoose.Schema

const ecoschema = new Schema({
    recycle:{
        type : Number,
        required:true
    },
    garbage :{
        type: Number,
        required:true
    },
   compost :{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('Eco',ecoschema)



