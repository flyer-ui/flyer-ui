# Button

## Type

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

## Plain

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

## Size

::: demo

```html
<p>
  <fly-button size="large" plain>大号按钮</fly-button>
  <fly-button size="medium" plain>中等按钮</fly-button>
  <fly-button size="small" plain>小按钮</fly-button>
  <fly-button size="mini" plain>迷你按钮</fly-button>
</p>
<p>
  <fly-button size="large" round plain>大号按钮</fly-button>
  <fly-button size="medium" round plain>中等按钮</fly-button>
  <fly-button size="small" round plain>小按钮</fly-button>
  <fly-button size="mini" round plain>迷你按钮</fly-button>
</p>
```
:::

## Feature

::: demo

```html
<p>
  <fly-button disabled>禁用</fly-button>
  <fly-button type='primary' disabled>禁用</fly-button>
</p>

```
:::

## Icon button

::: demo

```html
<p>
  <fly-button icon='fly-icon-help-circle' size='large' circle></fly-button>
  <fly-button icon='fly-icon-help-circle' size='medium' circle></fly-button>
  <fly-button icon='fly-icon-help-circle' size='small' circle></fly-button>
  <fly-button icon='fly-icon-help-circle' size='mini' circle></fly-button>
</p>
```
:::

## Props

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
