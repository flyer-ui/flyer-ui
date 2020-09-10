# 栅格

## 基本使用

::: demo

```html
<template>
  <fly-row class="bg-row">
    <fly-col class="bg-col-first"></fly-col>
  </fly-row>
  <fly-row class="bg-row">
    <fly-col :span="4">
      <div class="bg-col-first"></div>
    </fly-col>
    <fly-col :span="4">
      <div class="bg-col-second"></div>
    </fly-col>
    <fly-col :span="4">
      <div class="bg-col-first"></div>
    </fly-col>
    <fly-col :span="4">
      <div class="bg-col-second"></div>
    </fly-col>
    <fly-col :span="4">
      <div class="bg-col-first"></div>
    </fly-col>
    <fly-col :span="4">
      <div class="bg-col-second"></div>
    </fly-col>
  </fly-row>
  <fly-row class="bg-row">
    <fly-col :span="8">
      <div class="bg-col-first"></div>
    </fly-col>
    <fly-col :span="8">
      <div class="bg-col-second"></div>
    </fly-col>
    <fly-col :span="8">
      <div class="bg-col-first"></div>
    </fly-col>
  </fly-row>
  <fly-row class="bg-row">
    <fly-col :span="12">
      <div class="bg-col-first"></div>
    </fly-col>
    <fly-col :span="12">
      <div class="bg-col-second"></div>
    </fly-col>
  </fly-row>
</template>
<style scoped>
  .bg-row {
    background: #fafafa;
    margin-bottom: 10px;
  }
  .bg-col-first {
    background: #526069;
    border-radius: 2px;
    line-height: 32px;
    height: 32px;
  }
  .bg-col-second {
    background: #a3afb7;
    border-radius: 2px;
    line-height: 32px;
    height: 32px;
  }
</style>
```

:::

## 分栏间隔

::: demo

```html
<template>
  <fly-row class="bg-row" :gutter="20">
    <fly-col :span="4">
      <div class="bg-col-first" algin='left'>内容居左</div>
    </fly-col>
    <fly-col :span="4">
      <div class="bg-col-second" align='center'>内容居中</div>
    </fly-col>
    <fly-col :span="4">
      <div class="bg-col-first" align='right'>内容居右</div>
    </fly-col>
    <fly-col :span="4">
      <div class="bg-col-second"></div>
    </fly-col>
    <fly-col :span="4">
      <div class="bg-col-first"></div>
    </fly-col>
    <fly-col :span="4">
      <div class="bg-col-second"></div>
    </fly-col>
  </fly-row>
</template>
<style scoped>
  .bg-row {
    background: #fafafa;
    line-height: 32px;
    height: 32px;
    margin-bottom: 10px;
    color:#fff;
  }
  .bg-col-first {
    background: #526069;
    border-radius: 2px;
  }
  .bg-col-second {
    background: #a3afb7;
    border-radius: 2px;
  }
</style>
```

:::

## Flex 类型布局

::: demo

```html
<template>
  <fly-row class="bg-row" type="flex" :gutter="20">
    <fly-col :span="4">
      <div class="bg-col-first"></div>
    </fly-col>
    <fly-col :span="4">
      <div class="bg-col-second"></div>
    </fly-col>
    <fly-col :span="4">
      <div class="bg-col-first"></div>
    </fly-col>
    <fly-col :span="4">
      <div class="bg-col-second"></div>
    </fly-col>
    <fly-col :span="4">
      <div class="bg-col-first"></div>
    </fly-col>
    <fly-col :span="4">
      <div class="bg-col-second"></div>
    </fly-col>
  </fly-row>
  <fly-row class="bg-row" type="flex">
    <fly-col class="bg-col-first"></fly-col>
  </fly-row>
  <fly-row class="bg-row" type="flex">
    <fly-col :span="8">
      <div class="bg-col-first"></div>
    </fly-col>
    <fly-col :span="8">
      <div class="bg-col-second"></div>
    </fly-col>
    <fly-col :span="8">
      <div class="bg-col-first"></div>
    </fly-col>
  </fly-row>
  <fly-row class="bg-row" type="flex">
    <fly-col :span="12">
      <div class="bg-col-first"></div>
    </fly-col>
    <fly-col :span="12">
      <div class="bg-col-second"></div>
    </fly-col>
  </fly-row>
</template>
<style scoped>
  .bg-row {
    background: #fafafa;
    line-height: 32px;
    height: 32px;
    margin-bottom: 10px;
  }
  .bg-col-first {
    background: #526069;
    border-radius: 2px;
  }
  .bg-col-second {
    background: #a3afb7;
    border-radius: 2px;
  }
</style>
```

:::

## 分栏偏移效果

::: demo

```html
<template>
  <fly-row class="bg-row" type="flex" :gutter="20">
    <fly-col :span="6">
      <div class="bg-col-first"></div>
    </fly-col>
    <fly-col :span="6" :offset="6">
      <div class="bg-col-second"></div>
    </fly-col>
  </fly-row>
  <fly-row class="bg-row" type="flex">
    <fly-col :span="6" :offset="6">
      <div class="bg-col-first"></div>
    </fly-col>
    <fly-col :span="6" :offset="6">
      <div class="bg-col-second"></div>
    </fly-col>
  </fly-row>
  <fly-row class="bg-row">
    <fly-col :span="12" :offset="6">
      <div class="bg-col-first"></div>
    </fly-col>
  </fly-row>
</template>
<style scoped>
  .bg-row {
    background: #fafafa;
    line-height: 32px;
    height: 32px;
    margin-bottom: 10px;
  }
  .bg-col-first {
    background: #526069;
    border-radius: 2px;
  }
  .bg-col-second {
    background: #a3afb7;
    border-radius: 2px;
  }
</style>
```

:::

## 分栏偏移效果

::: demo

```html
<template>
  <fly-row class="bg-row" type="flex">
    <fly-col :span="6">
      <div class="bg-col-first"></div>
    </fly-col>
    <fly-col :span="6">
      <div class="bg-col-second"></div>
    </fly-col>
    <fly-col :span="6">
      <div class="bg-col-first"></div>
    </fly-col>
  </fly-row>
  <fly-row class="bg-row" justify-content="flex-end" type="flex">
    <fly-col :span="6">
      <div class="bg-col-first"></div>
    </fly-col>
    <fly-col :span="6">
      <div class="bg-col-second"></div>
    </fly-col>
    <fly-col :span="6">
      <div class="bg-col-first"></div>
    </fly-col>
  </fly-row>
  <fly-row class="bg-row" justify-content="center" type="flex">
    <fly-col :span="6">
      <div class="bg-col-first"></div>
    </fly-col>
    <fly-col :span="6">
      <div class="bg-col-second"></div>
    </fly-col>
    <fly-col :span="6">
      <div class="bg-col-first"></div>
    </fly-col>
  </fly-row>
  <fly-row class="bg-row" justify-content="space-between" type="flex">
    <fly-col :span="6">
      <div class="bg-col-first"></div>
    </fly-col>
    <fly-col :span="6">
      <div class="bg-col-second"></div>
    </fly-col>
    <fly-col :span="6">
      <div class="bg-col-first"></div>
    </fly-col>
  </fly-row>
  <fly-row class="bg-row" justify-content="space-around" type="flex">
    <fly-col :span="6">
      <div class="bg-col-first"></div>
    </fly-col>
    <fly-col :span="6">
      <div class="bg-col-second"></div>
    </fly-col>
    <fly-col :span="6">
      <div class="bg-col-first"></div>
    </fly-col>
  </fly-row>
</template>
<style scoped>
  .bg-row {
    background: #fafafa;
    line-height: 32px;
    height: 32px;
    margin-bottom: 10px;
  }
  .bg-col-first {
    background: #526069;
    border-radius: 2px;
  }
  .bg-col-second {
    background: #a3afb7;
    border-radius: 2px;
  }
</style>
```

:::

## Row - 可定制属性

| 属性名称        | 类型   | 默认值 | 可选值                                                                  | 说明                                         |
| --------------- | ------ | ------ | ----------------------------------------------------------------------- | -------------------------------------------- |
| gutter          | Number | 0      | -                                                                       | 栅格间隔                                     |
| type            | String | -      | -                                                                       | 布局模式，可选 float，现代浏览器下有效       |
| justify-content | String | -      | stretch / flex-start / flex-end / center / space-around / space-between | 布局下的水平排列方 flex 布局下的水平排列方式 |
| align-items     | String | -      | stretch / flex-start / flex-end / center                                | flex 布局下的垂直排列方式                    |
| tag-name        | String | div    | -                                                                       | 自定义元素标签                               |

## Col - 可定制属性

| 属性名称 | 类型   | 默认值 | 可选值 | 说明               |
| -------- | ------ | ------ | ------ | ------------------ |
| span     | Number | 24     | -      | 栅格间隔           |
| tag-name | String | div    | -      | 自定义元素标签     |
| offset   | Number | 0      | -      | 栅格左侧的间隔格数 |
