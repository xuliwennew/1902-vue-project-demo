<template>
    <el-row style="margin-top: 100px; background-color: lightblue">
        <el-col :offset="8" :span="8">
            <div style="margin: 20px;"></div>
            <el-form label-position="right" label-width="80px" ref="LoginForm" :model="LoginForm">
                <el-form-item label="用户名">
                    <el-input v-model="LoginForm.name"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="LoginForm.pass"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('LoginForm')">用户登录</el-button>

                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>


<script>
    import userApi from "../../apis/userApi"
    export default {
        name:"login",
        data(){
            return {
                LoginForm:{
                    name:"",
                    pass:""
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let users= `name=${this.LoginForm.name}&pass=${this.LoginForm.pass}`

                        userApi.checkUser(users,data=>{
                            if(data.user){
                                this.$router.push("/list")
                            }else{
                                alert(data.error)
                            }
                        })


                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>


<style scoped>

</style>
