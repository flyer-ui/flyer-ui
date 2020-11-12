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
                selectedKeys1:[],
                targetDefault:[4],
                sourcesDisabled:false
            }
        },
        methods:{
            handleChange(selectedItems,changeItems){
                console.log("selectedKeys",this.selectedKeys)
                console.log("selectedItems",selectedItems)
                console.log("changeItems",changeItems)
            },
            handleChange2(selectedItems,changeItems){
                if(selectedItems.length>=7){
                    this.sourcesDisabled = true
                    this.$refs.transfer && this.$refs.transfer.setTargets(selectedItems.slice(0,7))
                    this.$message.warning('最多只能设置7个')
                }else{
                    this.sourcesDisabled = false
                }
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
        handleChange(selectedItems,changeItems){
            console.log("selectedKeys",this.selectedKeys)
            console.log("selectedItems",selectedItems)
            console.log("changeItems",changeItems)
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
        handleChange(selectedItems,changeItems){
            console.log("selectedKeys",this.selectedKeys)
            console.log("selectedItems",selectedItems)
            console.log("changeItems",changeItems)
        }
    },
    mounted(){
    }
}
```
:::

### 最多只能选择 7 个

:::demo
```html
<template>
    <fly-transfer 
        ref='transfer'
        :targets-default='targetDefault'
        :has-select-all='false' 
        v-model='selectedKeys1' 
        :sourcesDisabled='sourcesDisabled'
        @change="handleChange2" :data='data1'>
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
            sourcesDisabled:false,
            selectedKeys1:[]
        }
    },
    methods:{
        handleChange2(selectedItems,changeItems){
            if(selectedItems.length>=7){
                this.sourcesDisabled = true
                this.$refs.transfer && this.$refs.transfer.setTargets(selectedItems.slice(0,7))
                this.$message.warning('最多只能设置7个')
            }else{
                this.sourcesDisabled = false
            }
        }
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
| has-select-all | Boolean | true  | true / false          | 是否可以全选所有 |
| sources-disabled | Boolean | false | true / false | 是否禁用sources面板 |
| targets-disabled | Boolean | false | true / false | 是否禁用targets面板 |
| targets-default | Array[String] | -  | -          | targets面板加载时配置默认项，数据组中的值与数据源data中的value对应 |

### Transfer - 可定制的事件

| 事件名称 | 返回值 | 说明             |
| -------- | ------ | ---------------- |
| change | (selectedItems:选中框里所有的项,changeItems:当前的穿梭数据项)      | 数据穿梭后触发的事件。 |

### Transfer - 可定制的方法

| 方法名称 | 参数 | 说明             |
| -------- | ------ | ---------------- |
| setTargets | (items:要设置值的集合)      | 手动指定targets里的数据集 |

### Transfer - Slot

| 名称    | 说明                 |
| ------- | -------------------- |
| sources-bottom | 来源栏底部的slot |
| targets-bottom | 目标栏底部的slot |