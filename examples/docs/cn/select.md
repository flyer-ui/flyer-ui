<script>
module.exports = {
    data(){
        return {
            selected1:''
        }
    },
    methods:{
        handleChange({value,label}){
            this.$message.info(`value:${value},label:${label}`)
        }
    }
}
</script>

## Select 下拉框

### 基本使用

:::demo
```html
<template>
    <fly-select @on-change='handleChange' v-model='selected1' placeholder='请选择'>
        <fly-option label='深圳' value='SZ'>
        </fly-option>
        <fly-option label='东莞' value='DG'>
        </fly-option>
        <fly-option label='广州' value='GZ'>
        </fly-option>
        <fly-option label='佛山' value='FS'>
        </fly-option>
        <fly-option label='清远' value='QY'>
        </fly-option>
        <fly-option label='河源' value='HY'>
        </fly-option>
    </fly-select>
    {{selected1}}
</template>
<script>
export default {
    data(){
        return {
            selected1:''
        }
    },
    methods:{
        handleChange({value,label}){
            this.$message.info(`value:${value},label:${label}`)
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
    <fly-select disabled placeholder='请选择'>
        <fly-option label='深圳' value='SZ'>
        </fly-option>
        <fly-option label='东莞' value='DG'>
        </fly-option>
        <fly-option label='广州' value='GZ'>
        </fly-option>
        <fly-option label='佛山' value='FS'>
        </fly-option>
        <fly-option label='清远' value='QY'>
        </fly-option>
        <fly-option label='河源' value='HY'>
        </fly-option>
    </fly-select>
</template>
```
:::

### 有禁用选项

::: demo
```html
<template>
    <fly-select  placeholder='请选择'>
        <fly-option label='深圳' value='SZ'>
        </fly-option>
        <fly-option label='东莞' disabled value='DG'>
        </fly-option>
        <fly-option label='广州' disabled value='GZ'>
        </fly-option>
        <fly-option label='佛山' value='FS'>
        </fly-option>
        <fly-option label='清远' value='QY'>
        </fly-option>
        <fly-option label='河源' value='HY'>
        </fly-option>
    </fly-select>
</template>
```
:::


### Select - 可定制属性

属性名称 | 类型 | 默认值  | 可选值  | 说明  |
---------|----------|---------|---------|--------|
value / v-model | String / Number | - | - | 绑定的值 |
disabled | Boolean | false  | true / false | 是否设置为禁用  |
readonly | Boolean | false  | true / false | 是否设置为只读  |
clearable | Boolean | flase | true / false | 是否设置为可清除 |
multiple | Boolean | false | true / false | 是否设置为多选 |
placeholder | String | - | - | 设置占位提示文本 |

### Option - 可定制属性

属性名称 | 类型 | 默认值  | 可选值  | 说明  |
---------|----------|---------|---------|--------|
disabled | Boolean | false  | true / false | 是否设置为禁用  |
label | String/Number | -  | - | 是否设置为只读  |
value | String/Number | - | - | 是否设置为可清除 |


### Select - 可定制事件
事件名称 | 返回值 | 说明
---------|----------|---------
 on-change | 更新后的值[object:{value,label}] | 在点击选项状态变更时触发。