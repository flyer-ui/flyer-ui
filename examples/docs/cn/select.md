## Select 下拉框

### 基本使用

:::demo
```html
<fly-select placeholder='请选择'>
    <fly-option label='深圳' value='SZ'>
    </fly-option>
    <fly-option label='东莞' value='DG'>
    </fly-option>
    <fly-option label='广州' value='GZ'>
    </fly-option>
    <fly-option label='佛山' value='FS'>
    </fly-option>
    <fly-option label='清远' value='QY'>
    </fly-option>
    <fly-option label='河源' value='HY'>
    </fly-option>
</fly-select>
```
:::


### Select - 可定制属性

属性名称 | 类型 | 默认值  | 可选值  | 说明  |
---------|----------|---------|---------|--------|
value / v-model | String / Number | - | - | 绑定的值 |
disabled | Boolean | false  | true / false | 是否设置为禁用  |
readonly | Boolean | false  | true / false | 是否设置为只读  |
clearable | Boolean | flase | true / false | 是否设置为可清除 |
multiple | Boolean | false | true / false | 是否设置为多选 |
placeholder | String | - | - | 设置占位提示文本 |

### Option - 可定制属性

属性名称 | 类型 | 默认值  | 可选值  | 说明  |
---------|----------|---------|---------|--------|
disabled | Boolean | false  | true / false | 是否设置为禁用  |
label | String/Number | -  | - | 是否设置为只读  |
value | String/Number | - | - | 是否设置为可清除 |
