const mongoose = require('../config/DBConfig')
const Schema = mongoose.Schema // mongodb huawei


//ODM  OBJECT DOCMUMENT MAPPING
let CategorySchema = new Schema({
    value:{type:String},
    label:{type:String},
    children:{type:Array}
})

//deno go node c++ docker go typescript
let CategoryModel = mongoose.model("categories",CategorySchema)


module.exports = CategoryModel

