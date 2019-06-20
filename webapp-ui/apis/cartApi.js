import api from "../commons/api"
import {CARTURL} from "../commons/URLS"

export default {

    /**
     * 获取购物信息
     * @param cb
     */
    getCartInfo(cb){
        api.get(CARTURL,{},cb)
    }
}
