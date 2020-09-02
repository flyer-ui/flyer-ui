<script>
module.exports = {
    data(){
        return {
          currentPage:1,
          currentPage1:1,
          currentPage2:1,
          currentPage3:1
        }
    },
    methods:{
      handleChange(value){
        console.log('value',value)
      }
    }
}
</script>

## Pagination 分页

### 基础用法

::: demo

```html
<template>
 <fly-pagination
    v-model="currentPage"
    :pager-count='5'
    :page-size="10"
    :total="89"
    @change='handleChange'
  ></fly-pagination>
</template>
<script>
  export default {
    data() {
      return {
        currentPage: 1
      };
    }
  };
</script>
```

:::

### 设置页码按钮数量

::: demo

```html
<template>
  <p>
    <fly-pagination
    v-model="currentPage1"
    :page-size="20"
    :pager-count="7"
    :total="179"
    ></fly-pagination>
  </p>
  <p>
    <fly-pagination
      v-model="currentPage2"
      :page-size="10"
      :pager-count="3"
      :total="1898"
    ></fly-pagination>
  </p>
  <p>
    <fly-pagination
      v-model="currentPage3"
      :page-size="10"
      :pager-count="4"
      :total="1898"
    ></fly-pagination>
  </p>
</template>
<script>
  export default {
    data() {
      return {
        currentPage1: 1,
        currentPage2: 1,
        currentPage3: 1
      };
    }
  };
</script>
```

:::

### Input - 可定制属性

| 属性名称        | 类型            | 默认值 | 可选值 | 说明                                     |
| --------------- | --------------- | ------ | ------ | ---------------------------------------- |
| value / v-model | String / Number | -      | -      | 当前页码                                 |
| page-size       | Number          | -      | 0      | -                                        |
| page-start      | Number          | 1      | -      | 分页组件初始的起始页码                   |
| pager-count      | Number          | 7      | -      | 页码按钮的数量，当总页数超过该值时会折叠 |
| total           | Number          | 0      | -      | 总条目数                                 |

### Input - 可定制的事件

| 事件名称  | 返回值 | 说明               |
| --------- | ------ | ------------------ |
| change | 当前页 | 当前页面改变时触发 |
| prev   | 当前页 | 点击上一页时触发   |
| next   | 当前页 | 点击下一页时触发   |
