const mongoose = require('../config/DBConfig')
const Schema = mongoose.Schema // mongodb huawei


//ODM  OBJECT DOCMUMENT MAPPING
let UserSchema = new Schema({
     name:{type:String},
     pass:{type:String}
})

//deno go node c++ docker go typescript
let UserModel = mongoose.model("users",UserSchema)


module.exports = UserModel

