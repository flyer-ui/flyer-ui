<script>
module.exports = {
    data(){
        return{
            value:'',
            value2:'2',
            value3:'',
            value4:'',
            selectedValue:'',
            selectedGroupValue:'',
            list:100
        }
    },
    methods:{
        handleChange(value){
            console.log(value)
            this.selectedValue = value
        },
        handleSetting(){
          this.value4 = '单选框1'
        },
        handleChangeGroup(value){
            console.log(value)
            this.selectedGroupValue = value
        }
    }
}
</script>

## Scrollbar 虚拟滚动条

### 基础用例

::: demo

```html
<template>
  <fly-scrollbar class='fly-scrollbar-demo'>
      <div v-for="(item,index) in list" :key='index'>
          {{item}}
      </div>
  </fly-scrollbar>
</template>
<script>
  export default {
    data() {
      return {
        value: ""
      };
    }
  };
</script>
<style scoped>
    .fly-scrollbar-demo{
        height:400px;
        border:1px solid #ccc;
    }
</style>
```


:::

### 单选框 - 可定制属性

| 属性名称        | 类型                      | 默认值 | 可选值       | 说明           |
| --------------- | ------------------------- | ------ | ------------ | -------------- |
| value / v-model | String / Number / Boolean | -      | -            | 绑定的值       |
| label           | String / Number / Boolean | -      | -            | 选中状态的值   |
| disabled        | Boolean                   | false  | true / false | 是否设置为禁用 |
| name            | String                    | -      | -            | 原生 name 属性 |

### 单选框 - 可定制的事件

| 事件名称  | 返回值     | 说明                       |
| --------- | ---------- | -------------------------- |
| change | 更新后的值 | 在点击选项状态变更时触发。 |

### 单选框组 - 可定制属性

| 属性名称        | 类型                      | 默认值 | 可选值 | 说明     |
| --------------- | ------------------------- | ------ | ------ | -------- |
| value / v-model | String / Boolean / Number | -      | -      | 绑定的值 |

### 单选框组 - 可定制事件

| 事件名称  | 返回值     | 说明                       |
| --------- | ---------- | -------------------------- |
| change | 更新后的值 | 在点击选项状态变更时触发。 |
