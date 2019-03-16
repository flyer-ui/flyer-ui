<script>
    export default {
        methods:{
            openNormal(){
                this.$message.info('这是一个常用的消息',3)
            },
            openSuccess(){
                this.$message.success('这是一个成功的消息',3)
            },
            openWarning(){
                this.$message.warning('这是一个警告的消息',3)
            },
            openError(){
                this.$message.error('这是一个异常的消息',3)
            }
        }
    }
</script>

## Message 消息框

### 基本使用

::: demo
```html
<template>
    <fly-button type='primary' @on-click='openNormal'>Normal</fly-button>
    <fly-button type='success' @on-click='openSuccess'>Success</fly-button>
    <fly-button type='warning' @on-click='openWarning'>Warning</fly-button>
    <fly-button type='danger' @on-click='openError'>Error</fly-button>
</template>
<script>
    export default {
        methods:{
            openNormal(){
                this.$message.info('这是一个常用的消息',3)
            },
            openSuccess(){
                this.$message.success('这是一个成功的消息',3)
            },
            openWarning(){
                this.$message.warning('这是一个警告的消息',3)
            },
            openError(){
                this.$message.error('这是一个异常的消息',3)
            }
        }
    }
</script>
```
:::

### Message - 可定制属性

属性名称 | 类型 | 默认值  | 可选值  | 说明  |
---------|----------|---------|---------|--------|
content | String | - | - | 显示的内容 |
duration | Number | 0 | - | 显示的持续时间，单位为秒，设置为0则为不默认关闭 |
icon | String | - | - | 自定义图标 |
closable | Boolean | false | true / false | 是否显示关闭按钮 |

### Message - 可定制的事件

事件名称 | 返回值 | 说明
---------|----------|---------
on-closed | - | 关闭时触发的回调函数 |
