<script>
export default {
    data(){
        return {
            value:'',
            value2:'不可输入',
            value3:''
        }
    }
}
</script>

## Input 输入框

### 基础用例
::: demo
```html
<template>
    <fly-input placeholder='请输入内容' v-model='value'></fly-input>
    <div>value:{{value}}</div>
</template>
<script>
    export default{
        data(){
            return {
                value:''
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
    <fly-input placeholder='请输入内容' disabled v-model='value2'></fly-input>
    <div>value2:{{value2}}</div>
</template>
<script>
    export default{
        data(){
            return {
                value2:'不可输入'
            }
        }
    }
</script>
```
:::

### 可清除的输入框
::: demo
```html
<template>
    <fly-input placeholder='请输入内容' clearable v-model='value3'></fly-input>
    <div>value3:{{value3}}</div>
</template>
<script>
    export default{
        data(){
            return {
                value3:'不可输入'
            }
        }
    }
</script>
```
:::

### 输入限制
::: demo
```html
<template>
    <fly-input placeholder='请输入内容' max-length='10' min-length='5' v-model='value4'></fly-input>
    <div>value4:{{value4}}</div>
</template>
<script>
    export default{
        data(){
            return {
                value4:'不可输入'
            }
        }
    }
</script>
```
:::

### Input - 可定制属性

属性名称 | 类型 | 默认值  | 可选值  | 说明  |
---------|----------|---------|---------|--------|
value / v-model | String / Number | - | - | 绑定的值 |
type | String | - | text | 原生 input 的 type 值 |
label | String / Number / Boolean  | - | - | 选中状态的值（只有在checkbox-group 或者绑定对象类型为数组时有效）  |
disabled | Boolean | false  | true / false | 是否设置为禁用  |
clearable | Boolean | flase | true / false | 是否设置为可清除 |
max-length | Number | - | - | 最大输入长度限制 |
min-length | Number | - | - | 最小输入长度限制 |

### Input - 可定制的事件

事件名称 | 返回值 | 说明
---------|----------|---------
on-blur | (event: Event) | 在 Input 失去焦点时触发 |
on-focus | (event: Event) | 在 Input 获得焦点时触发 |
on-change | (value: string / number) | 在 Input 值改变时触发 |
on-clear | - | 在点击由 clearable 属性生成的清空按钮时触发 |