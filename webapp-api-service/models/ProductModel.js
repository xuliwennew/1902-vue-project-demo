const mongoose = require("../config/DBConfig")
const Schema = mongoose.Schema;
/**
 *  mongoose ODM object document mapping
 *  product.js mongoose products
 **/

//创建一个products集合的js结构
let ProductSchema = new Schema({
    title:{type:String},
    price:{type:Number},
    pic:{type:String},
    category: {type:Array}

})


let ProductModel= mongoose.model("products",ProductSchema)


module.exports = ProductModel
