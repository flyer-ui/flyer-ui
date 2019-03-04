## Icon 图标

<script>
export default {
    data(){
        return {
            items:require('../../icon.json')
        }
    }
}
</script>

### 使用方法

::: demo
```html
<template>
<div class='fly-demo-icon'>
    <i class='fly-icon-dollar-sign'></i>
    <i class='fly-icon-map-pin'></i>
    <i class='fly-icon-mail'></i>
    <fly-icon name='monitor'></fly-icon>
</div>
</template>
```
:::

### 图标集合
<template>
<ul>
    <li v-for="(item,index) in items" :key='index'>{{item}}</li>
</ul>
</template>