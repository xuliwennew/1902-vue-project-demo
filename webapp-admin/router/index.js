import Vue from "vue"
import VueRouter from "vue-router"

import list from "../pages/products/list"
import index from "../pages/login/login"
import userApi from "../apis/userApi"

Vue.use(VueRouter)


//服务器验证 权限

let router = new VueRouter({
    routes:[
        {
           path:"/",
           redirect:"/login"
        },
        {
            path:"/list",component:list
        },
        {
            path:"/login",
            component:index
        }
    ]
})

router.beforeEach(async (to,from ,next)=>{

    console.log("beforeEach")
    next()

    // checkSession 合法，会话状态是否存在
    let data = await userApi.checkSession()
    console.log(data)
    if(data.code == 201){
        next("/login")
    }else {
        next()
    }

})

export default router
