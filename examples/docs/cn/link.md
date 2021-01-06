<script>
    module.exports = {
        methods:{
            handleClick(){
               console.log('click')
            }
        }
    }
</script>

## Link 超链接

### 基本使用

::: demo
```html
<template>
    <fly-link>Default</fly-link>
    <fly-link type="primary">主要链接</fly-link>
    <fly-link type="warning">警告链接</fly-link>
    <fly-link disabled type="danger">危险链接</fly-link>
    <fly-link @click='handleClick' type="success">成功链接</fly-link>
    <fly-link href='https://www.baidu.com' target='_blank' type="info">信息链接</fly-link>
</template>
```
:::

### 带下划线

::: demo
```html
<template>
    <fly-link underline>Default</fly-link>
    <fly-link type="primary" underline>主要链接</fly-link>
    <fly-link type="warning" underline>警告链接</fly-link>
    <fly-link disabled type="danger" underline>危险链接</fly-link>
    <fly-link @click='handleClick' type="success" underline>成功链接</fly-link>
    <fly-link href='https://www.baidu.com' underline target='_blank' type="info">信息链接</fly-link>
</template>
```
:::

### Link 可定制属性

| 属性名称 | 类型    | 默认值 | 可选值       | 说明                                              |
| -------- | ------- | ------ | ------------ | ------------------------------------------------- |
| href  | String  | -      | -            | 超链接指向地址                                        |
| disabled  | Boolean  | false     | true/false           | 是否禁用，只支持样式区别                           |
| underline  | Boolean  | false      | true/false           | 是否带有下划线                         |

### Menu - 可定制的事件

| 事件名称  | 返回值                   | 说明                                        |
| --------- | ------------------------ | ------------------------------------------- |
| click   | (index,Event)           | 点击时触发                     |