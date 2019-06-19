import Vue from "vue"
import VueRouter from "vue-router"

import list from "../pages/products/list"
Vue.use(VueRouter)


let router = new VueRouter({
    routes:[

        {
            path:"/",component:list
        }
    ]
})


export default router
