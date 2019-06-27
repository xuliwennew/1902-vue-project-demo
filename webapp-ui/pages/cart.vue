<template>
     <div>
         <jd-cart-header></jd-cart-header>
         <jd-cart-shop-list
                 @del="del"
                 @add="addNum"
                 @minus="minusNum"
                 @pCheck="singleCheckeAll"
                 @sCheck="shopCheckAll"
                 v-if="cartInfo.shops"
                 :data="cartInfo.shops"></jd-cart-shop-list>
         <jd-cart-footer
                 @aCheck="cartCheckAll"
                 :data="cartInfo"></jd-cart-footer>
     </div>
</template>

<script>
    import footer from "../components/carts/footer"
    import header from "../components/carts/header"
    import shopList from "../components/carts/shopList"
    import {mapGetters} from "vuex"

    export default {
        name: "cart",
        components:{
            "jd-cart-header":header,
            "jd-cart-footer":footer,
            "jd-cart-shop-list":shopList
        },
        created(){
           this._initPageData()
        },
        data(){
          return {

          }
        },
        computed:{
            ...mapGetters({
                cartInfo:"GETCART"
            })
        },
        methods:{

            /**
             * 获取页面的数据[xxx]
             * @private
             */
            _initPageData(){

                //从store中获取cartInfo
                this.$store.dispatch("INIT")
                // cartApi.getCartInfo(data=>{
                //     console.log(data)
                //     this.cartInfo = data;
                // })
            },

            shopCheckAll(sid){
                console.log(sid)
                let isChecked= this.cartInfo.shops[sid].checked;
                this.cartInfo.shops[sid].products.forEach((product,pid)=>{
                    product.checked= isChecked
                })

                this.cartInfo.checked = isChecked
            },

            /**
             * 只要有一个是false,全是false
             * @param sid
             */
            singleCheckeAll(sid){
               let isChecked = this.cartInfo.shops.every((shop,sid,arr)=>{

                    let checked = shop.products.every((product,pid,arr)=>{
                        return product.checked == true
                    })

                   shop.checked = checked
                   return checked
               })
                this.cartInfo.checked = isChecked

            },

            cartCheckAll(){
                let isChecked = this.cartInfo.checked;
                this.cartInfo.shops.forEach((shop,sid)=>{
                    shop.checked = isChecked;
                    shop.products.forEach((product,pid)=>{
                        product.checked =isChecked
                    })
                })
            },

            addNum(sid,pid){
                this.cartInfo.shops[sid].products[pid].num++
            },

            minusNum(sid,pid){

                if(this.cartInfo.shops[sid].products[pid].num <=1){
                    this.cartInfo.shops[sid].products[pid].num =1
                }else{
                    this.cartInfo.shops[sid].products[pid].num--
                }

            },
            del(sid,pid){
               this.cartInfo.shops[sid].products.splice(pid,1)
               if(this.cartInfo.shops[sid].products.length ==0){
                  this.cartInfo.shops.splice(sid,1)
               }
            }
        }
    }
</script>

<style scoped>
  @import "../assets/carts.css";
</style>
