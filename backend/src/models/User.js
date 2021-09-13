const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

UserSchema.pre("save" , async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
    }
    next();
})
const User = mongoose.model("Username",UserSchema);
module.exports = User