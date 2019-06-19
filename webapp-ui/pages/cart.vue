<template>
     <div>
         <jd-cart-header></jd-cart-header>
         <jd-cart-shop-list></jd-cart-shop-list>
         <jd-cart-footer></jd-cart-footer>
     </div>
</template>

<script>
    import footer from "../components/carts/footer"
    import header from "../components/carts/header"
    import shopList from "../components/carts/shopList"
    export default {
        name: "cart",
        components:{
            "jd-cart-header":header,
            "jd-cart-footer":footer,
            "jd-cart-shop-list":shopList
        }
    }
</script>

<style scoped>
  @import "../assets/carts.css";
</style>
