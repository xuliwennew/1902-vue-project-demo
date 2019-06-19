const express = require("express")
const router = express.Router()
const CategoryService = require("../services/CategoryService")

/**
 * 解决访问的跨域问题
 */
router.all("*",(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
})

router.get("/api/list",(req,res)=>{
    CategoryService.getCategoryList((error,data)=>{
        res.json(data)
    })
})


module.exports = router
