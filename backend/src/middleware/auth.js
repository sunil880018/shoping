const jwt = require('jsonwebtoken');
const User  =  require("../models/User");


// auth is checking for user is genuine or not
const auth = async (req,res,next) =>{
   try{
       const token = req.cookie.jwt;
       const verifyUser = jwt.verify(token , process.env.SECRET_KEY);
       console.log("I am verify "+verifyUser);
    //    const user = await User.findOne({_id:verifyUser._id});
    //    console.log(user);
    //    req.user = user;
    //    req.token = token;
       
       next();
   }catch(err){
       console.log(err);
   }
}
 module.exports = auth;

