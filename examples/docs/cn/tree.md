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
                            children:[
                                {
                                    label:'node 1.1.1',
                                    children:[]
                                }
                            ]
                        }
                    ]
                },
                {
                    label:'node 2',
                    children:[
                        {
                            label:'node 2.1',
                            children:[
                                {
                                    label:'node 2.1.1',
                                    children:[]
                                }
                            ]
                        },
                        {
                            label:'node 2.2',
                            children:[
                                {
                                    label:'node 2.2.1',
                                    children:[
                                         {
                                            label:'node 2.2.1.1',
                                            children:[
                                                {
                                                    label:'node 2.2.1.1.1',
                                                    children:[]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            defaultProps:{
                label:'label',
                children:'children'
            }
        }
    },
    methods:{
        handleNodeClick(label){
            console.log('handleNodeClick',label)
        }
    }
}
</script>

## Tree 树菜单

### 基础用法
::: demo
```html
<template>
    <fly-tree :data='tree1' label='label' @on-node-click='handleNodeClick' show-checkbox :props='defaultProps'>
    </fly-tree>
</template>
<script>
export default {
    data(){
        return {
            tree1:[
                {
                    label:'node 1',
                    children:[
                        {
                            label:'node 1.1',
                            children:[
                                {
                                    label:'node 1.1.1',
                                    children:[]
                                }
                            ]
                        }
                    ]
                },
                {
                    label:'node 2',
                    children:[
                        {
                            label:'node 2.1',
                            children:[
                                {
                                    label:'node 2.1.1',
                                    children:[]
                                }
                            ]
                        },
                        {
                            label:'node 2.2',
                            children:[
                                {
                                    label:'node 2.2.1',
                                    children:[
                                         {
                                            label:'node 2.2.1.1',
                                            children:[
                                                {
                                                    label:'node 2.2.1.1.1',
                                                    children:[]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            defaultProps:{
                label:'label',
                children:'children'
            }
        }
    },
   methods:{
        handleNodeClick(label){
            console.log('handleNodeClick',label)
        }
    }

}
</script>
```
:::

### 可选择


### 禁用状态


### 自定义节点　


### 默认展开


### 设置节点选中


### 手风琴模式


### 自定义节点图标