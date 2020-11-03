<script>
module.exports =  {
        data(){
            return {
                value1:0,
                value2:3,
                value3:2.5,
                value4:2,
                value5:2,
                value6:3,
                value7:3.5,
                value8:2,
                value9:2,
                value10:2,
                value11:2,
                value12:2,
                value13:2
            }
        },
        methods:{
            handleChange(value){
                console.log(value)
            }
        }
    }
</script>

## Rate 评分组件

### 基本使用

::: demo

```html
<template>
  <fly-rate v-model="value1"></fly-rate>
</template>
<script>
  export default {
    data() {
      return {
        value1: 0
      };
    }
  };
</script>
```

:::

### 评分效果

::: demo

```html
<template>
  <fly-rate v-model="value2"></fly-rate>
</template>
<script>
  export default {
    data() {
      return {
        value2: 3
      };
    }
  };
</script>
```

:::

### 半星效果

::: demo

```html
<template>
  <fly-rate allow-half v-model="value3"></fly-rate>
</template>
<script>
  export default {
    data() {
      return {
        value3: 2.5
      };
    }
  };
</script>
```

:::

### 只读效果

::: demo

```html
<template>
  <fly-rate disabled v-model="value4"></fly-rate>
</template>
<script>
  export default {
    data() {
      return {
        value4: 2
      };
    }
  };
</script>
```

:::

### 自定义图标

::: demo

```html
<template>
  <fly-rate icon="fly-icon-heart" v-model="value5"></fly-rate>
  <br />
  <fly-rate
    icon="fly-icon-heart"
    @on-change="handleChange"
    v-model="value6"
    allow-half
  ></fly-rate>
</template>
<script>
  export default {
    data() {
      return {
        value5: 3,
        value6: 2,
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
```

:::

### 文字代替图标

::: demo

```html
<template>
  <p>
  <fly-rate icon="fly-icon-heart" v-model="value7" character="A"></fly-rate>
  </p>
  <p>
  <fly-rate icon="fly-icon-heart" v-model="value8" character="好"></fly-rate>
  </p>
</template>
<script>
  export default {
    data() {
      return {
        value7: 2,
        value8: 2
      };
    }
  };
</script>
```

:::

### 尺寸

::: demo

```html
<template>
  <p>
  <fly-rate
    icon="fly-icon-heart"
    size="small"
    v-model="value9"
    allow-half
  ></fly-rate>
  </p>
  <p>
  <fly-rate
    icon="fly-icon-heart"
    size="medium"
    v-model="value10"
    allow-half
  ></fly-rate>
  </p>
  <p>
  <fly-rate
    icon="fly-icon-heart"
    size="large"
    v-model="value11"
    allow-half
  ></fly-rate>
  </p>
</template>
<script>
  export default {
    data() {
      return {
        value9: 2,
        value10: 2,
        value11: 2
      };
    }
  };
</script>
```

:::

### 显示文字

::: demo

```html
<template>
  <p>
  <fly-rate icon="fly-icon-heart" v-model="value12" show-text allow-half>
    <template slot-scope="prop">
      {{prop.value}} 星
    </template>
  </fly-rate>
  </p>
  <p>
  <fly-rate :max="10" v-model="value13" show-text allow-half>
    <template slot-scope="prop">
      {{prop.value * 10 }} %
    </template>
  </fly-rate>
  </p>
</template>
<script>
  export default {
    data() {
      return {
        value12: 2,
        value13: 2
      };
    }
  };
</script>
```

:::

### Rate - 可定制属性

| 属性名称        | 类型    | 默认值        | 可选值               | 说明                  |
| --------------- | ------- | ------------- | -------------------- | --------------------- |
| value / v-model | Number  | -             | -                    | 绑定的值,控制是否显示 |
| max             | Number  | 5             | -                    | 最大的分值            |
| allow-half      | Boolean | false         | -                    | 是否允许半星          |
| disabled        | Boolean | false         | 是否为只读           |
| icon            | String  | fly-icon-star | -                    | 自定义图标            |
| character       | String  | -             | -                    | 用文字代替图标        |
| show-text       | Boolean | false         | -                    | 显示数值              |
| size            | String  | normal        | small / medium / large | 显示大小              |

### Rate - 可定制事件

| 事件名称  | 返回值     | 说明                       |
| --------- | ---------- | -------------------------- |
| change | 更新后的值 | 在点击选项状态变更时触发。 |
