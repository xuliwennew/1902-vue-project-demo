const CategoryModel = require("../models/CategoryModel")


module.exports = {

    /**
     * 获取所有的分类信息
     * @param cb
     */
    getCategoryList(cb){
        CategoryModel.find({},cb)
    }
}
