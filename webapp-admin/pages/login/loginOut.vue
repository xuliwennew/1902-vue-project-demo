<template>
    <button @click="loginOut">退出登录</button>
</template>

<script>
    import userApi from "../../apis/userApi"
    export default {
        name: "loginOut",
        methods:{
            loginOut(){
               this.$emit("out")
            }
        }
    }
</script>

<style scoped>

</style>
