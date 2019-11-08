<script>
 module.exports =  {
        data(){
            return {
                value:'',
                 disabled:true,
                 value2:''
            }
        },
        methods:{
            handleClick($event){
                this.disabled=!this.disabled
            },
            handleChange(value){
                console.log(value)
            }
        }
    }
</script>

## Switch 开关

### 基本用法

::: demo

```html
<template>
  <fly-switch v-model="value"></fly-switch>
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
```

:::

### 禁用状态

::: demo

```html
<template>
  <fly-switch :disabled="disabled"></fly-switch>
  <fly-checkbox @change="handleClick">Taggle disabled</fly-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        disabled: true
      };
    },
    methods: {
      handleClick($event) {
        this.disabled = !this.disabled;
      }
    }
  };
</script>
```

:::

### 绑定值及自定义显示文本

::: demo

```html
<template>
  <fly-switch
    @change="handleChange"
    v-model="value2"
    active-value="1"
    inactive-value="0"
  >
    <span slot="active">开</span>
    <span slot="inactive">关</span>
  </fly-switch>
</template>
<script>
  export default {
    data() {
      return {
        disabled: true,
        value2: ""
      };
    },
    methods: {
      handleClick($event) {
        this.disabled = !this.disabled;
      },
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
```

:::

### Switch - 可定制属性

| 属性名称        | 类型                      | 默认值 | 可选值       | 说明             |
| --------------- | ------------------------- | ------ | ------------ | ---------------- |
| value / v-model | String / Number / Boolean | -      | -            | 绑定的值         |
| checked         | Boolean                   | -      | -            | 设置为  选中状态 |
| disabled        | Boolean                   | false  | true / false | 是否设置为禁用   |
| name            | String                    | -      | -            | 原生 name 属性   |
| active-value    | String / Number / Boolean | -      | -            | 选中的值         |
| inactive-value  | String / Number / Boolean | -      | -            | 非选中的值       |

### Switch - 可定制的事件

| 事件名称  | 返回值     | 说明                       |
| --------- | ---------- | -------------------------- |
| change | 更新后的值 | 在点击选项状态变更时触发。 |
