# Icon 图标

<script>
module.exports = {
    data(){
        return {
            items:require('../../../src/components/themes/src/fonts/iconfont.json').glyphs
        }
    }
}
</script>

## 使用方法

::: demo

```html
<template>
  <div class="fly-demo-icon">
    <i class="fly-icon fly-icon-github"></i>
    <i class="fly-icon fly-icon-history"></i>
    <i class="fly-icon fly-icon-search"></i>
    <fly-icon name="edit" font-size='14px'></fly-icon>
  </div>
</template>
```

:::

## 图标集合

<template>
<div class='fly-demo-icon'>
    <ul>
        <li v-for="(item,index) in items" :key='index'>
            <i class='fly-icon' :class='`fly-icon-${item.font_class}`'></i>
            <div>fly-icon-{{item.font_class}}</div>
        </li>
    </ul>
</div>
</template>

<style lang='scss' scoped>
    .fly-demo-icon{
        /deep/ .fly-icon{
            font-size:24px;
        }
    }
</style>

### Icon 可定制属性

| 属性名称 | 类型    | 默认值 | 可选值       | 说明                                              |
| -------- | ------- | ------ | ------------ | ------------------------------------------------- |
| font-size  | String  | -      | -            | 字体图标大小                                        |