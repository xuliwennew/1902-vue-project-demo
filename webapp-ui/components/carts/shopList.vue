<template>
    <div class="shopping">
        <jd-cart-shop></jd-cart-shop>
    </div>

</template>

<script>
    import shop from "./shop"
    export default {
        name: "cartShopList",
        components:{
            "jd-cart-shop":shop
        }
    }
</script>

<style scoped>

</style>
