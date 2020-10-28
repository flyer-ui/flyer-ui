<script>
module.exports = {
    data(){
        return {
            userInfo:{
                name:'',
                address:'',
            },
            rules:{
                name:[
                    {
                        required:true,
                        message:'请输入姓名',
                        trigger:'blur'
                    }
                ],
                address:[
                    {
                        required:true,
                        message:'请输入地址',
                        trigger:'blur'
                    }
                ]
            }
        }
    },
    methods:{
        submit(){
            this.$refs.form.validate((valid)=>{
                // debugger
                console.log(valid)
            })
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
        <fly-form-item label='姓名：' prop='name'>
            <fly-input v-model='userInfo.name'/>
        </fly-form-item>
        <fly-form-item label='地址：' prop='address'>
            <fly-input v-model='userInfo.address'/>
        </fly-form-item>
        <fly-form-item>
            <fly-button type='primary' @click='submit'>提交</fly-button>
        </fly-form-item>
    </fly-form>
</template>
```
```JS
export default {
    data(){
        return {
            userInfo:{
                name:'',
                address:'',
            },
            rules:{
                name:[
                    {
                        required:true,
                        message:'请输入姓名',
                        trigger:'blur'
                    }
                ],
                address:[
                    {
                        required:true,
                        message:'请输入地址',
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
        }
    }
}
```
:::