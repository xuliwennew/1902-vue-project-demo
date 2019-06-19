const express  = require("express")

//创建一个web服务器
const app = express()
//form querystirng req.body
app.use(express.urlencoded());
//注册一个静态的资源的位置
app.use(express.static(__dirname))
const ProductController = require("./controllers/ProductController")
const CategoryController = require("./controllers/CategoryController")

//注册一级路由
app.use("/product",ProductController)
app.use("/category",CategoryController)

app.listen(3000,()=>{
    console.log("api server is ready on port 3000")
})
