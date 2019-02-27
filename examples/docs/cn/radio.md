<script>
export default {
    data(){
        return{
            value:'',
            value2:'2',
            value3:''
        }
    }
}
</script>

## Radio 单选框

### 基础用例

::: demo
```html
<template>
    <fly-radio name='demo' v-model='value' label='1'>单选框1</fly-radio>
    <fly-radio name='demo' v-model='value' label='2'>单选框2</fly-radio>
    <div>
    value:{{value}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            value:''
        }
    }
}
</script>
```
:::

### 禁用状态用例

::: demo
```html
<template>
    <fly-radio name='demo' label='1' v-model='value2' disabled>禁用状态</fly-radio>
    <fly-radio name='demo' label='2' v-model='value2' disabled>禁用状态</fly-radio>
</template>
<script>
export default {
    data(){
        return {
            value2:'2'
        }
    }
}
</script>
```
:::

### Radio 选项组

::: demo
```html
<template>
    <fly-radio-group v-model='value3'>
        <fly-radio label='A'>
            北京
        </fly-radio>
        <fly-radio label='B'>
            深圳
        </fly-radio>
        <fly-radio label='C'>
            东莞
        </fly-radio>
        <fly-radio label='D'>
            杭州
        </fly-radio>
    </fly-radio-group>
    <div>
        value3:{{value3}}
    </div>
</template>
<script>
export default {
    data(){
        return {
            value3:''
        }
    }
}
</script>
```
:::
