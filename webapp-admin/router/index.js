import Vue from "vue"
import VueRouter from "vue-router"
import add from "../pages/products/add"
import list from "../pages/products/list"
Vue.use(VueRouter)


let router = new VueRouter({
    routes:[
        {
           path:"/",redirect:"/add"
        },
        {
            path:"/add",component:add
        },
        {
            path:"/list",component:list
        }
    ]
})


export default router
