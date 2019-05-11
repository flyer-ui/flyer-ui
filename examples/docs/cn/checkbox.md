<script>
let allCityValue=[0,1,2,3]
module.exports = {
    data(){
        return{
            checked:true,
            checked1:true,
            city:'',
            value:'',
            citys:['东莞'],
            selectedItems:[],
            selectAll:false,
            indeterminate:false,
            options:[{
                    label:'北京',
                    value:0
                },{
                    label:'深圳',
                    value:1
                },{
                    label:'东莞',
                    value:2
                },{
                    label:'杭州',
                    value:3
                }]
        }
    },
    methods:{
        handleChange(value){
            console.log('handleChange',value)
        },
        handleChangeGroup(value){
            console.log('handleChangeGroup',value)
        },
        handleSelectAll(value){
            console.log('handleSelectAll',value)
            this.indeterminate = value
            this.selectedItems = value ? allCityValue : []
            this.indeterminate = false
        },
        handleChangeCheckboxGroup(values){
            this.selectAll = values.length === this.options.length && values.length > 0
            this.indeterminate = values.length > 0 && values.length < this.options.length
            console.log('selectAll',this.selectAll)
            console.log('indeteminate',this.indeterminate)
        },
        handleChecked(){
            this.checked1 = !this.checked1
        }
    }
}
</script>

## Checkbox 多选框

### 基础用例
::: demo
```html
<template>
    <fly-checkbox v-model='checked' name='checked'>
        是否选中
    </fly-checkbox>
</template>
<script>
    export default {
        data(){
            return {
                checked:true
            }
        }
    }
</script>
```
:::

### 代码控制是否选中
::: demo
```html
<template>
    <fly-checkbox v-model='checked1' name='checked1'>
        是否选中
    </fly-checkbox>
    <fly-button @on-click='handleChecked'>控制</fly-button>
</template>
<script>
    export default {
        data(){
            return {
                checked1:true
            }
        },
        methods:{
            handleChecked(){
                this.checked1 = !this.checked1
            }
        }
    }
</script>
```
:::

### 禁用状态
::: demo 
```html
<template>
    <fly-checkbox disabled>禁用状态</fly-checkbox>
    <fly-checkbox checked disabled>已选禁用状态</fly-checkbox>
</template>
```
:::

### 绑定复选框值
::: demo
```html
<template>
    <fly-checkbox v-model='city' true-value='深圳' false-value=''>深圳</fly-checkbox>
</template>
<script>
    export default {
        data(){
            return {
                city:''
            }
        }
    }
</script>
```
:::

### 点击变更选项状态事件
::: demo
``` html
<template>
    <fly-checkbox v-model='value' @on-change='handleChange' true-value='东莞' false-value=''>东莞</fly-checkbox>
</template>
<script>
    export default {
        data(){
            return {
                value:''
            }
        },
        methods:{
            handleChange(value){
                console.log(value)
            }
        }
    }
</script>
```
:::

### 复选框组
::: demo
```html
<template>
    <fly-checkbox-group v-model='citys' @on-change='handleChangeGroup'>
        <fly-checkbox label='北京'>北京</fly-checkbox>
        <fly-checkbox label='深圳' checked>深圳</fly-checkbox>
        <fly-checkbox label='东莞'>东莞</fly-checkbox>
        <fly-checkbox label='上海' disabled checked>上海</fly-checkbox>
        <fly-checkbox label='杭州' disabled>杭州</fly-checkbox>
    </fly-checkbox-group>
</template>
<script>
    export default {
        data(){
            return {
                citys:[]
            }
        },
        methods:{
            handleChangeGroup(newValue){
                console.log(newValue)
            }
        }
    }
</script>
```
:::

### 复选框组 indeterminate 状态
::: demo
```html
<template>
    <fly-checkbox :indeterminate='indeterminate' @on-change='handleSelectAll' v-model='selectAll'>全选</fly-checkbox>
    <fly-checkbox-group v-model='selectedItems' @on-change='handleChangeCheckboxGroup'>
        <fly-checkbox v-for='(city,index) in options' :key='index' :label='city.value'>{{city.label}}</fly-checkbox>
    </fly-checkbox-group>
</template>
<script>
    let allCityValue=[0,1,2,3]
    export default {
        data(){
            return {
                selectedItems:[],
                selectAll:false,
                indeterminate:false,
                options:[{
                    label:'北京',
                    value:0
                },{
                    label:'深圳',
                    value:1
                },{
                    label:'东莞',
                    value:2
                },{
                    label:'杭州',
                    value:3
                }]
            }
        },
        methods:{
            handleChangeGroup(newValue){
                console.log(newValue)
            }，
            handleSelectAll(newValue){
                this.indeterminate = newValue
                this.selectedItems = allCityValue
                this.selectAll = true
            },
            handleChangeCheckboxGroup(values){
                this.selectAll = values.length === this.options.length && values.length > 0
                this.indeterminate = values.length > 0 && values.length < this.options.length
            }
        }
    }
</script>
```
:::

### 复选框 - 可定制属性

属性名称 | 类型 | 默认值  | 可选值  | 说明  |
---------|----------|---------|---------|--------|
value / v-model | String / Number / Boolean | - | - | 绑定的值
label | String / Number / Boolean  | - | - | 选中状态的值（只有在checkbox-group 或者绑定对象类型为数组时有效）  |
disabled | Boolean | false  | true / false | 是否设置为禁用  |
true-label | String / Number | -  | - | 选中时的值  |
false-label  |  String / Number  | -  | -  | 没有选中时的值  |
name  |  String  | -  | -  | 原生 name 属性  |
checked  |  Boolean  | false  | true / false | 当前是否勾选(只有在单独使用checkbox时有效)
indeterminate | Boolean | false | true / false | 设置 indeterminate 状态，只负责样式控制 |  

### 复选框 - 可定制的事件

事件名称 | 返回值 | 说明
---------|----------|---------
 on-change | 更新后的值 | 在点击选项状态变更时触发。

 ### 复选框组 - 可定制属性

属性名称 | 类型 | 默认值  | 可选值  | 说明  |
---------|----------|---------|---------|--------|
value / v-model | Array | - | - | 绑定的值

 ### 复选框组 - 可定制事件

事件名称 | 返回值 | 说明
---------|----------|---------
 on-change | [...] | 在点击选项状态变更时触发。