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
  <fly-tree
    :data="tree1"
    label="label"
    @node-click="handleNodeClick"
    :props="defaultProps"
  >
  </fly-tree>
</template>
<script>
  export default {
    data() {
      return {
        tree1: [
          {
            label: "node 1",
            children: [
              {
                label: "node 1.1",
                children: [
                  {
                    label: "node 1.1.1",
                    children: []
                  }
                ]
              }
            ]
          },
          {
            label: "node 2",
            children: [
              {
                label: "node 2.1",
                children: [
                  {
                    label: "node 2.1.1",
                    children: []
                  }
                ]
              },
              {
                label: "node 2.2",
                children: [
                  {
                    label: "node 2.2.1",
                    children: [
                      {
                        label: "node 2.2.1.1",
                        children: [
                          {
                            label: "node 2.2.1.1.1",
                            children: []
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
        defaultProps: {
          label: "label",
          children: "children"
        }
      };
    },
    methods: {
      handleNodeClick(label) {
        console.log("handleNodeClick", label);
      }
    }
  };
</script>
```

:::

### 可选择

::: demo

```html
<template>
  <fly-tree
    :data="tree1"
    label="label"
    @node-click="handleNodeClick"
    show-checkbox
    :props="defaultProps"
  >
  </fly-tree>
</template>
<script>
  export default {
    data() {
      return {
        tree1: [
          {
            label: "node 1",
            children: [
              {
                label: "node 1.1",
                children: [
                  {
                    label: "node 1.1.1",
                    children: []
                  }
                ]
              }
            ]
          },
          {
            label: "node 2",
            children: [
              {
                label: "node 2.1",
                children: [
                  {
                    label: "node 2.1.1",
                    children: []
                  }
                ]
              },
              {
                label: "node 2.2",
                children: [
                  {
                    label: "node 2.2.1",
                    children: [
                      {
                        label: "node 2.2.1.1",
                        children: [
                          {
                            label: "node 2.2.1.1.1",
                            children: []
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
        defaultProps: {
          label: "label",
          children: "children"
        }
      };
    },
    methods: {
      handleNodeClick(label) {
        console.log("handleNodeClick", label);
      }
    }
  };
</script>
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
