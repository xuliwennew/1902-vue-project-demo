<template>
    <ul>
        <jd-cart-shop-product></jd-cart-shop-product>
    </ul>

</template>

<script>
    import product from "./product"
    export default {
        name: "productList",
        components:{
            "jd-cart-shop-product":product
        }
    }
</script>

<style scoped>

</style>
