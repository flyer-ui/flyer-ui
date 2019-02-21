## Checkbox 多选框

### 基础用例
::: demo
```html
<p>
    <fly-checkbox v-model='value' name='demo' label='复选框'>
        复选框
    </fly-checkbox>
    <div>{{value}}</div>
<script>
    export default {
        data(){
            return {
                value:false
            }
        }
    }
</script>
</p>
```
:::

### 可定制属性

属性名称 | 类型 | 默认值  | 可选值  | 说明  |
---------|----------|---------|---------|--------|
label | String / Number / Boolean  | - | - | 选中状态的值（只有在checkbox-group 或者绑定对象类型为数组时有效  |
disabled | Boolean | false  | - | 是否设置为禁用  |
true-label | String / Number | -  | - | 选中时的值  |
false-label  |  String / Number  | -  | -  | 没有选中时的值  |
name  |  String  | -  | -  | 原生 name 属性  |
checked  |  Boolean  | false  | -  | 当前是否勾选
indeterminate | Boolean | - | - | 设置 indeterminate 状态，只负责样式控制 |  

