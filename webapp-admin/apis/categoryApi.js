import api from "../common/api"
import {CATEGORYURL} from "../common/URLSchema"

export default {

    getCategoryList(cb){
        api.get(CATEGORYURL,{},cb)
    }
}
