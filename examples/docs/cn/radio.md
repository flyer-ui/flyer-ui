<script>
module.exports = {
    data(){
        return{
            value:'',
            value2:'2',
            value3:'',
            value4:'',
            selectedValue:'',
            selectedGroupValue:''
        }
    },
    methods:{
        handleChange(value){
            console.log(value)
            this.selectedValue = value
        },
        handleChangeGroup(value){
            console.log(value)
            this.selectedGroupValue = value
        }
    }
}
</script>

## Radio 单选框

### 基础用例

::: demo
```html
<template>
    <fly-radio name='demo' v-model='value' label='1'>单选框1</fly-radio>
    <fly-radio name='demo' v-model='value' label='2'>单选框2</fly-radio>
    <div>
    value:{{value}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            value:''
        }
    }
}
</script>
```
:::

### 禁用状态用例

::: demo
```html
<template>
    <fly-radio name='demo' label='1' v-model='value2' disabled>禁用状态</fly-radio>
    <fly-radio name='demo' label='2' v-model='value2' disabled>禁用状态</fly-radio>
</template>
<script>
export default {
    data(){
        return {
            value2:'2'
        }
    }
}
</script>
```
:::

### 点击变更选项状态事件

::: demo
```html
<template>
    <fly-radio name='demo' @on-change='handleChange' v-model='value4' label='单选框1'>单选框1</fly-radio>
    <fly-radio name='demo' @on-change='handleChange' v-model='value4' label='单选框2'>单选框2</fly-radio>
    <div>
        {{`console.log(${selectedValue})`}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            value5:''
            selectedValue:''
        }
    },
    methods:{
        handleChange(value){
            this.selectedValue = value
        }
    }
}
</script>
```
:::

### Radio 选项组

::: demo
```html
<template>
    <fly-radio-group v-model='value3' @on-change='handleChangeGroup'>
        <fly-radio label='A'>
            北京
        </fly-radio>
        <fly-radio label='B'>
            深圳
        </fly-radio>
        <fly-radio label='C'>
            东莞
        </fly-radio>
        <fly-radio label='D'>
            杭州
        </fly-radio>
    </fly-radio-group>
    <div>
        value3:{{value3}}
    </div>
     <div>
        {{`console.log(${selectedGroupValue})`}}
    </div>
</template>
<script>
export default {
    data(){
        return {
            value3:'',
            selectedGroupValue:''
        }
    },
    methods:{
        handleChangeGroup(value){
            console.log(value)
            this.selectedGroupValue = value
        }
    }
}
</script>
```
:::


### 单选框 - 可定制属性

属性名称 | 类型 | 默认值  | 可选值  | 说明  |
---------|----------|---------|---------|--------|
value / v-model | String / Number / Boolean | - | - | 绑定的值
label | String / Number / Boolean  | - | - | 选中状态的值  |
disabled | Boolean | false  | true / false | 是否设置为禁用  |
name  |  String  | -  | -  | 原生 name 属性  |

### 单选框 - 可定制的事件

事件名称 | 返回值 | 说明
---------|----------|---------
 on-change | 更新后的值 | 在点击选项状态变更时触发。

 ### 单选框组 - 可定制属性

属性名称 | 类型 | 默认值  | 可选值  | 说明  |
---------|----------|---------|---------|--------|
value / v-model | String / Boolean / Number | - | - | 绑定的值

 ### 单选框组 - 可定制事件

事件名称 | 返回值 | 说明
---------|----------|---------
 on-change | 更新后的值 | 在点击选项状态变更时触发。