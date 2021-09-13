const express = require('express')
const app = express()
const connectDB = require("./src/db/connection");
const User = require('./src/models/User');
const path = require('path')
connectDB()
const PORT = process.env.PORT||5000


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'../myshop')));


app.post("/register",async(req,res) =>{
    try{
        const reg = new User({
            name:req.body.name,
            password:req.body.password
        })  

        const regUser = await reg.save();
        console.log("successful inserted")
        res.status(201).send("User Created");
    }catch(err){
        res.status(400).send(err)
    }
})

app.get("/getUsers" , async(req,res) =>{
    try{
           const user = await User.find();
           res.status(200).json(user);
    }catch(err){
        console.log(err);
        res.send(err);
    }
})


app.delete('/delete' , async(req , res) =>{
    try{
          const name = req.body.name;
          const deleteUser = await User.findOneAndRemove({name : name});
          res.status(200).json(deleteUser);
    }catch(err){
        res.send(err);
    }
})


app.listen(PORT , ()=>{
    console.log(`server run on port ${PORT}`)
})


