<script>
    export default {
        data(){
            return {
                value:''
            }
        }
    }
</script>

## Switch 开关

### 基本用法

::: demo
```html
<template>
    <fly-switch v-model='value'></fly-switch>
    <div>{{value}}</div>
</template>
```
:::