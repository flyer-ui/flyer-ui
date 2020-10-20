## Tag 标签

### 基本使用

::: demo

```html
<template>
  <fly-tag>标签一</fly-tag>
  <fly-tag type="primary">标签二</fly-tag>
  <fly-tag type="success">标签三</fly-tag>
  <fly-tag type="info">标签四</fly-tag>
  <fly-tag type="danger">标签四</fly-tag>
  <fly-tag type="warning">标签四</fly-tag>
</template>
```

:::

### 可关闭的标签

::: demo

```html
<template>
  <fly-tag closable>标签一</fly-tag>
  <fly-tag type="primary" closable>标签二</fly-tag>
  <fly-tag type="success" closable>标签三</fly-tag>
  <fly-tag type="info" closable>标签四</fly-tag>
  <fly-tag type="danger" closable>标签四</fly-tag>
  <fly-tag type="warning" closable>标签四</fly-tag>
</template>
```

:::

### 动态添加及关闭标签

::: demo

```html
<template>
  <fly-tag
    @close="handleClose(item)"
    closable
    type="primary"
    v-for="(item,index) in items"
    :key="index"
    >{{item}}</fly-tag
  >
  <fly-button v-show="!showInput" @click="handleAdd">New Tag</fly-button>
  <fly-input
    @blur="handleBlur"
    v-show="showInput"
    v-model="newValue"
  ></fly-input>
</template>
<script>
  export default {
    data() {
      return {
        items: ["标签一", "标签二", "标签三", "标签四", "标签五"],
        newValue: "",
        showInput: false
      };
    },
    methods: {
      handleClose(arg) {
        console.log(arg);
        const index = this.items.findIndex(item=>item===arg)
        if(index>-1){
          this.items = this.items.splice(index,1)
        }
      },
      handleAdd() {
        this.showInput = true;
      },
      handleBlur() {
        if (this.newValue && Array.isArray(this.items)) {
          this.items.push(this.newValue);
          this.newValue = "";
          this.showInput = false;
        }
      }
    }
  };
</script>
```

:::

### 标签 - 可定制属性

| 属性名称 | 类型    | 默认值  | 可选值                                                | 说明             |
| -------- | ------- | ------- | ----------------------------------------------------- | ---------------- |
| type     | String  | default | primary / success / info / warning / danger / default | 标签的风格类型   |
| closable | Boolean | false   | true / false                                          | 是否设置为可关闭 |

### 标签 - 可定制的事件

| 事件名称 | 返回值 | 说明             |
| -------- | ------ | ---------------- |
| close | -      | 关闭标签后的事件 |
