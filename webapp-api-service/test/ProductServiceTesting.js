const ProductService  = require("../services/ProductService")


// ProductService.saveProduct({
//     title:"huawei p30"
// },(err)=>{
//     console.log(err)
// })


ProductService.findProductsByPager(0,10,{},(err,results)=>{
    console.log(results)
})
