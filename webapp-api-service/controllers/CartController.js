const express = require("express")
const router = express.Router()

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

router.get("/api/cartinfo",(req,res)=>{
   let cartInfo = require("../mocks/cartInfo.json")
   res.json(cartInfo)
})


module.exports = router
