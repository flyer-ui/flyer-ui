<script>
    export default {
        data(){
            return {
                value1:10,
                value2:20,
                value3:30,
                value4:10,
                value5:20,
                value6:30,
                value7:10,
                value8:20,
                value9:30
            }
        },
        computed:{
            status(){
                return this.value4 === 100 ? 'success':'normal'
            }
        },
        methods:{
            addition(){
                if(this.value4<100){
                    this.value4+=10
                }
            },
            reduce(){
                if(this.value4>0){
                    this.value4-=10
                }
            }
        }
    }
</script>

## Progress 进度条

### 基本使用

::: demo
```html
<template>
    <div style='width:400px'>
        <fly-progress :percentage='value1'></fly-progress>
        <fly-progress :percentage='value2' status='error'></fly-progress>
        <fly-progress :percentage='value3' status='success'></fly-progress>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                value1:10,
                value2:20,
                value3:30
            }
        }
    }
</script>
```
:::

### 显示状态及文本

::: demo
```html
<template>
    <div style='width:400px'>
        <fly-progress :percentage='value7' show-text></fly-progress>
        <fly-progress :percentage='value8' show-text status='error'></fly-progress>
        <fly-progress :percentage='value9' show-text status='success'></fly-progress>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                value7:10,
                value8:20,
                value9:30
            }
        }
    }
</script>
```
:::

### 动态使用

::: demo
```html
<template>
    <div style='width:400px'>
        <fly-progress :status='status' :percentage='value4' show-text></fly-progress>
        <br/>
        <fly-button @on-click='addition'>+</fly-button>
        <fly-button @on-click='reduce'>-</fly-button>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                value4:10
            }
        },
        computed:{
            status(){
                return this.value4 === 100 ? 'success':'normal'
            }
        },
        methods:{
            addition(){
                if(this.value4<100){
                    this.value4+=10
                }
            },
            reduce(){
                if(this.value4>0){
                    this.value4-=10
                }
            }
        }
    }
</script>
```
:::

### Progress - 可定制属性

属性名称 | 类型 | 默认值  | 可选值  | 说明  |
---------|----------|---------|---------|--------|
percentage | Number | 0 | - | 百分比值，对应的是进度条的进度 |
showText | Boolean | false | - | 是否显示文本 |
status | String | - | normal / error / success | 进度条的状态，正常 / 错误 / 成功 |

### Modal - Slot

事件名称 | 说明
---------|----------|
text | 自定义文本|
status | 自定义状态图标 |