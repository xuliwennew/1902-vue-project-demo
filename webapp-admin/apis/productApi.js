import api from "../common/api"
import {PRODUCTADDURL,PRODUCTLISTURL,PRODUCTDELURL} from "../common/URLSchema"

export default {


    /**
     * 保存商品信息
     * @param product
     * @param cb
     */
    addProduct(product,cb){
        api.post(PRODUCTADDURL,product,cb)
    },

    /**
     * 获取商品的分页数据
     * @param pid
     * @param size
     * @param cb
     */
    getProductListByPager(pid,size,cb){
        api.get(PRODUCTLISTURL,{},cb)
    },

    delProductByWhere(where,cb){
        api.delete(PRODUCTDELURL,where,cb)
    }
}
