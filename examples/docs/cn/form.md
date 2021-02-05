<script>
module.exports = {
    data(){
        return {
            userInfo:{
                account:'',
                password:''
            },
            rules:{
                account:[
                    {
                        required:true,
                        message:'请输入登录账号',
                        trigger:'blur'
                    },
                    {
                        validator(rule,value,callback){
                            if(value.match(/^1[3456789]\d{11}$/)){
                                callback()
                            }else{
                                callback(new Error('账号必须是一个正确的手机号码'))
                            }
                        },
                        trigger:'blur'
                    }
                ],
                password:[
                    {
                        required:true,
                        message:'请输入登录密码',
                        trigger:'blur'
                    }
                ]
            },
            userInfo1:{
                name:'',
                sex:'',
                address:'',
            },
            rules1:{
                name:[
                    {
                        required:true,
                        message:'请输入姓名',
                        trigger:'blur'
                    },
                    {
                        validator(rule,value,callback){
                            if(value.length<6){
                                callback(new Error('姓名的长度不能小于6'))
                            }else{
                                callback()
                            }
                        }
                    }
                ],
                address:[
                    {
                        required:true,
                        message:'请输入地址',
                        trigger:'blur'
                    }
                ],
                sex:[
                    {
                        required:true,
                        message:'请选择一个性别',
                        trigger:'blur'
                    }
                ]
            }
        }
    },
    methods:{
        submit(){
            this.$refs.form.validate((valid)=>{
                console.log(valid)
            })
        },
        submit1(){
            this.$refs.form1.validate((valid)=>{
                console.log(valid)
            })
        },
        reset(){
            this.$refs.form.resetForm()
        },
        reset1(){
            this.$refs.form1.resetForm()
        }
    }
}
</script>
## Form 表格验证

### 基本使用

::: demo
```html
<template>
    <fly-form v-model='userInfo' :rules="rules" ref='form'>
        <fly-form-item label='账号：' prop='account'>
            <fly-input v-model='userInfo.account'/>
        </fly-form-item>
        <fly-form-item label='密码：' prop='password'>
            <fly-input type='password' v-model='userInfo.password'/>
        </fly-form-item>
        <fly-form-item>
            <fly-button type='primary' @click='submit'>提交</fly-button>
            <fly-button type='default' @click='reset'>重置</fly-button>
        </fly-form-item>
    </fly-form>
</template>
```
```JS
export default {
    data(){
        return {
            userInfo:{
                account:'',
                password:''
            },
            rules:{
                account:[
                    {
                        required:true,
                        message:'请输入登录账号',
                        trigger:'blur'
                    },
                    {
                        validator(rule,value,callback){
                            if(/^1[3456789]\d{9}$/.test(str)){
                                callback()
                            }else{
                                new Error('账号必须是一个正确的手机号码')
                            }
                        },
                        trigger:'blur'
                    }
                ],
                password:[
                    {
                        required:true,
                        message:'请输入登录密码',
                        trigger:'blur'
                    }
                ]
            }
        }
    },
    methods:{
        submit(){
            this.$refs.form.validate((valid)=>{
                console.log(valid)
            })
        },
        reset(){
            this.$refs.form.resetForm()
        }
    }
}
```
:::

### 自定义表单验证
:::demo
```html
<template>
    <fly-form v-model='userInfo1' :rules="rules1" ref='form1'>
        <fly-form-item label='姓名：' prop='name'>
            <fly-input v-model='userInfo1.name'/>
        </fly-form-item>
        <fly-form-item label='性别：' prop='sex'>
            <fly-radio v-model='userInfo1.sex' label='1'>男</fly-radio>
            <fly-radio v-model='userInfo1.sex' label='0'>女</fly-radio>
        </fly-form-item>
        <fly-form-item>
            <fly-button type='primary' @click='submit1'>提交</fly-button>
            <fly-button type='default' @click='reset1'>重置</fly-button>
        </fly-form-item>
    </fly-form>
</template>
```
```JS
export default {
    data(){
        return {
            userInfo1:{
                name:'',
                sex:'',
                address:'',
            },
            rules1:{
                name:[
                    {
                        required:true,
                        message:'请输入姓名',
                        trigger:'blur'
                    },
                    {
                        validator(rule,value,callback){
                            if(value.length<6){
                                callback(new Error('姓名的长度不能小于6'))
                            }else{
                                callback()
                            }
                        }
                    }
                ],
                address:[
                    {
                        required:true,
                        message:'请输入地址',
                        trigger:'blur'
                    }
                ],
                sex:[
                    {
                        required:true,
                        message:'请选择一个性别',
                        trigger:'blur'
                    }
                ]
            }
        }
    },
    methods:{
        submit1(){
            this.$refs.form1.validate((valid)=>{
                console.log(valid)
            })
        },
        reset1(){
            this.$refs.form.resetForm()
        }
    }
}
```
:::
### 

### 表单 - 可定制属性

| 属性名称        | 类型                      | 默认值 | 可选值       | 说明                                                               |
| --------------- | ------------------------- | ------ | ------------ | ------------------------------------------------------------------ |
| value / v-model | Object | -      | -            | 表单的数据对象                                                         |
| rules           | Object | -      | -            | 表单验证规则 |

### 表单 - 可定制的方法

| 方法名称  | 返回值     | 说明                       |
| --------- | ---------- | -------------------------- |
| validate | - | 整个表单进行验证的调用方法，参数为一个回调函数。该函数在验证结束后被调用，并给该函数传入一个Boolean类型的值。验证成功为true，验证失败为false。|
