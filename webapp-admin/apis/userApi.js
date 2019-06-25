import api from "../common/api"
import {LoginCheckURL,checksession,loginOutUrl} from "../common/URLSchema"


export default  {


    /**
     * 请求api 验证用户
     * @param user
     * @param cb
     */
    checkUser(user,cb){
        api.post(LoginCheckURL,user,cb)
    },

    /**
     * 检查用户状态是否过期
     * @param cb
     */
    async checkSession(cb){
        //同步的方式进行async的调用
        let res= await fetch(checksession,{
            method:"GET",
            credentials: "include",
            mode: "cors",
        })

        return await res.json()
    },

    async loginOutUser(){
        //同步的方式进行async的调用
        let res= await fetch(loginOutUrl,{
            method:"GET",
            credentials: "include",
            mode: "cors",
        })

        return await res.json()
    }
}
