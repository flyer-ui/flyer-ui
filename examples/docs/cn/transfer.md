<script>
 module.exports =  {
        data(){
            const data = []
            for(let i=0;i<20;i++){
                data.push({
                    value:i,
                    name: '选项'+i,
                    disabled: false
                })
            }
            return {
                data:data,
                data1:data,
                selectedKeys:[],
                selectedKeys1:[]
            }
        },
        methods:{
            handleChange(selectedItems){
                console.log("selectedKeys",this.selectedKeys)
                console.log("selectedItems",selectedItems)
            }
        },
        mounted(){
        }
    }
</script>

## Transfer 穿梭框

### 基本使用

::: demo
```html
<template>
    <fly-transfer v-model='selectedKeys' @change="handleChange" :data='data'>
    </fly-transfer>
</template>
```
```js
export default {
    data(){
        const data = []
        for(let i=0;i<20;i++){
            data.push({
                value:i,
                name: '选项'+i,
                disabled: false
            })
        }
        return {
            data:data,
            selectedKeys:[]
        }
    },
    methods:{
        handleChange(selectedItems){
            console.log("selectedKeys",this.selectedKeys)
            console.log("selectedItems",selectedItems)
        }
    },
    mounted(){
    }
}
```
:::

### 设置默认选中

::: demo
```html
<template>
    <fly-transfer 
        :targets-default='[4]'
        :has-select-all='false' 
        v-model='selectedKeys1' 
        @change="handleChange" :data='data1'>
    </fly-transfer>
</template>
```
```js
export default {
    data(){
        const data = []
        for(let i=0;i<20;i++){
            data.push({
                value:i,
                name: '选项'+i,
                disabled: false
            })
        }
        return {
            data1:data,
            selectedKeys1:[]
        }
    },
    methods:{
        handleChange(selectedItems){
            console.log("selectedKeys",this.selectedKeys)
            console.log("selectedItems",selectedItems)
        }
    },
    mounted(){
    }
}
```
:::

### Transfer - 可定制属性

| 属性名称      | 类型    | 默认值 | 可选值                                                | 说明           |
| ------------- | ------- | ------ | ----------------------------------------------------- | -------------- |
| v-model          | Array  | - | - | 要绑定的值       |
| data          | Array  | [] | - |   穿梭框的数据源，每个元素的数据结构为：{name,value,disabled} |
| titles     | Array  | ['来源','目标']     | -  | 穿梭框的标题，数组索引位置对应穿梭框从左右到的位置。         |
| has-select-all | Boolean | true  | -          | 是否可以全选所有 |
| targets-default | Array[String] | -  | -          | targets面板加载时配置默认项，数据组中的值与数据源data中的value对应 |

### Transfer - 可定制的事件

| 事件名称 | 返回值 | 说明             |
| -------- | ------ | ---------------- |
| change | 选中的穿梭值对象      | 数据穿梭后触发的事件。 |

### Transfer - Slot

| 名称    | 说明                 |
| ------- | -------------------- |
| sources-bottom | 来源栏底部的slot |
| targets-bottom | 目标栏底部的slot |