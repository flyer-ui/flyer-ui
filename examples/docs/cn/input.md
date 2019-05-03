<script>
module.exports =  {
    data(){
        return {
            value:'',
            value2:'不可输入',
            value3:'',
            value4:''
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
    <fly-input placeholder='请输入内容' :max-length='10' :min-length='5' v-model='value4'></fly-input>
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

### 带 icon 图标的输入框
::: demo
```html
<template>
    <div class='fly-demo-block__row'>
        <label class='fly-demo-block__label'>属性方式：</label>
        <fly-input type='text' prefix-icon='fly-icon-search'></fly-input>
        <fly-input type='text' suffix-icon='fly-icon-edit-3'></fly-input>
    </div>
    <div class='fly-demo-block__row'>
        <label class='fly-demo-block__label'>Slot方式：</label>
        <fly-input type='text'>
            <fly-icon slot='prefix' name='search'></fly-icon>
        </fly-input>
        <fly-input type='text'>
            <fly-icon slot='suffix' name='edit-3'></fly-icon>
        </fly-input>
    </div>
</template>
```
:::

### 复合型输入框
::: demo
```html
<template>
    <div class='fly-demo-block__row'>
        <fly-input>
            <span slot='prepend'>http://</span>
        </fly-input>
        <fly-input>
            <span slot='append'>.com</span>
        </fly-input>
    </div>
    <div class='fly-demo-block__row'>
        <fly-input>
            <span slot='prepend'><fly-checkbox label='选中'>选中</fly-checkbox></span>
        </fly-input>
        <fly-input>
            <span slot='append'><fly-icon name='calendar'></fly-icon></span>
        </fly-input>
        
    </div>
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

### Input - 可定制属性

属性名称 | 类型 | 默认值  | 可选值  | 说明  |
---------|----------|---------|---------|--------|
value / v-model | String / Number | - | - | 绑定的值 |
type | String | - | text | 原生 input 的 type 值 |
disabled | Boolean | false  | true / false | 是否设置为禁用  |
readonly | Boolean | false  | true / false | 是否设置为只读  |
clearable | Boolean | flase | true / false | 是否设置为可清除 |
max-length | Number | - | - | 最大输入长度限制 |
min-length | Number | - | - | 最小输入长度限制 |
prefix-icon | String | - | - | 输入框头部图标 |
suffix-icon | String | - | - | 输入框尾部图标 |
placeholder | String | - | - | 输入框占位文本 |

### Input - 可定制的事件

事件名称 | 返回值 | 说明
---------|----------|---------
on-blur | (event: Event) | 在 Input 失去焦点时触发 |
on-focus | (event: Event) | 在 Input 获得焦点时触发 |
on-change | (value: string / number) | 在 Input 值改变时触发 |
on-clear | - | 在点击由 clearable 属性生成的清空按钮时触发 |

### Input - Slot

事件名称 | 说明
---------|----------|
prefix | 输入框头部内容，只对 type="text" 有效 |
suffix | 输入框尾部内容，只对 type="text" 有效 |
prepend | 输入框前置内容，只对 type="text" 有效 |
append | 输入框后置内容，只对 type="text" 有效 |

### Select - 可定制方法
方法名 | 说明 | 参数
---------|----------|---------
 focus | 使 input 获取焦点 | -
 blur | 使 input 失去焦点 | -