<template>
    <ul>
        <jd-cart-shop-product @del="del" @add="add" @minus="minus" @pCheck="singleCheck" :key="pid" :data="product" :sid="sid" :pid="pid" v-for="(product,pid) in data"></jd-cart-shop-product>
    </ul>

</template>

<script>
    import product from "./product"
    export default {
        name: "productList",
        components:{
            "jd-cart-shop-product":product
        },
        props:["data","sid"],
        methods:{
            singleCheck(sid){
                this.$emit("pCheck",sid)
            }
            ,
            add(sid,pid){
                this.$emit("add",sid,pid)
            },
            minus(sid,pid){
                this.$emit("minus",sid,pid)
            },
            handlerSwiperLeft(){
                console.log("left")
            },
            del(sid,pid){
                this.$emit("del",sid,pid)
            }
        }
    }
</script>

<style scoped>

</style>
