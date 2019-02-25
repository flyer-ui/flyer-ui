<script>
let allCityValue=[0,1,2,3]
export default {
    data(){
        return{
            checked:true,
            city:'',
            value:'',
            citys:['东莞'],
            selectedItems:[],
            selecteAll:false,
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
            console.log(value)
        },
        handleChangeGroup(value){
            console.log(value)
        },
        handleSelectAll(value){
            console.log(value)
            this.indeterminate = value
            this.selectedItems = value ? allCityValue : []
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
    <div>{{checked}}</div>
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
    <div>{{city}}</div>
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
    <div>{{`console.log(${value})`}}</div>
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
    <div>citys:{{citys}}</div>
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
    <fly-checkbox  @on-change='handleSelectAll' v-model='selecteAll'>全选</fly-checkbox>
    <fly-checkbox-group v-model='selectedItems'>
        <fly-checkbox v-for='(city,index) in options' :key='index' :label='city.value'>{{city.label}}</fly-checkbox>
    </fly-checkbox-group>
    <div>citys:{{selectedItems}}</div>
</template>
<script>
    let allCityValue=[0,1,2,3]
    export default {
        data(){
            return {
                selectedItems:[],
                selecteAll:false,
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
disabled | Boolean | false  | - | 是否设置为禁用  |
true-label | String / Number | -  | - | 选中时的值  |
false-label  |  String / Number  | -  | -  | 没有选中时的值  |
name  |  String  | -  | -  | 原生 name 属性  |
checked  |  Boolean  | false  | -  | 当前是否勾选
indeterminate | Boolean | - | - | 设置 indeterminate 状态，只负责样式控制 |  

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