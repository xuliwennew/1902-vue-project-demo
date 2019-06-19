<template>
   <div class="shop-group-item">
      <div class="shop-name">
         <input type="checkbox"
                class="check goods-check shopCheck">
         <h4>
            <a href="#">苹果专卖店</a>
         </h4>
         <div class="coupons">
            <span>领券</span>
            <em>|</em>
            <span>编辑</span>
         </div>
      </div>
      <jd-cart-shop-product-list></jd-cart-shop-product-list>
      <div class="shopPrice">
         本店总计：
         ￥<span class="shop-total-amount ShopTotal">16000</span>
      </div>
   </div>

</template>

<script>
    import productList from "./productList"
    export default {
        name: "shop",
        components:{
            "jd-cart-shop-product-list":productList
        }
    }
</script>

<style scoped>

</style>
