<template>
    <div>
        <el-row>
            <el-tabs @tab-click="handleTabChange"  :tab-position="tabPosition">
                <el-tab-pane label="商品管理">
                    <el-tabs type="border-card">
                        <el-table
                                :data="tableData"
                                border
                                style="width: 100%">
                            <el-table-column
                                    prop="title"
                                    label="商品标题"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="price"
                                    label="价格"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="category"
                                    label="所属分类">
                            </el-table-column>
                            <el-table-column
                                    prop="pic"
                                    label="查看图片">
                                <template slot-scope="scope">

                                    <el-image :src="`http://localhost:3000/${scope.row.pic}`">
                                        <div slot="placeholder" class="image-slot">
                                            加载中<span class="dot">...</span>
                                        </div>
                                    </el-image>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="ad"
                                    label="管理">
                                <template slot-scope="scope">

                                    <el-button
                                            size="mini"
                                            type="danger"
                                            @click="handleDelete(scope.$index, scope.row)">删除
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>

                    </el-tabs>
                </el-tab-pane>
                <el-tab-pane label="添加商品">
                    <el-form
                            :model="productForm"
                            :rules="rules"
                            ref="ruleForm"
                            label-width="100px"
                            class="demo-ruleForm">

                        <el-form-item label="商品标题" prop="title">
                            <el-input v-model="productForm.title"></el-input>
                        </el-form-item>
                        <el-form-item label="商品价格" prop="price">
                            <el-input-number v-model="productForm.price" :min="1" label="价格"></el-input-number>
                        </el-form-item>

                        <el-form-item label="上传商品图片" prop="pic">
                            <el-upload
                                    class="upload-demo"
                                    action="http://localhost:3000/product/upload"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :on-success="handleSuccess"
                                    list-type="picture">
                                <el-button size="small" type="primary">点击上传</el-button>
                                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                            </el-upload>
                        </el-form-item>

                        <el-form-item label="商品分类">
                            <el-cascader v-model="productForm.category" :options="options" clearable></el-cascader>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">添加商品</el-button>
                            <el-button @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
        </el-row>
    </div>
</template>

<script>
    import {encode} from "querystring"
    import categoryApi from "../../apis/categoryApi"
    import productApi from "../../apis/productApi"
    export default {
        data() {
            return {

                productForm: {
                    title: "",
                    price: 0,
                    pic: [],
                    category: []
                },
                rules: {
                    title: [
                        {required: true, message: '请输入商品名称', trigger: 'blur'},
                    ]

                },

                options: [],
                tabPosition: 'left',
                tableData: []
            }
        },
        methods: {
            getLatestProduct(){
                productApi.getProductListByPager(0,10,data=>{
                    console.log(data)
                    this.tableData= data;
                })
            },
            changePage(i) {
                console.log(i)
            },
            submitUpload() {
                this.$refs.upload.submit();
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //a=1&b=2
                        console.log(encode(this.productForm))
                        console.log(this.productForm)
                        productApi.addProduct(encode(this.productForm),(data)=>{
                            alert('保存商品成功了')
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleSuccess(response, file, fileList) {
                console.log(file)
                this.productForm.pic = file.response.picUrl
            },
            handleTabChange(){
                productApi.getProductListByPager(0,10,data=>{
                    console.log(data)
                    this.tableData= data;
                })
            },
            handleDelete(id,data){
                let where = `title=${data.title}`
                productApi.delProductByWhere(where,data=>{
                    this.getLatestProduct()
                })

            }
        },
        created(){
            categoryApi.getCategoryList(data=>{
                console.log(data)
                this.options = data;
            })

            productApi.getProductListByPager(0,10,data=>{
                console.log(data)
                this.tableData= data;
            })


        }
    }
</script>
