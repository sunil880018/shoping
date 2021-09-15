require('dotenv').config()
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})
UserSchema.methods.generateToken = async function(){
    try{
       // here we need to pass id of databse collection and secret key
       const token =  jwt.sign({_id:this._id} , process.env.SECRET_KEY); // you need to keep secret key 
       // in .env file because no one can open .env file on github
       this.tokens = this.tokens.concat({token:token});
       await this.save();
       //console.log(token);
    }catch(err){
       console.log(err);
    }
}

// encrypt password and store in database
UserSchema.pre("save" , async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
    }
    next();
})
const User = mongoose.model("Username",UserSchema);
module.exports = User