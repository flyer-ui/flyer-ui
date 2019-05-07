<script>
module.exports={
    data(){
        return {
            tree1:[
                {
                    label:'node 1',
                    children:[
                        {
                            label:'node 1.1',
                            childrend:[
                                {
                                    label:'node 1.1.1'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
</script>

## Tree 树菜单
::: demo
```html
<template>
    <fly-tree :data='tree1'>
    </fly-tree>
</template>
<script>
</script>
```
:::

### 基础用法


### 可选择


### 禁用状态


### 自定义节点　


### 默认展开


### 设置节点选中


### 手风琴模式


### 自定义节点图标