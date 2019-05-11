## Color 颜色风格

### 主色  
整站的主要风格颜色  

<template>
<div class='block primary'>
    Primary<br/>
    #3e8ef7
</div>  
</template>

### 辅助色  
常用于提示类的颜色，比如成功、失败、警告之类的场景中会使用到。   
<template>
<div>
    <div class='block success'>
        Success</br>
        #11c26d
    </div>
    <div class='block info'>
        Info</br>
        #263238
    </div>
    <div class='block warning'>
        Warning</br>
        #eb6709
    </div>
    <div class='block danger'>
        Danger</br>
        #ff4c52
    </div>
</div>
</template>

### 中性色  
中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。  

<template>
<div>
    <div class='block font-color-title'>
        主要文字</br>
        #263238
    </div>
    <div class='block font-color-common'>
        常规文字</br>
        #37474F
    </div>
    <div class='block font-color-secondary'>
        次要文字</br>
        #526069
    </div>
    <div class='block font-color-placeholder'>
        占位文字</br>
        #A3AFB7
    </div>
</div>
</template>

### 边框颜色

<template>
<div>
   <div class='block border-color'>
        边框颜色</br>
        #E4EAEC
    </div>
</div>
</template>

<style lang='scss' scoped>
    .block{
        padding:10px;
        display:inline-block;
        color:#fff;
        width:200px;
    }
    .primary{
        background-color:#3e8ef7;
    }
    .success{
        background-color:#11c26d;
    }
    .info{
        background-color:#0bb2d4;
    }
    .warning{
        background-color:#eb6709;
    }
    .danger{
        background-color:#ff4c52;
    }
    .font-color-title{
        background-color:#263238;
    }
    .font-color-common{
        background-color:#37474F;
    }
    .font-color-secondary{
        background-color:#526069;
    }
    .font-color-placeholder{
        background-color:#A3AFB7;
    }
    .border-color{
        background-color:#E4EAEC;
        color:#526069;
    }
    .border-color-first{
        background-color:#A3AFB7;
        color:#526069;
    }
    .border-color-second{
        background-color:#CCD5DB;
        color:#526069;
    }
    .border-color-third{
        background-color:#E4EAEC;
        color:#526069;
    }
    .border-color-four{
        background-color:#F3F7F9;
        color:#526069;
    }
</style>