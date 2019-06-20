<template>
    <div class="payment-bar">
        <div class="all-checkbox">
            <input type="checkbox" @change="cartCheck" v-model="data.checked" class="check goods-check" />
            全选
        </div>
        <div class="shop-total">
            <strong>
                总价：
                <i id="AllTotal" class="total">{{data|counter}}</i>
            </strong>
            <span>减免：100</span>
        </div>
        <a href="#" class="settlement">结算</a>
    </div>
</template>

<script>
    export default {
        name: "cartFooter",
        props:["data"],
        filters:{
            counter(cartInfo){
                let total=0
                if(cartInfo.shops){
                    cartInfo.shops.forEach((shop,sid)=>{
                        shop.products.forEach((product,pid)=>{
                            if(product.checked){
                                //选中商品的价格
                                total +=product.price * product.num
                            }
                        })
                    })
                }

                return total
            }
        },
        methods:{
            cartCheck(){
                this.$emit("aCheck")
            }
        }
    }
</script>

<style scoped>

</style>
