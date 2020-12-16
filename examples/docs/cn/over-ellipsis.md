<script>
    module.exports = {
        data(){
            return {
                text:'Over Ellipsis 文本溢出省略'
            }
        },
        methods:{
            setContent(){
                this.text = 'Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略';
            }
        }
    }
</script>
## Over Ellipsis 文本溢出省略

### 基本用法

::: demo

```html
<template>
    <fly-over-ellipsis>
        Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略
    </fly-over-ellipsis>
</template>
```
:::

### 定制属性
::: demo

```html
<template>
    <fly-over-ellipsis :lines="2">
        Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略
    </fly-over-ellipsis>
</template>
<br/>
<template>
    <fly-over-ellipsis :lines="4" auto :width='300' :line-height='18'>
        Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略
    </fly-over-ellipsis>
</template>
<br/>
<template>
    <fly-over-ellipsis :lines="3" :width='300' :line-height='18'>
        Over Ellipsis 文本溢出省略
    </fly-over-ellipsis>
</template>
<br/>
<template>
    <fly-over-ellipsis :lines="3" :width='300' auto :line-height='18'>
        {{text}}
    </fly-over-ellipsis>
    <fly-button size='small' @click='setContent' type='primary'>更新</fly-button>
</template>
```
```JS
export default {
    data(){
        return {
            text:'Over Ellipsis 文本溢出省略'
        }
    },
    methods:{
        setContent(){
            this.text = 'Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略Over Ellipsis 文本溢出省略';
        }
    }
}
```
:::

### Textarea - 可定制属性

| 属性名称        | 类型            | 默认值 | 可选值       | 说明                  |
| --------------- | --------------- | ------ | ------------ | --------------------- |
| line-height            | Number          | 24      | -         | 指定每行的行高 |
| lines        | Number         | 3  | -| 指定可以显示的行数        |
| width      | Number          | 300      | -            | 指定盒子的宽度      |
| auto      | Boolean          | false      | ture / false            | 是否自动收缩      |

