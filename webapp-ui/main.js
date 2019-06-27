import Vue from "vue"

import app from "./app"
import "./assets/basic.css"
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})
import Vuex from "vuex"
Vue.use(Vuex)
import store from "./store"


new Vue({
    el:"#app",
    store, //$store
    render(h){
        return h(app)
    }
})
