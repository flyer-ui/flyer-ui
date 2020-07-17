<script>
 module.exports =  {
        methods:{
            openNormal(){
                this.$message.info('这是一个常用的消息')
            },
            openSuccess(){
                this.$message.success('这是一个成功的消息')
            },
            openWarning(){
                this.$message.warning('这是一个警告的消息')
            },
            openError(){
                this.$message.error('这是一个异常的消息')
            },
            openLoading(){
                this.$message.loading('loading..',10)
            },
            openClosable(){
                this.$message.info('打开了我，啦 啦 啦 ，我就不自动关闭，嘿嘿嘿～～～',{
                    closable:true,
                    onClosed(){
                        this.$message.success('成功的关闭了我')
                    }
                })
            }
        }
    }
</script>

## Message 消息框

### 基本使用

::: demo

```html
<template>
  <fly-button type="primary" @click="openNormal">Normal</fly-button>
  <fly-button type="success" @click="openSuccess">Success</fly-button>
  <fly-button type="warning" @click="openWarning">Warning</fly-button>
  <fly-button type="danger" @click="openError">Error</fly-button>
  <fly-button type="info" @click="openLoading">Loading</fly-button>
  <fly-button @click="openClosable">Closable</fly-button>
</template>
<script>
  export default {
    methods: {
      openNormal() {
        this.$message.info("这是一个常用的消息");
      },
      openSuccess() {
        this.$message.success("这是一个成功的消息");
      },
      openWarning() {
        this.$message.warning("这是一个警告的消息");
      },
      openError() {
        this.$message.error("这是一个异常的消息");
      },
      openLoading() {
        this.$message.loading("loading..", 10);
      },
      openClosable() {
        this.$message.info(
          "打开了我，啦 啦 啦 ，我就不自动关闭，嘿嘿嘿～～～",
          {
            closable: true,
            onClosed() {
              this.$message.success("成功的关闭了我");
            }
          }
        );
      }
    }
  };
</script>
```

:::

### Message - 可定制属性

| 属性名称 | 类型    | 默认值 | 可选值       | 说明                                              |
| -------- | ------- | ------ | ------------ | ------------------------------------------------- |
| content  | String  | -      | -            | 显示的内容                                        |
| duration | Number  | 0      | -            | 显示的持续时间，单位为秒，设置为 0 则为不默认关闭 |
| closable | Boolean | false  | true / false | 是否显示关闭按钮                                  |

### Message - 可定制的事件

| 事件名称  | 返回值 | 说明                 |
| --------- | ------ | -------------------- |
| closed | -      | 关闭时触发的回调函数 |
