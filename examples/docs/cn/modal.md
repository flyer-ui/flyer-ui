<script>
    export default {
        data(){
            return {
                open1:false,
                open2:false,
                open3:false,
                open4:false,
                open5:false,
                open6:false,
                open7:false
            }
        },
        methods:{
            handleOpen1(){
                this.open1 = true
            },
            handleOpen2(){
                this.open2 = true
            },
            handleOpen3(){
                this.open3 = true
            },
            handleOpen4(){
                this.open4 = true
            },
            handleOpen5(){
                this.open5 = true
            },
            handleClose(){
                this.open4 = false
            },
            handleClosed3(){
                console.log(arguments)
            },
            handleConfirm5(){
                setTimeout(()=>{
                    this.open5 = false;
                },3000)
            },
            handleCancel5(){
                this.open5 = false
            }
        }
    }
</script>
## Modal 模态框


### 基本使用

::: demo
```html
<template>
    <fly-button @on-click='handleOpen1'>基本使用</fly-button>
    <fly-modal v-model='open1' title='Title1'>
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
                open1:false
            }
        },
        methods:{
            handleOpen1(){
                this.open1 = true
            }
        }
    }
</script>
```
:::

### 自定义 Modal

::: demo
```html
<template>
    <fly-button @on-click='handleOpen2'>设置closable</fly-button>
    <fly-modal v-model='open2' :closable='false' title='Title2'>
        <ul>
            <li>Hello Modal!</li>
            <li>Hello Modal2</li>
        </ul>
    </fly-modal>
    <fly-button @on-click='handleOpen3'>设置宽度300px</fly-button>
    <fly-modal v-model='open3' width='300px' @on-closed='handleClosed3' title='Title3'>
        <ul>
            <li>Hello Modal!</li>
            <li>Hello Modal2</li>
        </ul>
    </fly-modal>
    <fly-button @on-click='open6=true'>允许点击摭罩层关闭modal框</fly-button>
    <fly-modal v-model='open6' mask-closable width='300px' title='Title6'>
        <ul>
            <li>Hello Modal!</li>
            <li>Hello Modal2</li>
        </ul>
    </fly-modal>
    <fly-button @on-click='handleOpen5'>设置对话框挂起状态</fly-button>
    <fly-modal v-model='open5' width='400px' 
        @on-closed='handleClosed3' 
        @on-confirm='handleConfirm5'
        @on-cancel='handleCancel5'
        confirm-loading 
        :markClosable='false'
        title='Title5'>
        <ul>
            <li>点击确定的话，3秒后我会自动关闭</li>
        </ul>
    </fly-modal>
</template>
<script>
    export default {
        data(){
            return {
                open2:false,
                open3:false,
                open5:false,
                open6:false
            }
        },
        methods:{
            handleOpen2(){
                this.open2 = true
            },
            handleOpen3(){
                this.open3 = true
            },
            handleOpen5(){
                this.open5 = true
            },
            handleClosed3(){
                console.log(arguments)
            },
            handleConfirm5(){
                setTimeout(()=>{
                    this.open5 = false
                },3000)
            },
            handleCancel5(){
                this.open5 = false
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
    <fly-button @on-click='handleOpen4'>自定义Slot</fly-button>
    <fly-modal v-model='open4'>
        <div slot='header'>
            Title4
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
    <fly-button @on-click='open7=true'>无标题</fly-button>
    <fly-modal v-model='open7'>
        <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
        </ul>
    </fly-modal>
</template>
<script>
    export default {
        data(){
            return {
                open4:false
            }
        },
        methods:{
            handleOpen4(){
                this.open4 = true
            },
            handleClose(){
                this.open4 = false;
            }
        }
    }
</script>
```
:::

### 快捷对话框
::: demo
```html
<template>
    <fly-button>标准</fly-button>
</template>
<script>
    export default {
        
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
width | String | 50% | - | 模态框的宽度 |
confirm-loading | Boolean | false | - | 确定按钮点击后呈现loading挂起状态，但需要在挂起状态结束后，手动设置 v-model绑定值关闭modal框 |
close-closable | Boolean | false | - | 允许点击摭罩层关闭 |

### Input - 可定制的事件

事件名称 | 返回值 | 说明
---------|----------|---------
on-closed | (event: Event) | 当点击右上角关闭modal后的回调 |
on-confirm | - | 当点击确定后回调 |
on-cancel | - | 当点击取消后回调 |

### Input - Slot

事件名称 | 说明
---------|----------|
header | 头部内容|
default | body内容 |
footer | 底部内容 |
