## Time Line 时间轴

### 基本使用

::: demo
```html
<template>
    <fly-time-line>
        <fly-time-line-item timestamp='2019-03-14' color='#ddd'>
            Item1
        </fly-time-line-item>
        <fly-time-line-item timestamp='2019-03-15' type='primary' size='large'>
            Item2
        </fly-time-line-item>
        <fly-time-line-item timestamp='2019-03-16' type='info'>
            Item3
        </fly-time-line-item>
    </fly-time-line>
</template>
```
:::

### TimeLine - 可定制属性

属性名称 | 类型 | 默认值  | 可选值  | 说明  |
---------|----------|---------|---------|--------|
reverse | Boolean | true | true / false | 指定节点排序方向，默认为正序

### TimeLine Item- 可定制属性

属性名称 | 类型 | 默认值  | 可选值  | 说明  |
---------|----------|---------|---------|--------|
timestamp | String | - | - | 时间戳 |
hide-timestap | Boolean | false | - | 是否隐藏时间戳 |
type | String | - | primary / success / warning / danger / info | 节点类型 |
placement | String | top | top / bottom | 时间戳位置 |
color | String | - | - | 节点颜色 |

 | String | normal | normal / large | 节点尺寸 |
icon | String | - | - | 节点图标 |

### TimeLine Item - Slot

名称  | 说明 |
---------|----------
 default | Timeline-Item 的内容
 dot | 自定义节点