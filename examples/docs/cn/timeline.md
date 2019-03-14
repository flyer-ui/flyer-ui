## Time Line 时间轴

### 基本使用
::: demo
```html
<template>
    <fly-timeline>
        <fly-timeline-item timestamp='2019-02-15'>
            上证指数 2682.39 （周五）
        </fly-timeline-item>
        <fly-timeline-item timestamp='2019-02-25'>
            上证指数 2961.28 （周一）
        </fly-timeline-item>
        <fly-timeline-item timestamp='2019-03-04'>
            上证指数 3027.58 （周一）
        </fly-timeline-item>
    </fly-timeline>
</template>
```
:::

### 自定义节点样式
::: demo
```html
<template>
    <fly-timeline>
        <fly-timeline-item icon='fly-icon-activity' type='success' timestamp='2019-02-15' hide-timestamp>
            <div class='fly-demo-block__row'>上证指数 2682.39 </div>
            <div class='fly-demo-block__row'>日期:2019-02-15 （周五） </div>
        </fly-timeline-item>
        <fly-timeline-item timestamp='2019-02-25' color='#eb6709' hide-timestamp>
            <div class='fly-demo-block__row'>上证指数 2961.28 </div>
            <div class='fly-demo-block__row'>日期:2019-02-25 （周一） </div>
        </fly-timeline-item>
        <fly-timeline-item timestamp='2019-03-04' type='danger' size='large' hide-timestamp>
           <div class='fly-demo-block__row'>上证指数 3027.58 </div> 
           <div class='fly-demo-block__row'>日期:2019-03-04 （周一） </div>
        </fly-timeline-item>
        <fly-timeline-item timestamp='2019-03-04' type='danger' placement='bottom'>
           <i slot='dot' class='fly-icon-clock'></i>
           <div class='fly-demo-block__row'>上证指数 3102.10 (周三)</div> 
        </fly-timeline-item>
    </fly-timeline>
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
type | String | defalt | default / primary / success / warning / danger / info | 节点类型 |
placement | String | top | top / bottom | 时间戳位置 |
color | String | - | - | 节点颜色 |
size | String | normal | normal / large | 节点尺寸 |
icon | String | - | - | 节点图标 |

### TimeLine Item - Slot

名称  | 说明 |
---------|----------
 default | Timeline-Item 的内容
 dot | 自定义节点