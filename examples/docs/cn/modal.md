<script>
    export default {
        data(){
            return {
                open1:false,
                open2:false,
                open:false,
                closable:false
            }
        },
        methods:{
            handleOpen(){
                this.open1 = true
            },
            handleOpen2(){
                this.open2 = true
            },
            handleClose(){
                this.open1 = false
            },
            handleShow(){
                this.open = true
            }
        }
    }
</script>
## Modal 模态框

### 基本使用

::: demo
```html
<template>
    <fly-button @on-click='handleShow'>基本使用</fly-button>
    <fly-modal v-model='open' title='Title'>
        <ul>
            <li>Hello Modal!</li>
            <li>Hello Modal2</li>
        </ul>
    </fly-modal>
</template>
<script>
    export default {
        data(){
            return {
                open:false
            }
        },
        methods:{
            handleShow(){
                this.open = true
            }
        }
    }
</script>
```
:::

### 设置closable

::: demo
```html
<template>
    <fly-button @on-click='handleShow'>设置closable</fly-button>
    <fly-modal v-model='open2' :closable='true' title='Title'>
        <ul>
            <li>Hello Modal!</li>
            <li>Hello Modal2</li>
        </ul>
    </fly-modal>
</template>
<script>
    export default {
        data(){
            return {
                open2:false,
                closable:false
            }
        },
        methods:{
            handleOpen2(){
                this.open2 = true
            }
        }
    }
</script>
```
:::

### 自定义Slot
::: demo
```html
<template>
    <fly-button @on-click='handleOpen'>自定义Slot</fly-button>
    <fly-modal v-model='open1'>
        <div slot='header'>
            Title
        </div>
        <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
        </ul>
        <div slot='footer'>
            <fly-button type='primary' @on-click='handleClose'>确认</fly-button>
            <fly-button @on-click='handleClose'>取消</fly-button>
        </div>
    </fly-modal>
</template>
<script>
    export default {
        data(){
            return {
                open1:false
            }
        },
        methods:{
            handleOpen(){
                this.open1 = true
            },
            handleClose(){
                this.open1 = false;
            }
        }
    }
</script>
```
:::

### Input - 可定制属性

属性名称 | 类型 | 默认值  | 可选值  | 说明  |
---------|----------|---------|---------|--------|
value / v-model | Boolean | - | - | 绑定的值,控制是否显示 |
type | String | - | text | 原生 input 的 type 值 |
closable | Boolean | true | true / false | 是否显示右上角的关闭按钮，关闭后 Esc 按键也将关闭 |

### Input - 可定制的事件

事件名称 | 返回值 | 说明
---------|----------|---------
on-close | (event: Event) | 当右上角关闭按钮触发后 |

### Input - Slot

事件名称 | 说明
---------|----------|
header | 头部内容|
default | body内容 |
footer | 底部内容 |
