import Vue from "vue"

import app from "./app"
import "./assets/basic.css"
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})


new Vue({
    el:"#app",
    render(h){
        return h(app)
    }
})
