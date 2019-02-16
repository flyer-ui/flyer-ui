## Checkbox 多选框
```html
<template>
<p>
    <fly-checkbox name='demo' label='复选框'>
        复选框
    </fly-checkbox>
    <fly-checkbox name='demo1' checked>
        复选框2
    </fly-checkbox>
    <fly-checkbox name='demo2' checked disabled>
        禁选状态
    </fly-checkbox>
    <fly-checkbox name='demo3' disabled>
        禁选状态2
    </fly-checkbox>
</p>
</template>
```
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
