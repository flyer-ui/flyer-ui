<script>
 module.exports =  {
        data(){
            return {
                data1:[],
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
            handleRowClick(args){
                console.log(args)
            },
            handleSelectionChange(keys,data){
                console.log('selection-change',keys,data)
            },
            handleSortChange(sortField){
                console.log('sort-change',sortField)
            },
            handleFilterChange(filtered){
                console.log('filter-change',filtered)
            },
            handleSort(prov,next){
                if(prov.id>next.id){
                    return 1
                }else if(prov.id<next.id){
                    return -1
                }else{
                    return 0
                }
            },
            handleFormatIndex(index){
                return index * 2
            }
        },
        mounted(){
            if(this.data1.length===0){
                setTimeout(()=>{
                    console.log('执行赋值操作')
                    this.data1 = [{
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
                    }]
                },1000*2)
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
        @row-click='handleRowClick'
        @selection-change='handleSelectionChange'
        @sort-change='handleSortChange'
        @filter-change='handleFilterChange'
        style="width: 100%">
        <fly-table-column 
        width="50" 
        type='index' 
        :index='1'
        label='排序'>
        </fly-table-column>
        <fly-table-column
            prop='id'
            type='checkbox'
            width="40">
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
            :sort-method='handleSort'
            filterable
            label="地址">
            <template slot-scope='scope'>
                <fly-icon name='nickname'></fly-icon>:{{scope.row.address}}
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
        handleRowClick(args){
            console.log(args)
        },
        handleSelectionChange(keys,data){
            console.log('selection-change',keys,data)
        },
        handleSort(prov,next){
            if(prov.id>next.id){
                return 1
            }else if(prov.id<next.id){
                return -1
            }else{
                return 0
            }
        },
        handleFormatIndex(index){
            return index * 2
        }
    }
}
```
:::

### 异步加载模板并自定义序列号

::: demo
```html
<template>
    <fly-table
        :data="data1"
        @selection-change='handleSelectionChange'
        @sort-change='handleSortChange'
        @filter-change='handleFilterChange'
        style="width: 100%">
        <fly-table-column 
            width="50" 
            type='index' 
            :index='1'
            :formatIndex='handleFormatIndex'
            label='排序'>
        </fly-table-column>
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
            :sort-method='handleSort'
            filterable
            label="地址">
            <template slot-scope='scope'>
                <fly-icon name='nickname'></fly-icon>:{{scope.row.address}}
            </template>
        </fly-table-column>
    </fly-table>
</template>
```
```js
export default {
    data(){
        return {
            data:[]
        }
    },
    methods:{
        handleSelectionChange(keys,data){
            console.log('selection-change',keys,data)
        },
        handleSort(prov,next){
            if(prov.id>next.id){
                return 1
            }else if(prov.id<next.id){
                return -1
            }else{
                return 0
            }
        }
    },
    mounted(){
        if(this.data1.length===0){
            setTimeout(()=>{
                console.log('执行赋值操作')
                this.data1 = [{
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
                }]
            },1000*2)
        }
    }
}
```
:::

### 带斑纹的表格

::: demo
```html
<template>
    <fly-table
        :data="data"
        @row-click='handleRowClick'
        @selection-change='handleSelectionChange'
        @sort-change='handleSortChange'
        @filter-change='handleFilterChange'
        stripe
        style="width: 100%">
        <fly-table-column 
        width="50" 
        type='index' 
        :index='1'
        label='排序'>
        </fly-table-column>
        <fly-table-column
            prop='id'
            type='checkbox'
            width="40">
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
            :sort-method='handleSort'
            filterable
            label="地址">
            <template slot-scope='scope'>
                <fly-icon name='nickname'></fly-icon>:{{scope.row.address}}
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
        handleRowClick(args){
            console.log(args)
        },
        handleSelectionChange(keys,data){
            console.log('selection-change',keys,data)
        },
        handleSort(prov,next){
            if(prov.id>next.id){
                return 1
            }else if(prov.id<next.id){
                return -1
            }else{
                return 0
            }
        },
        handleFormatIndex(index){
            return index * 2
        }
    }
}
```
:::
### Table - 可定制属性

| 属性名称        | 类型                      | 默认值 | 可选值       | 说明             |
| --------------- | ------------------------- | ------ | ------------ | ---------------- |
| data | array | -      | -            | 显示的数据         |
| empty-text | string | -      | -            | 没有数据时显示的文本         |
| stripe | Boolean | false      | true / false           | 是否带有斑纹         |

### Table - 可定制的事件

| 事件名称  | 返回值     | 说明                       |
| --------- | ---------- | -------------------------- |
| selection-change | 选中的所有值 | 表格列为checkbox时，选中后触发的事件。 |
| sort-change | - | 表格排序后触发的事件。 |
| row-click | - | 点击行时触发的事件,带一个Object类型的参数：{row:object,column:object,event:MouseEvent} |

### Table-Column - 可定制属性

| 属性名称        | 类型                      | 默认值 | 可选值       | 说明             |
| --------------- | ------------------------- | ------ | ------------ | ---------------- |
| type | checkbox,index | -      | -            |  指定列的类型，目前可定制checkbox       |
| index | Number | 0 | - | 类型为index时，指定的起始页，默认从0开始 |
| formatIndex | Function | - | - | 类型为index时，自定义显示的格式|
| prop | array | -      | -            |  对应列内容的字段名，也可以使用 property 属性        |
| label | array | -      | -            | 显示的标题         |
| width | array | -      | -            | 对应列的宽度       |

