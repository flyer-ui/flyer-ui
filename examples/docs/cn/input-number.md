<script>
    export default {
        data(){
            return {
                num:0
            }
        }
    }
</script>
## Input Number 数字输入组件

### 基本使用

::: demo
```html
<template>
    <fly-input-number v-model='num'></fly-input-number>
    <div>
        {{num}}
    </div>
</template>
<script>
    export default {
        data(){
            return {
                num:0
            }
        }
    }
</script>
```
:::