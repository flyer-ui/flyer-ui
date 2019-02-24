### Test
::: demo
```html
<template>
    <fly-checkbox checked disabled>已选禁用状态</fly-checkbox>
    <!-- <fly-checkbox-group v-model='citys'>
        <fly-checkbox label='深圳'>深圳</fly-checkbox>
        <fly-checkbox label='东莞' checked>东莞</fly-checkbox>
    </fly-checkbox-group> -->
    {{citys}}
</template>
<script>
    export default{
        data(){
            return {
                citys:[]
            }
        }
    }
</script>
```
:::