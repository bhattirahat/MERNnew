require('dotenv').config()

const express = require('express')
const streamRoutes = require('./routes/stream')
const db = require('mongoose')

//express app
const app = express()

//middleware
app.use(express.json())
app.use((req,res,next)=>{ //print all the routes taken
    console.log(req.path,req.method)
    next()
})
//routes
app.use('/api/stream',streamRoutes)

//connect to db
db.connect(process.env.MONGO_CRED)
.then(()=>{
    //listen for request
app.listen(process.env.PORT,()=>{
console.log('connected to database and listening on port', process.env.PORT)
})

})
.catch((er)=>{
    console.log(er)
})


process.env