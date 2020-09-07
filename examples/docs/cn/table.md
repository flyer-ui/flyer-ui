<script>
 module.exports =  {
        data(){
            return {
                data:[{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
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
            prop="date"
            label="日期"
            width="180">
        </fly-table-column>
        <fly-table-column
            prop="name"
            label="姓名"
            width="180">
        </fly-table-column>
        <fly-table-column
            prop="address"
            label="地址">
            <template slot-scope='row'>
                address:{{row.address}}
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
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    }
}
```
:::

### Table - 可定制属性

| 属性名称        | 类型                      | 默认值 | 可选值       | 说明             |
| --------------- | ------------------------- | ------ | ------------ | ---------------- |
| data | array | -      | -            | 显示的数据         |

### Table-Column - 可定制的事件

| 事件名称  | 返回值     | 说明                       |
| --------- | ---------- | -------------------------- |
| prop |  | 对应列内容的字段名，也可以使用 property 属性 |
| label |  | 显示的标题 |
| width |  | 对应列的宽度 |
