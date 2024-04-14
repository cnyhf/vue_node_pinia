<template>
    <div>
        <el-page-header 
            content="添加产品" 
            icon="" 
            title="产品管理"
        />
        <el-form
            ref="productsFormRef"
            :model="productsForm"
            :rules="productsFormRules"
            label-width="80px"
            class="demo-ruleForm"
        >
            <el-form-item 
                label="产品名称" 
                prop="title"
            >
                <el-input v-model="productsForm.title" />
            </el-form-item>
            <el-form-item 
                label="产品简要描述" 
                prop="introduction"
            >
                <el-input 
                    v-model="productsForm.introduction"
                    type="textarea"
                />
            </el-form-item>
            <el-form-item 
                label="产品详细描述" 
                prop="detail"
            >
                <el-input 
                    v-model="productsForm.detail"
                    type="textarea"
                />
            </el-form-item>
            <el-form-item 
                label="产品图片" 
                prop="cover"
            >
            <Upload :avatar="productsForm.cover"
                @ztchange="handleUploadChange" />
            </el-form-item>
            <el-form-item>
                <el-button 
                    type="primary" 
                    @click="submitForm()"
                >添加产品</el-button>
            
            </el-form-item>
        </el-form>
    </div>
</template>
<script setup>
import { ref,reactive } from "vue";
import Upload from '@/components/upload/Upload'
import upload from "@/util/upload";
import {useRouter} from 'vue-router'
const router = useRouter()
const productsFormRef = ref()
const productsForm  = reactive({
    title:"",
    introduction:"",
    detail:"",
    cover:"",
    file:null,
})
const productsFormRules  = reactive({
    title:[{
        required:true,
        message:"请输入产品名称",
        trigger:"blur"
    }],
    introduction:[{
        required:true,
        message:"请输入产品简要描述",
        trigger:"blur"
    }],
    detail:[{
        required:true,
        message:"请选择产品详细描述",
        trigger:"blur"
    }],
    cover:[{
        required:true,
        message:"请上传产品图片",
        trigger:"blur"
    }],
})

const handleUploadChange = (file)=>{
    //本地回显用的,生成blob这样一个二进制的地址
    productsForm.cover = URL.createObjectURL(file)
    //提交给后端的
    productsForm.file = file
}
const submitForm = ()=>{
    productsFormRef.value.validate(async(valid)=>{
        if(valid){
            // console.log(productsForm)
            //后台通信
            await upload("/adminapi/products/add",productsForm)
            router.push(`/product-manage/productlist`)
        }
    })
}
</script>
<style lang="scss" scoped>                                                                                                                                                       
.el-form{
    margin-top: 50px;
}
</style>