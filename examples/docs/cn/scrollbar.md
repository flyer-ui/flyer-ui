<script>
module.exports = {
    data(){
        return{
            list1:100,
            list2:1100
        }
    },
    methods:{
        handleMouseWheel(){
            console.log('滚动条滑轮事件')
        },
        handleScroll(){
          console.log('触发滚动条事件')
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
  <fly-row :gutter='10'>
    <fly-col>
      <fly-scrollbar @mousewheel='handleMouseWheel' class='fly-scrollbar-demo1'>
          <div v-for="(item,index) in list1" :key='index'>
              {{item}}
          </div>
      </fly-scrollbar>
    </fly-col>
    <fly-col>
      <fly-scrollbar @scroll='handleScroll' class='fly-scrollbar-demo2'>
          <div v-for="(item,index) in list2" :key='index'>
              {{item}}
          </div>
      </fly-scrollbar>
    </fly-col>
  <fly-row>
</template>
<script>
  export default {
    data() {
      return {
            list1:100,
            list2:1100
      }
    }
  };
</script>
<style scoped>
    .fly-scrollbar-demo2{
        height:400px;
        border:1px solid #ccc;
    }
    .fly-scrollbar-demo1{
        height:400px;
        border:1px solid #ccc;
    }
</style>
```


:::

### 单选框 - 可定制的事件

| 事件名称  | 返回值     | 说明                       |
| --------- | ---------- | -------------------------- |
| scroll | 滚动条事件 |  |
| mousewheel | 滚动条滑轮事件 |  |

