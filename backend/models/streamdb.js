const mongoose = require('mongoose')

const Schema = mongoose.Schema

const streamschema = new Schema({
    title:{
        type : String,
        required:true
    },
    episodes:{
        type: Number,
        required:true
    },
    studio:{
        type:String,
        required:true
    },
    released_year:{
        type: Number,
        required:true
    },
    status:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('Streams',streamschema)



