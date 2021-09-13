const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    }
})

const Product = mongoose.model("Product",ProductSchema);
module.exports = Product;