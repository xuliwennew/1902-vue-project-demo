<template>
    <li style="position: relative">
        <v-touch @swiperight="handlerSwiperRight" @swipeleft="handlerSwiperLeft">
          <div class="shop-info">
            <input type="checkbox"
                   v-model="data.checked"
                   @change="singleCheck(sid)"
                   class="check goods-check goodsCheck" />
            <div class="shop-info-img">
                <a href="#">
                    <img :src="data.pic" />
                </a>
            </div>
            <div class="shop-info-text">
                <h4>
                    {{data.title}}
                </h4>
                <div class="shop-brief">
                    <span>重量:{{data.attrs.weight}}</span>
                    <span>颜色:{{data.attrs.color}}</span>
                    <span>版本:{{data.attrs.version}}</span>
                </div>
                <div class="shop-price">
                    <div class="shop-pices">
                        ￥<b class="price">{{data.price}}</b>
                    </div>
                    <div class="shop-arithmetic">
                        <a class="minus" @click="minus(sid,pid)">-</a>
                        <span class="num">{{data.num}}</span>
                        <a class="plus" @click="add(sid,pid)">+</a>
                    </div>
                </div>
            </div>
        </div>
            <transition>
              <div @click="del(sid,pid)" v-show="flag" class="del">
                  删除
              </div>
            </transition>
        </v-touch>
    </li>
</template>

<script>
    export default {
        name: "product",
        props:["data","sid","pid"],
        data(){
          return {
              flag:false
          }
        },
        methods:{
            singleCheck(sid){
                this.$emit("pCheck",sid)
            },
            add(sid,pid){
                this.$emit("add",sid,pid)
            },
            minus(sid,pid){
                this.$emit("minus",sid,pid)
            },
            handlerSwiperLeft(){
                console.log("left")
                this.flag = true
            },
            handlerSwiperRight(){
                console.log("right")
                this.flag = false
            },
            del(sid,pid){
                this.$emit("del",sid,pid)
                this.flag = false
            }
        }
    }
</script>

<style scoped>
   .v-enter{
       transform: translate3d(100px,0,0);
   }

    .v-enter-active,.v-leave-active {
       transition: all .3s linear;
    }

    .v-enter-to{
        transform: translate3d(0,0,0);
    }

    .v-leave {
        transform: translate3d(0,0,0);
    }

    .v-leave-to {
        transform: translate3d(100px,0,0);
    }

    .del {
        position: absolute;
        right:0;
        top:0;
        height:100%;
        width:100px;
        background-color: red;
        text-align: center;
        line-height: 120px;
        color:#fff;
        font-size: 20px;
    }

</style>
