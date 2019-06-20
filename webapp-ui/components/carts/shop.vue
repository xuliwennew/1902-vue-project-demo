<template>
   <div class="shop-group-item">
      <div class="shop-name">
         <input type="checkbox"
                v-model="data.checked"
                @change="shopCheck(sid)"
                class="check goods-check shopCheck">
         <h4>
            <a href="#">{{data.shopName}}</a>
         </h4>
         <div class="coupons">
            <span>领券</span>
            <em>|</em>
            <span>编辑</span>
         </div>
      </div>
      <jd-cart-shop-product-list @del="del" @add="add" @minus="minus" @pCheck="singleCheck" :sid="sid" :data="data.products"></jd-cart-shop-product-list>
      <div class="shopPrice">
         本店总计：
         ￥<span class="shop-total-amount ShopTotal">{{data|counter}}</span>
      </div>
   </div>

</template>

<script>
    import productList from "./productList"
    export default {
        name: "shop",
        components:{
            "jd-cart-shop-product-list":productList
        },
        props:["data","sid"],
        methods:{
            shopCheck(sid){
                console.log("shop scheck")
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
        },
        filters:{
            counter(shop){
                let total=0;
                shop.products.forEach((product,pid)=>{
                    if(product.checked){
                        total+= product.price*product.num
                    }
                })
                return total
            }
        }
    }
</script>

<style scoped>

</style>
