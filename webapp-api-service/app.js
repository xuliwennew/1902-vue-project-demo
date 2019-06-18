const express  = require("express")

//创建一个web服务器
const app = express()
//注册一个静态的资源的位置
app.use(express.static(__dirname))
const ProductController = require("./controllers/ProductController")

app.use("/",ProductController)

app.listen(3000,()=>{
    console.log("api server is ready on port 3000")
})
