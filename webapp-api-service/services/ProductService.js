const ProductModel = require("../models/ProductModel")



module.exports = {

    /**
     * 添加一个商品信息
     * @param product
     * @param cb
     */
    saveProduct(product,cb){
        let model = new ProductModel(product)

        model.save(cb)
    },

    /**
     * 根据条件删除一条商品
     * @param where
     * @param cb
     */
    delProductById(where,cb){
        ProductModel.deleteOne(where,cb)
    },

    findProductsByPager(pageIndex=0,pageSize=10,where,cb){
        ProductModel.find(where).skip(pageIndex*pageSize).limit(pageSize).exec(cb)
    }

}
