
const express = require("express")
const router = express.Router()
const UserService = require("../services/UserService")


/**
 * 解决访问的跨域问题
 */
router.all("*",(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "http://localhost:63342");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
})

router.post("/checklogin",(req,res)=>{

    /**
     * 1, req 获取 body post 用户名和密码
     * 2, 通过数据查询 用户名和密码 是否存在，
     * 3, 把当前的验证成功的用户信息保存到session会话中，sesessionid
      *4, 当有一个新的请求， 先判断会话是否过期，如果过期需要重新登录，重新生成session
     */

   let user =  req.body ;

   //通过数据库进行验证是否存在该用户
    UserService.checkUserIsExists(user,(error,results)=>{


        if(results.length >0){
           //如果当前用户是存在的
            req.session.user = results[0];
            console.log(req.session.user)
            res.json({code:200,user:req.session.user})

        }else {
             res.json({code:201,error:"用户名或者密码错误"})
        }
    })



})

//验证sesseion是否存在
router.get("/checksession",(req,res)=>{
     if(req.session.user){
         res.json({code:200,error:"恭喜,还可以访问，亲！"})
     }else {
         res.json({code:201,error:"登录失败，用户状态过期，请重新登录"})
     }
})


router.get("/checkout",(req,res)=>{
    req.session.user = null;
    res.json({code:200,error:"恭喜,成功退出，亲！"})
})


module.exports = router;
