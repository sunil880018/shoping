const express = require('express')
const app = express()
const connectDB = require("./src/db/connection");
const User = require('./src/models/User');
const path = require('path');
const bcrypt = require('bcryptjs') 
const cookieParser = require('cookie-parser')
const auth = require('./src/middleware/auth');
connectDB()
const PORT = process.env.PORT||5000

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'../myshop')));

app.post("/register",async(req,res) =>{
    try{
        const reg = new User({
            name:req.body.name,
            password:req.body.password
        })  
        // generate token before store in database reg is instance of User so we can call 
        //using dot re.generationToken()
        const token = await reg.generateToken();
        console.log(token);

        res.cookie("jwt" , token , {
            expires:new Date(Date.now() + 50000),
            httpOnly:true // expire cookie manually this is optional
        }); // store the token in chrome browser -> name of cookie , token and expiry date

        const regUser = await reg.save();

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

app.post('/login' , async(req,res) =>{
    try{
          const name = req.body.name;
          const password = req.body.password;
          const Username = await User.findOne({name:name});
          const isMatch = await bcrypt.compare(password , Username.password);
          // getting token from database
          const token = await Username.generateToken();

          res.cookie("jwt" , token , {
            expires:new Date(Date.now() + 50000),
            httpOnly:true // expire cookie manually this is optional
        }); // store the token in chrome browser -> name of cookie , token and expiry date

        

          if(isMatch){
              console.log("login success");
              res.status(201).send("Success");
          }else{
              res.send("invalid");
          }

    }catch(err){
        res.status(400).send("error "+err);
    }
})


app.get('/logout' ,auth , async(req,res) =>{
    try{
    //     console.log(req.user);
    //    req.user.tokens = req.user.tokens.filter((currele) =>{
    //        return currele.token !== req.token
    //    })
       
       res.clearCookie("jwt");
    //    await req.user.save();
    //    res.render('login');

    }catch(err){
        res.status(500).send(err);

    }
})

// auth is middle ware to check user is genuine or not
app.get('/home' , auth , (req,res) =>{
      res.send("This is home page")
})
app.listen(PORT , ()=>{
    console.log(`server run on port ${PORT}`)
})


