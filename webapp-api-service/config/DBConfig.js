const mongoose = require("mongoose")

const DBURL = "mongodb://localhost:27017/huawei"
//建立连接
mongoose.connect(DBURL,{useNewUrlParser:true})

//监听连接成功事件
mongoose.connection.on("connected",()=>{
    console.log(`${DBURL} success connected `)
})


module.exports = mongoose
