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

## Feature

::: demo

```html
<p>
  <fly-button native-type="button">Button</fly-button>
  <fly-button native-type="submit">Submit</fly-button>
  <fly-button native-type="reset">Reset</fly-button>
  <fly-button disabled>Disabled</fly-button>
  <fly-button loading>Loading...</fly-button>
</p>
<p>
  <fly-button native-type="button">Button</fly-button>
  <fly-button native-type="submit">Submit</fly-button>
  <fly-button native-type="reset">Reset</fly-button>
  <fly-button disabled type="primary">Disabled</fly-button>
  <fly-button loading>Loading...</fly-button>
</p>
```

:::

## Icon button

::: demo

```html
<p>
  <fly-button icon="fly-icon-help-circle" size="large"></fly-button>
  <fly-button icon="fly-icon-map-pin" size="meidum"></fly-button>
  <fly-button icon="fly-icon-chevrons-right" type="small"></fly-button>
  <fly-button icon="fly-icon-chevrons-right" type="mini"></fly-button>
</p>
<!-- <p>
  <fly-button icon="fly-icon-help-circle" round size="large"></fly-button>
  <fly-button icon="fly-icon-map-pin" round size="meidum"></fly-button>
  <fly-button icon="fly-icon-chevrons-right" round type="small"></fly-button>
  <fly-button icon="fly-icon-chevrons-right" round type="mini"></fly-button>
</p> -->
<p>
  <fly-button icon="fly-icon-help-circle" circle size="large"></fly-button>
  <fly-button icon="fly-icon-map-pin" circle size="meidum"></fly-button>
  <fly-button icon="fly-icon-chevrons-right" circle type="small"></fly-button>
  <fly-button icon="fly-icon-chevrons-right" circle type="mini"></fly-button>
</p>
```

:::

## Size

::: demo

```html
<p>
  <fly-button size="large">大号按钮</fly-button>
  <fly-button size="medium">中等按钮</fly-button>
  <fly-button size="small">小按钮</fly-button>
  <fly-button size="mini">迷你按钮</fly-button>
</p>
<p>
  <fly-button ci size="large" loading>大号按钮</fly-button>
  <fly-button size="medium" loading>中等按钮</fly-button>
  <fly-button size="small" loading>小按钮</fly-button>
  <fly-button size="mini" loading>迷你按钮</fly-button>
</p>
<p>
  <fly-button ci size="large" round>大号按钮</fly-button>
  <fly-button size="medium" round>中等按钮</fly-button>
  <fly-button size="small" round>小按钮</fly-button>
  <fly-button size="mini" round>迷你按钮</fly-button>
</p>
```

:::

## Group button

::: demo

```html
<p>
  <fly-button-group>
    <fly-button plain>默认按钮</fly-button>
    <fly-button plain type="primary">主要按钮</fly-button>
    <fly-button plain type="warning">警告按钮</fly-button>
    <fly-button plain type="danger">危险按钮</fly-button>
    <fly-button plain type="success">成功按钮</fly-button>
    <fly-button plain type="info">信息按钮</fly-button>
  </fly-button-group>
</p>
<p>
  <fly-button-group>
    <fly-button type="primary">按钮1</fly-button>
    <fly-button type="primary">按钮2</fly-button>
    <fly-button type="primary">按钮3</fly-button>
    <fly-button type="primary" icon="fly-icon-align-left"></fly-button>
    <fly-button type="primary" icon="fly-icon-align-center"></fly-button>
    <fly-button type="primary" icon="fly-icon-align-right"></fly-button>
    <fly-button type="primary" icon="fly-icon-align-justify"></fly-button>
  </fly-button-group>
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
