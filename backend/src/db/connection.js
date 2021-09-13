const mongoose = require('mongoose')
/*
mongoose.connect("mongodb://localhost:27017/Productdetail",{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
.then( () =>{
    console.log("connection success")
}).catch( (e) =>{
    console.log("no connection")
})*/

const connectDB = async() =>{
 try{
     const conn = await mongoose.connect("mongodb://localhost:27017/Shop",{
        useNewUrlParser: true,
     })


     console.log(`Mongo Connect: ${conn.connection.host}`)
 } catch (error){
    console.log(`Error: ${error.message}`)
    process.exit(1)
 }
}

module.exports = connectDB
