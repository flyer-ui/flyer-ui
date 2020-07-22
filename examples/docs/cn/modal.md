<script>
 module.exports = {
        data(){
            return {
                open1:false,
                open2:false,
                open3:false,
                open4:false,
                open5:false,
                open6:false,
                open7:false,
                open8:false
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
            },
            openConfirm(){
                this.$modal.confirm({
                    title:'确认提示',
                    content:'你确认要这么操作吗?',
                    onCancel(){
                        this.$message.info('取消了',3)
                    },
                    onConfirm(){
                        this.$message.info('确认了',4)
                    },
                    onClosed(){
                        this.$message.warning('关闭了',5)
                    }
                })
            },
            openInfo(){
                 this.$modal.info({
                    title:'Info',
                    content:'语法糖的内容'
                })
            },
             openWarning(){
                 this.$modal.warning({
                    title:'Warning',
                    content:'语法糖的内容',
                    confirmText:'OK'
                })
            },
            openDanger(){
                 this.$modal.danger({
                    title:'Danger',
                    content:'语法糖的内容',
                    onConfirm(){
                        this.$message.info('我确定你关闭了',2)
                    }
                })
            },
             openSuccess(){
                 this.$modal.success({
                    title:'Success',
                    content:'语法糖的内容'
                })
            }
        }
    }
</script>

## Modal 模态框

### 基本使用

::: demo

```html
<template>
  <fly-button type='primary' @click="handleOpen1">基本使用</fly-button>
  <fly-modal v-model="open1" title="Title1">
    <ul>
      <li>Hello Modal!</li>
      <li>Hello Modal2</li>
    </ul>
  </fly-modal>
</template>
<script>
  export default {
    data() {
      return {
        open1: false
      };
    },
    methods: {
      handleOpen1() {
        this.open1 = true;
      }
    }
  };
</script>
```

:::

### 自定义 Modal

::: demo

```html
<template>
  <fly-button type='primary' @click="handleOpen2">设置closable</fly-button>
  <fly-modal v-model="open2" :closable="false" title="Title2">
    <ul>
      <li>Hello Modal!</li>
      <li>Hello Modal2</li>
    </ul>
  </fly-modal>
  <fly-button type='primary' @click="handleOpen3">设置宽度300px</fly-button>
  <fly-modal
    v-model="open3"
    width="300px"
    @closed="handleClosed3"
    title="Title3"
  >
    <ul>
      <li>Hello Modal!</li>
      <li>Hello Modal2</li>
    </ul>
  </fly-modal>
  <fly-button type='primary' @click="open6=true">允许点击摭罩层关闭modal框</fly-button>
  <fly-modal v-model="open6" mask-closable width="300px" title="Title6">
    <ul>
      <li>Hello Modal!</li>
      <li>Hello Modal2</li>
    </ul>
  </fly-modal>
  <fly-button type='primary' @click="handleOpen5">设置对话框挂起状态</fly-button>
  <fly-modal
    v-model="open5"
    width="400px"
    @closed="handleClosed3"
    @confirm="handleConfirm5"
    @cancel="handleCancel5"
    confirm-loading
    :markClosable="false"
    title="Title5"
  >
    <ul>
      <li>点击确定的话，3秒后我会自动关闭</li>
    </ul>
  </fly-modal>
  <fly-button type='primary' @click="open8=true">带Icon的Modal框</fly-button>
  <fly-modal
    icon="fly-icon-alert-circle"
    v-model="open8"
    width="400px"
    title="Title8"
  >
    标题左边多了一个图标,可以设置icon属性定制适合自已的图标
  </fly-modal>
</template>
<script>
  export default {
    data() {
      return {
        open2: false,
        open3: false,
        open5: false,
        open6: false,
        open8: false
      };
    },
    methods: {
      handleOpen2() {
        this.open2 = true;
      },
      handleOpen3() {
        this.open3 = true;
      },
      handleOpen5() {
        this.open5 = true;
      },
      handleClosed3() {
        console.log(arguments);
      },
      handleConfirm5() {
        setTimeout(() => {
          this.open5 = false;
        }, 3000);
      },
      handleCancel5() {
        this.open5 = false;
      }
    }
  };
</script>
```

:::

### 自定义 Slot

::: demo

```html
<template>
  <fly-button type='primary' @click="handleOpen4">自定义Slot</fly-button>
  <fly-modal v-model="open4">
    <div slot="header">
      Title4
    </div>
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
    <div slot="footer">
      <fly-button type="primary" @click="handleClose">确认</fly-button>
      <fly-button @click="handleClose">取消</fly-button>
    </div>
  </fly-modal>
  <fly-button type='primary' @click="open7=true">无标题</fly-button>
  <fly-modal v-model="open7">
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
  </fly-modal>
</template>
<script>
  export default {
    data() {
      return {
        open4: false
      };
    },
    methods: {
      handleOpen4() {
        this.open4 = true;
      },
      handleClose() {
        this.open4 = false;
      }
    }
  };
</script>
```

:::

### 快捷实例对话框

::: demo

```html
<template>
  <fly-button type="primary" @click="openConfirm">Confirm</fly-button>
  <fly-button type="info" @click="openInfo">Info</fly-button>
  <fly-button type="warning" @click="openWarning">Warning</fly-button>
  <fly-button type="danger" @click="openDanger">Danger</fly-button>
  <fly-button type="success" @click="openSuccess">Success</fly-button>
</template>
<script>
  export default {
    methods: {
      openConfirm() {
        this.$modal.confirm({
          title: "确认提示",
          content: "你确认要这么操作吗?",
          onCancel() {
            this.$message.info("取消了", 3);
          },
          onConfirm() {
            this.$message.info("确认了", 4);
          },
          onClosed() {
            this.$message.warning("关闭了", 5);
          }
        });
      },
      openInfo() {
        this.$modal.info({
          title: "Info",
          content: "语法糖的内容"
        });
      },
      openWarning() {
        this.$modal.warning({
          title: "Warning",
          content: "语法糖的内容",
          confirmText: "OK"
        });
      },
      openDanger() {
        this.$modal.danger({
          title: "Danger",
          content: "语法糖的内容",
          onConfirm() {
            this.$message.info("我确定你关闭了", 2);
          }
        });
      },
      openSuccess() {
        this.$modal.success({
          title: "Success",
          content: "语法糖的内容"
        });
      }
    }
  };
</script>
```

:::

### Modal - 可定制属性

| 属性名称        | 类型    | 默认值 | 可选值                                      | 说明                                                                                              |
| --------------- | ------- | ------ | ------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| value / v-model | Boolean | -      | -                                           | 绑定的值,控制是否显示                                                                             |
| title           | String  | -      | -                                           | Modal 的显示标题                                                                                  |
| content         | String  | -      | -                                           | Modal 的显示内容                                                                                  |
| closable        | Boolean | true   | true / false                                | 是否显示右上角的关闭按钮，关闭后 Esc 按键也将关闭                                                 |
| width           | String  | 50vw    | -                                           | 模态框的宽度   
| height           | String  | 60vh   | -                                           | 模态框的高度                                                                           |
| confirm-loading | Boolean | false  | -                                           | 确定按钮点击后呈现 loading 挂起状态，但需要在挂起状态结束后，手动设置 v-model 绑定值关闭 modal 框 |
| close-closable  | Boolean | false  | -                                           | 允许点击摭罩层关闭                                                                                |
| type            | Sting   | -      | success / confirm / info / warning / danger | 使用语法糖快捷定制 modal 的类型                                                                   |
| confirm-text    | Sting   | 确认   | -                                           | 确定按钮的显示文本                                                                                |
| cancel-text     | Sting   | 取消   | -                                           | 取消按钮的显示文本                                                                                |

### Modal - 可定制的事件

| 事件名称   | 返回值         | 说明                            |
| ---------- | -------------- | ------------------------------- |
| closed  | (event: Event) | 当点击右上角关闭 modal 后的回调 |
| confirm | -              | 当点击确定后回调                |
| cancel  | -              | 当点击取消后回调                |

### Modal - Slot

| 事件名称 | 说明      |
| -------- | --------- |
| header   | 头部内容  |
| default  | body 内容 |
| footer   | 底部内容  |
