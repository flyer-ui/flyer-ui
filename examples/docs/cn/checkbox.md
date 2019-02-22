## Checkbox 多选框

### 基础用例
::: demo
```html
<p>
    <fly-checkbox v-model='test' name='demo' label='复选框'>
        复选框
    </fly-checkbox>
    <div>{{test}}</div>
<script>
    export default {
        name:"test1",
        data(){
            return {
                test:false
            }
        }
    }
</script>
</p>
```
:::

### 禁用状态
::: demo 
```html
<fly-checkbox disabled>禁用状态</fly-checkbox>
<fly-checkbox checked disabled>已选禁用状态</fly-checkbox>
```
:::

### 指定选中状态的值
::: demo
```html
<fly-checkbox v-model='citys' label='东莞'>东莞</fly-checkbox>
<!-- <fly-checkbox v-model='citys' label='深圳'>深圳</fly-checkbox>
<fly-checkbox v-model='citys' label='上海'>上海</fly-checkbox> -->
<script>
    export default {
        name:"test2",
        data(){
            return {
                citys:[]
            }
        }
    }
</script>
```
:::


### 可定制属性

属性名称 | 类型 | 默认值  | 可选值  | 说明  |
---------|----------|---------|---------|--------|
value / v-model | String / Number / Boolean | - | - | 绑定的值
label | String / Number / Boolean  | - | - | 选中状态的值（只有在checkbox-group 或者绑定对象类型为数组时有效  |
disabled | Boolean | false  | - | 是否设置为禁用  |
true-label | String / Number | -  | - | 选中时的值  |
false-label  |  String / Number  | -  | -  | 没有选中时的值  |
name  |  String  | -  | -  | 原生 name 属性  |
checked  |  Boolean  | false  | -  | 当前是否勾选
indeterminate | Boolean | - | - | 设置 indeterminate 状态，只负责样式控制 |  

