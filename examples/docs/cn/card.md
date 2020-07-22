## Card 卡片

### 基本使用

::: demo

```html
<template>
  <fly-card>
    <div slot="header">Title</div>
    <ul>
      <li>content1</li>
      <li>content2</li>
      <li>content3</li>
    </ul>
  </fly-card>
</template>
```

:::

### 带底部的内容

::: demo

```html
<template>
  <fly-card>
    <div slot="header">Title</div>
    <ul>
      <li>content1</li>
      <li>content2</li>
      <li>content3</li>
    </ul>
    <div slot="footer">footer</div>
  </fly-card>
</template>
```

:::

### 简单的卡片

::: demo

```html
<template>
  <fly-card>
    <ul>
      <li>content1</li>
      <li>content2</li>
      <li>content3</li>
    </ul>
  </fly-card>
</template>
```

:::

### Card - Slot

| 事件名称 | 说明      |
| -------- | --------- |
| header   | 头部内容  |
| default  | body 内容 |
| footer   | 底部内容  |
