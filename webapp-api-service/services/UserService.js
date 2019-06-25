const UserModel = require("../models/UserModel")



module.exports = {

    /**
     * 验证用户是否存在
     * @param user 用户对象
     * @param cb
     */
    checkUserIsExists(user,cb){
        UserModel.find(user,cb)
    }

}
