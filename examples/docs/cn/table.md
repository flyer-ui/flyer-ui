<script>
 module.exports =  {
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
</script>
## Table 表格

### 基本使用

::: demo
```html
<template>
    <fly-table
        :data="data"
        style="width: 100%">
        <fly-table-column
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
:::

### Table - 可定制属性

| 属性名称        | 类型                      | 默认值 | 可选值       | 说明             |
| --------------- | ------------------------- | ------ | ------------ | ---------------- |
| data | array | -      | -            | 显示的数据         |

### Table-Column - 可定制属性

| 属性名称        | 类型                      | 默认值 | 可选值       | 说明             |
| --------------- | ------------------------- | ------ | ------------ | ---------------- |
| type | checkbox | -      | -            |  指定列的类型，目前可定制checkbox       |
| prop | array | -      | -            |  对应列内容的字段名，也可以使用 property 属性        |
| label | array | -      | -            | 显示的标题         |
| width | array | -      | -            | 对应列的宽度       |

