const express  = require("express")
const router = express.Router()
const ProductService = require("../services/ProductService")
const formidable = require("formidable")


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


router.get("/",(req,res)=>{
    ProductService.findProductsByPager(0,10,{},(err,results)=>{
        res.json(results)
    })

})

router.post("/product/upload",(req,res)=>{
    var form = new formidable.IncomingForm();   //创建上传表单
    form.encoding = 'utf-8';		//设置编辑
    form.uploadDir = 'public';	 //设置上传目录
    form.keepExtensions = true;	 //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小
    form.parse(req, function(err, fields, files) {
        console.log(files.file.path)
        res.json({picUrl:files.file.path})
    })
})



module.exports = router
