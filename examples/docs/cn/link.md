## Link 超链接

### 基本使用

::: demo
```html
<template>
    <fly-link>Default</fly-link>
    <fly-link type="primary">主要链接</fly-link>
    <fly-link type="warning">警告链接</fly-link>
    <fly-link type="danger">危险链接</fly-link>
    <fly-link type="success">成功链接</fly-link>
    <fly-link href='https://www.baidu.com' target='_blank' type="info">信息链接</fly-link>
</template>
```
:::

### Link 可定制属性

| 属性名称 | 类型    | 默认值 | 可选值       | 说明                                              |
| -------- | ------- | ------ | ------------ | ------------------------------------------------- |
| href  | String  | -      | -            | 超链接指向地址                                        |