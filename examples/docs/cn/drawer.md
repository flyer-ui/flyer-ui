<script>
module.exports = {
        data(){
            return {
                visibleDrawer:false,
                visibleDrawer2:false
            }
        },
        methods:{
            handleCancel(){
                this.visibleDrawer2=false
                this.$message.info('点击了取消',3)
            },
            handleSave(){
                this.visibleDrawer2=false
                this.$message.info('点击了确认',3)
            },
            handleClosed(){
                this.$message.success('我来源于关闭之后的事件',3)
            }
        }
    }
</script>

## 抽屉 Drawer

### 基本使用

:::demo

```html
<template>
  <fly-button @on-click="visibleDrawer=true">Open</fly-button>
  <fly-drawer @on-closed="handleClosed" v-model="visibleDrawer">
    <div slot="header">Header</div>
    <div>
      Content
    </div>
  </fly-drawer>
</template>
<script>
  export default {
    data() {
      return {
        visibleDrawer: false
      };
    },
    methods: {
      handleClosed() {
        console.log(this);
        this.$message.success("我来源于关闭之后的事件", 3);
      }
    }
  };
</script>
```

:::

### 定制属性

:::demo

```html
<template>
  <fly-button @on-click="visibleDrawer2=true">Open</fly-button>
  <fly-drawer
    :show-close="false"
    :mask-closable="false"
    v-model="visibleDrawer2"
  >
    <div slot="header">Header</div>
    <div>
      <ul>
        <li>宽度600px</li>
        <li>没有关闭图标</li>
        <li>不可以点击摭罩层关闭</li>
      </ul>
    </div>
    <div class="fly-demo-block__buttons fly-demo-block__drawer-buttons">
      <fly-button @on-click="handleCancel">取消</fly-button>
      <fly-button @on-click="handleSave" type="primary">保存</fly-button>
    </div>
  </fly-drawer>
</template>
<script>
  export default {
    data() {
      return {
        visibleDrawer2: false
      };
    },
    methods: {
      handleCancel() {
        this.visibleDrawer2 = false;
        this.$message.info("点击了取消", 3);
      },
      handleSave() {
        this.visibleDrawer2 = false;
        this.$message.info("点击了确认", 3);
      }
    }
  };
</script>
```

:::

### Drawer - 可定制属性

| 属性名称        | 类型    | 默认值          | 可选值 | 说明                   |
| --------------- | ------- | --------------- | ------ | ---------------------- |
| value / v-model | Boolean | -               | -      | 绑定的值               |
| width           | String  | 300px(最小宽度) | -      | 设置宽度               |
| mask-closable   | Boolean | -               | -      | 是否可以点击摭罩层关闭 |
| show-close      | Boolean | false           | -      | 是否显示关闭图标       |

### Drawer - 可定制的事件

| 事件名称  | 返回值 | 说明           |
| --------- | ------ | -------------- |
| on-closed | -      | 关闭之后的回调 |
