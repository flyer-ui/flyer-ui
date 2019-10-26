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
 <fly-color-card text='标题颜色' type='Title' color='#37474F'></fly-color-card>
 <fly-color-card text='副标题颜色' type='Subtitle' color='#526069'></fly-color-card>
 <fly-color-card text='文本颜色' type='Text' color='#76838F'></fly-color-card>
 <fly-color-card text='提示颜色' type='Placeholder' color='#A3AFB7'></fly-color-card>
</div>
</template>

## 边框颜色

<template>
<div>
 <fly-color-card text='边框颜色' type='Border' color='#E4EAEC'></fly-color-card>
</div>
</template>

## 色卡例子

<template>
<!--激活颜色-->
<fly-row :gutter='10'>
 <fly-col :span="1">激活颜色</fly-col>
 <fly-col :span="4">
    <fly-color-card type='Primary' text='800' :grade='8' color='#007BFF'></fly-color-card>
 </fly-col>
 <fly-col :span="1">
    激活颜色
 </fly-col>
 <fly-col :span="4">
 <fly-color-card type='Danger' text='800' :grade='8' color='#DC3545'></fly-color-card>
 </fly-col>
</fly-row>
<!--基础颜色-->
<fly-row :gutter='10'>
 <fly-col :span="1">基础颜色</fly-col>
 <fly-col :span="4">
    <fly-color-card type='Primary' text='700' :grade='7' color='#007BFF'></fly-color-card>
 </fly-col>
 <fly-col :span="1">
    基础颜色
 </fly-col>
 <fly-col :span="4">
 <fly-color-card type='Danger' text='700' :grade='7' color='#DC3545'></fly-color-card>
 </fly-col>
</fly-row>
<!--鼠标悬停颜色-->
<fly-row :gutter='10'>
 <fly-col :span="1">鼠标悬停颜色</fly-col>
 <fly-col :span="4">
    <fly-color-card type='Primary' text='500' :grade='5' color='#007BFF'></fly-color-card>
 </fly-col>
 <fly-col :span="1">
    鼠标悬停颜色
 </fly-col>
 <fly-col :span="4">
 <fly-color-card type='Danger' text='500' :grade='5' color='#DC3545'></fly-color-card>
 </fly-col>
</fly-row>
<!--背景颜色-->
<fly-row :gutter='10'>
 <fly-col :span="1">背景颜色</fly-col>
 <fly-col :span="4">
    <fly-color-card type='Primary' text='100' :grade='1' color='#007BFF'></fly-color-card>
 </fly-col>
 <fly-col :span="1">
    背景颜色
 </fly-col>
 <fly-col :span="4">
 <fly-color-card type='Danger' text='100' :grade='1' color='#DC3545'></fly-color-card>
 </fly-col>
</fly-row>
</template>
  
## 图标配色

<template>
<fly-row>
    <fly-col :span='1'>
        <div class='icon-example'>普通</div>
    </fly-col>
    <fly-col :span='2'>
        <div class='icon-example'>
            <fly-icon name='image' style='opacity:0.6'>60%</fly-icon>
        </div>
    </fly-col>
</fly-row>
<fly-row>
    <fly-col :span='1'>
        <div class='icon-example'>鼠标悬停</div>
    </fly-col>
    <fly-col :span='2'>
        <div class='icon-example'>
            <fly-icon name='image' style='opacity:0.8'>80%</fly-icon>
        </div>
    </fly-col>
</fly-row>
<fly-row>
     <fly-col :span='1'>
        <div class='icon-example'>激活</div>
    </fly-col>
    <fly-col :span='2'>
        <div class='icon-example'>
            <fly-icon name='image'>100%</fly-icon>
        </div>
    </fly-col>
</fly-row>
</template>
<style type='scss'>
    .icon-example{
        line-height:30px;
    }
</style>