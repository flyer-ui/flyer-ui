# Icon 图标

<script>
module.exports = {
    data(){
        return {
            items:require('../../icon.json')
        }
    }
}
</script>

## 使用方法

::: demo

```html
<template>
  <div class="fly-demo-icon">
    <i class="fly-icon-dollar-sign"></i>
    <i class="fly-icon-map-pin"></i>
    <i class="fly-icon-mail"></i>
    <fly-icon name="monitor"></fly-icon>
  </div>
</template>
```

:::

## 图标集合

<template>
<div class='fly-demo-icon'>
    <ul>
        <li v-for="(item,index) in items" :key='index'>
            <i :class='item'></i>
            <div>{{item}}</div>
        </li>
    </ul>
</div>
</template>
