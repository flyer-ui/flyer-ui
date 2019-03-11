## Alert 警告提示框

### 基本使用

::: demo
```html
<template>
    <div class='fly-demo-block__row'>
        <fly-alert type='success' title='这是一个成功的提示.'></fly-alert>
    </div>
    <div class='fly-demo-block__row'>
        <fly-alert type='warning' title='这是一个警告的提示.'></fly-alert>
    </div>
    <div class='fly-demo-block__row'>
        <fly-alert type='info' title='这是一个简单的信息提示.'></fly-alert>
    </div>
    <div class='fly-demo-block__row'>
        <fly-alert type='danger' title='这是一个简单的危险提示.'></fly-alert>
    </div>
</template>
```
:::

### 自定义是否可关闭

::: demo
```html
<template>
    <div class='fly-demo-block__row'>
        <fly-alert type='success' closable title='这是一个成功的提示.'></fly-alert>
    </div>
    <div class='fly-demo-block__row'>
        <fly-alert type='warning' closable title='这是一个警告的提示.'></fly-alert>
    </div>
    <div class='fly-demo-block__row'>
        <fly-alert type='info' closable title='这是一个简单的信息提示.'></fly-alert>
    </div>
    <div class='fly-demo-block__row'>
        <fly-alert type='danger' closable title='这是一个简单的危险提示.'></fly-alert>
    </div>
</template>
```
:::

### 自定义标题 - Slot

::: demo
```html
<template>
    <div class='fly-demo-block__row'>
        <fly-alert type='success' closable>
            <div slot='title'>这是一个成功的提示.</div>
        </fly-alert>
    </div>
</template>
```
:::

### Alert - 可定制属性

属性名称 | 类型 | 默认值  | 可选值  | 说明  |
---------|----------|---------|---------|--------|
type | String | success | success / warning / info / danger | 原生 input 的 type 值 |
closable | Boolean | flase | true / false | 是否设置为可关闭 |
title | String | - | - | 提示的标题 |

### Input - Slot

事件名称 | 说明
---------|----------|
title | 自定义title内容的slot |