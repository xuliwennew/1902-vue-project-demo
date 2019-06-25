const express  = require("express")
const cookieParser = require("cookie-parser") // cookie json sessionid
const session = require("express-session")

//加密解密 密码
const secretCode = "sessiontest"

//创建一个web服务器
const app = express()

app.use(cookieParser(secretCode)) //解密

//创建一个session会话 30min
app.use(session({
    secret:secretCode,
    resave:true,
    saveUninitialized:true
}))

//form querystirng req.body
app.use(express.urlencoded());
//注册一个静态的资源的位置
app.use(express.static(__dirname))
const ProductController = require("./controllers/ProductController")
const CategoryController = require("./controllers/CategoryController")
const CartController = require("./controllers/CartController")
const LoginController = require("./controllers/LoginController")

//注册一级路由
app.use("/product",ProductController)
app.use("/category",CategoryController)
app.use("/cart",CartController)
app.use("/user",LoginController)

app.listen(3000,()=>{
    console.log("api server is ready on port 3000")
})
