# Button（按钮）

## Type （类型）

::: demo 可以通过定制不同的 `type` 得到不同的类型按钮

```html
<fly-button>Default</fly-button>
<fly-button type="primary">主要按钮</fly-button>
<fly-button type="warning">警告按钮</fly-button>
<fly-button type="danger">危险按钮</fly-button>
<fly-button type="success">成功按钮</fly-button>
<fly-button type="info">信息按钮</fly-button>
```

:::

## Plain （素按钮）

::: demo 可以通过设置`plain`属性，得到简约的按钮

```html
<fly-button plain>默认按钮</fly-button>
<fly-button plain type="primary">主要按钮</fly-button>
<fly-button plain type="warning">警告按钮</fly-button>
<fly-button plain type="danger">危险按钮</fly-button>
<fly-button plain type="success">成功按钮</fly-button>
<fly-button plain type="info">信息按钮</fly-button>
```

:::

## Size（大小）

::: demo

```html
<p>
  <fly-button size="large" plain>大号按钮</fly-button>
  <fly-button size="medium" plain>中等按钮</fly-button>
  <fly-button size="small" plain>小按钮</fly-button>
  <fly-button size="mini" plain>迷你按钮</fly-button>
</p>
<p>
  <fly-button type='primary' size="large" round plain>大号按钮</fly-button>
  <fly-button type='warning' size="medium" round plain>中等按钮</fly-button>
  <fly-button type='success' size="small" round plain>小按钮</fly-button>
  <fly-button type='info' size="mini" round plain>迷你按钮</fly-button>
</p>
<p>
  <fly-button type='primary' size="large" icon='fly-icon-upload' >上传</fly-button>
  <fly-button type='warning' size="medium" icon='fly-icon-down' >下载</fly-button>
  <fly-button type='success' size="small" icon='fly-icon-edit' >编辑</fly-button>
  <fly-button type='info' size="mini" icon='fly-icon-edit' >编辑</fly-button>
</p>
<p>
  <fly-button type='primary' size="large" icon='fly-icon-upload' round plain>上传</fly-button>
  <fly-button type='warning' size="medium" icon='fly-icon-down' round plain>下载</fly-button>
  <fly-button type='success' size="small" icon='fly-icon-edit' round plain>编辑</fly-button>
  <fly-button type='info' size="mini" icon='fly-icon-edit' round plain>编辑</fly-button>
<p>
```
:::

## Feature（特性）

::: demo

```html
<p>
  <fly-button disabled icon='fly-icon-edit'>禁用</fly-button>
  <fly-button type='primary' icon='fly-icon-edit' disabled>禁用</fly-button>
  <fly-button type='primary' loading>Loading...</fly-button>
</p>

```
:::

## Icon button（图标按钮）

::: demo

```html
<p>
  <fly-button icon='fly-icon-connectdevice' size='large' circle></fly-button>
  <fly-button icon='fly-icon-connectdevice' size='medium' circle></fly-button>
  <fly-button icon='fly-icon-connectdevice' size='small' circle></fly-button>
  <fly-button icon='fly-icon-connectdevice' size='mini' circle></fly-button>
  <fly-button icon='fly-icon-connectdevice' type='primary' size='large' circle></fly-button>
  <fly-button icon='fly-icon-connectdevice' type='warning' size='medium' circle></fly-button>
  <fly-button icon='fly-icon-connectdevice' type='success' size='small' circle></fly-button>
  <fly-button icon='fly-icon-connectdevice' type='danger' size='mini' circle></fly-button>
</p>
```
:::

## Group button（按钮组）

::: demo
```html
<p>
  <fly-button-group>
    <fly-button>Default</fly-button>
    <fly-button type="primary">主要按钮</fly-button>
    <fly-button type="warning">警告按钮</fly-button>
    <fly-button type="danger">危险按钮</fly-button>
    <fly-button type="success">成功按钮</fly-button>
    <fly-button type="info">信息按钮</fly-button>
  </fly-button-group>
</p>
<p>
  <fly-button-group>
    <fly-button type="primary">主要按钮</fly-button>
    <fly-button type="warning">警告按钮</fly-button>
    <fly-button type="danger">危险按钮</fly-button>
    <fly-button type="success">成功按钮</fly-button>
    <fly-button type="primary" icon="fly-icon-back"></fly-button>
    <fly-button type="primary" icon="fly-icon-next"></fly-button>
    <fly-button type="primary" icon="fly-icon-upward"></fly-button>
    <fly-button type="primary" icon="fly-icon-down"></fly-button>
  </fly-button-group>
</p>
```
:::

## Props（定制属性）

| 属性名称    | 类型    | 默认值  | 可选值                                            | 说明                 |
| ----------- | ------- | ------- | ------------------------------------------------- | -------------------- |
| type        | String  | default | default/primary/warning/danger/success/info/white | 定义按钮的类型       |
| native-type | String  | button  | button/submit/reset                               | 原生的 type 属性     |
| disabled    | Boolean | false   | true / false                                      | 是否设置为禁用       |
| icon        | String  | -       | -                                                 | 字体图标的样式名称   |
| round       | Boolean | -       | true / false                                      | 是否设有圆角         |
| circle      | Boolean | -       | true / false                                      | 是否设为圆形         |
| size        | String  | medium  | large/medium/small/mini                           | 按钮大小             |
| loading     | Boolean | -       | true / false                                      | 是否显示在加载中     |
| plain       | Boolean | -       | true / false                                      | 是否是简约风格的按钮 |
