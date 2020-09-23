<script>
 module.exports =  {
        data(){
            return {
                data1:[{
                    id:10001,
                    date: '2020-09-08',
                    name: '曾阿牛',
                    address: '深圳市南山区迈科龙大厦 601 室'
                },{
                    id:10002,
                    date: '2020-09-09',
                    name: '曾阿牛',
                    address: '深圳市南山区迈科龙大厦 602 室'
                },{
                    id:10000,
                    date: '2020-09-10',
                    name: '曾阿牛',
                    address: '深圳市南山区迈科龙大厦 603 室'
                },{
                    id:10003,
                    date: '2020-09-11',
                    name: '曾阿牛',
                    address: '深圳市南山区迈科龙大厦 604 室'
                } ],
                data:[{
                    id:10001,
                    date: '2020-09-08',
                    name: '曾阿牛',
                    address: '深圳市南山区迈科龙大厦 601 室'
                },{
                    id:10002,
                    date: '2020-09-09',
                    name: '曾阿牛',
                    address: '深圳市南山区迈科龙大厦 602 室'
                },{
                    id:10000,
                    date: '2020-09-10',
                    name: '曾阿牛',
                    address: '深圳市南山区迈科龙大厦 603 室'
                },{
                    id:10003,
                    date: '2020-09-11',
                    name: '曾阿牛',
                    address: '深圳市南山区迈科龙大厦 604 室'
                } ],
                data2:[],
                filters:[
                    {text:'深圳市',value:'深圳市'},
                    {text:'东莞市',value:'东莞市'}
                ],
                filterNo:[
                    {text:'10000',value:'10000'},
                    {text:'10001',value:'10001'},
                    {text:'10002',value:'10002'},
                    {text:'10003',value:'10003'}
                ],
                filterName:[
                    {text:'张三丰',value:'张三丰'},
                    {text:'曾阿牛',value:'曾阿牛'},
                    {text:'张无忌',value:'张无忌'},
                    {text:'金毛狮王',value:'金毛狮王'}
                ]
            }
        },
        methods:{
            handleSelectionChange(keys,data){
                console.log('selection-change',keys,data)
            },
            handleSortChange(){
                console.log('sort-change')
            },
            handleFilterChange(filtered){
                console.log('filter-change',filtered)
            }
        }
    }
</script>
## Table 表格

### 基本使用

::: demo
```html
<template>
    <fly-table
        :data="data"
        @selection-change='handleSelectionChange'
        @sort-change='handleSortChange'
        @filter-change='handleFilterChange'
        style="width: 100%">
        <fly-table-column
            prop='id'
            type='checkbox'
            width="30">
        </fly-table-column>
        <fly-table-column
            prop="id"
            label="编号"
            sortable
            filterable
            :filters="filterNo"
            width="80">
        </fly-table-column>
        <fly-table-column
            prop="date"
            label="日期"
            sortable
            width="180">
        </fly-table-column>
        <fly-table-column
            prop="name"
            label="姓名"
            filterable
            :filterMultiple='false'
            :filters="filterName"
            width="180">
        </fly-table-column>
        <fly-table-column
            prop="address"
            :filters="filters"
            sortable
            filterable
            label="地址">
            <template slot-scope='row'>
                <fly-icon name='nickname'></fly-icon>:{{row.address}}
            </template>
        </fly-table-column>
    </fly-table>
</template>
```
```js
export default {
    data(){
        return {
            data:[{
                id:10000,
                date: '2020-09-08',
                name: '曾阿牛',
                address: '深圳市南山区迈科龙大厦 601 室'
            },{
                id:10001,
                date: '2020-09-09',
                name: '曾阿牛',
                address: '深圳市南山区迈科龙大厦 602 室'
            },{
                id:10002,
                date: '2020-09-10',
                name: '曾阿牛',
                address: '深圳市南山区迈科龙大厦 603 室'
            },{
                id:10003,
                date: '2020-09-11',
                name: '曾阿牛',
                address: '深圳市南山区迈科龙大厦 604 室'
            } ]
        }
    },
    methods:{
        handleSelectionChange(keys,data){
            console.log('selection-change',keys,data)
        }
    }
}
```
:::

<!-- ### 自定义模板
::: demo
```html
<template>
    <fly-table
        :data="data1"
        style="width: 100%">
        <fly-table-column
            prop='id'
            type='checkbox'
            width="30">
        </fly-table-column>
        <fly-table-column
            prop="date"
            label="日期"
            sortable
            width="180">
        </fly-table-column>
        <fly-table-column
            prop="name"
            label="姓名"
            filterable
            width="180">
        </fly-table-column>
        <fly-table-column
            prop="address"
            sortable
            filterable
            label="地址">
            <template slot-scope='row'>
                <fly-icon name='nickname'></fly-icon>:{{row.address}}
            </template>
        </fly-table-column>
    </fly-table>
</template>
```
```js
export default {
    data(){
        return {
            data:[{
                id:10000,
                date: '2020-09-08',
                name: '曾阿牛',
                address: '深圳市南山区迈科龙大厦 601 室'
            },{
                id:10001,
                date: '2020-09-09',
                name: '曾阿牛',
                address: '深圳市南山区迈科龙大厦 602 室'
            },{
                id:10002,
                date: '2020-09-10',
                name: '曾阿牛',
                address: '深圳市南山区迈科龙大厦 603 室'
            },{
                id:10003,
                date: '2020-09-11',
                name: '曾阿牛',
                address: '深圳市南山区迈科龙大厦 604 室'
            } ]
        }
    }
}
```
::: -->

### Table - 可定制属性

| 属性名称        | 类型                      | 默认值 | 可选值       | 说明             |
| --------------- | ------------------------- | ------ | ------------ | ---------------- |
| data | array | -      | -            | 显示的数据         |
| empty-text | string | -      | -            | 没有数据时显示的文本         |

### Table - 可定制的事件

| 事件名称  | 返回值     | 说明                       |
| --------- | ---------- | -------------------------- |
| selection-change | 选中的所有值 | 表格列为checkbox时，选中后触发的事件。 |
| sort-change | - | 表格排序后触发的事件。 |

### Table-Column - 可定制属性

| 属性名称        | 类型                      | 默认值 | 可选值       | 说明             |
| --------------- | ------------------------- | ------ | ------------ | ---------------- |
| type | checkbox | -      | -            |  指定列的类型，目前可定制checkbox       |
| prop | array | -      | -            |  对应列内容的字段名，也可以使用 property 属性        |
| label | array | -      | -            | 显示的标题         |
| width | array | -      | -            | 对应列的宽度       |

