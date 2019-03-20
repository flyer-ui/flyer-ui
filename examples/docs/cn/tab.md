## Tab 选项卡

### 基本使用

::: demo
```html
<fly-tab>
    <fly-tab-pane class='is-active' label='Tab1'>1</fly-tab-pane>
    <fly-tab-pane label='Tab2'>2</fly-tab-pane>
    <fly-tab-pane label='Tab3'>3</fly-tab-pane>
</fly-tab>
```
:::


### Tab - 可定制属性

属性名称 | 类型 | 默认值  | 可选值  | 说明  |
---------|----------|---------|---------|--------|
value / v-model | String | - | - | 绑定的值
type |  String  | - | simple | 卡片的风格  |
closable | Boolean | false  | true / false | 标签是否可关闭  |

### Tab - 可定制的事件

事件名称 | 返回值 | 说明
---------|----------|---------
 on-click | - |  在点击选项卡时

 ### Tab-pane - 可定制属性

属性名称 | 类型 | 默认值  | 可选值  | 说明  |
---------|----------|---------|---------|--------|
label |  String  | - | - | 选项卡标题  |
disabled | Boolean | false  | true / false | 是否禁用 |
name | String | -  | - | 与选项卡 activeName 对应的标识符，表示选项卡别名,如未配置则默认按排列顺序数字标识 |
closable | Boolean | false  | true / false | 标签是否可关闭 |