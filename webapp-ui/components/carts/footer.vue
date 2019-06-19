<template>
    <div class="payment-bar">
        <div class="all-checkbox">
            <input type="checkbox" class="check goods-check" />
            全选
        </div>
        <div class="shop-total">
            <strong>
                总价：
                <i id="AllTotal" class="total">33000</i>
            </strong>
            <span>减免：100</span>
        </div>
        <a href="#" class="settlement">结算</a>
    </div>
</template>

<script>
    export default {
        name: "cartFooter"
    }
</script>

<style scoped>

</style>
