# Color 配色方案

## 主色

整站的主要风格颜色

<template>
   <fly-color-card type='primary' text='Primary' color='#007BFF'></fly-color-card>
</template>

## 辅助色

常用于提示类的颜色，比如成功、失败、警告之类的场景中会使用到。  
<template>

<div>
 <fly-color-card type='success' text='Success' color='#28A745'></fly-color-card>
 <fly-color-card type='info'  text='Info' color='#17A2B8'></fly-color-card>
 <fly-color-card type='warning' text='Warning' color='#FFC107'></fly-color-card>
 <fly-color-card type='danger' text='Danger' color='#DC3545'></fly-color-card>
</div>
</template>

## 文本颜色

中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。

<template>
<div>
 <fly-color-card text='标题颜色' type='title' color='#333333'></fly-color-card>
 <fly-color-card text='副标题颜色' type='common' color='#666666'></fly-color-card>
 <fly-color-card text='文本颜色' type='secondary' color='#999999'></fly-color-card>
 <fly-color-card text='提示颜色' type='placeholder' color='#CECECE'></fly-color-card>
</div>
</template>

## 边框颜色

<template>
<div>
 <fly-color-card text='边框颜色' type='border' color='#E4EAEC'></fly-color-card>
</div>
</template>