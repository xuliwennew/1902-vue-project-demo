import Vue from "vue"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from "vue-router"

Vue.use(ElementUI)
Vue.use(VueRouter)

import router from "./router"

import app from "./app"


new Vue({
    el:"#app",
    router,
    render(h){
        return h(app)
    }
})
