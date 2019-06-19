import Vue from "vue"

import app from "./app"
import "./assets/basic.css"

new Vue({
    el:"#app",
    render(h){
        return h(app)
    }
})
