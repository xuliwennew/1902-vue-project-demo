<template>
    <div class="shopping">
        <jd-cart-shop @del="del" @add="add" @minus="minus" @pCheck="singleCheck" @sCheck="shopCheck" :data="shop" :sid="sid" v-for="(shop,sid) in data" :key="sid"></jd-cart-shop>
    </div>

</template>

<script>
    import shop from "./shop"
    export default {
        name: "cartShopList",
        components:{
            "jd-cart-shop":shop
        },
        props:["data"],
        methods:{
            shopCheck(sid){
                console.log("shoplist scheck")
                this.$emit("sCheck",sid)
            },
            singleCheck(sid){
                this.$emit("pCheck",sid)
            },
            add(sid,pid){
                this.$emit("add",sid,pid)
            },
            minus(sid,pid){
                this.$emit("minus",sid,pid)
            },
            del(sid,pid){
                this.$emit("del",sid,pid)
            }
        }
    }
</script>

<style scoped>

</style>
