# 页面字体规格

## 中文字体

<template>
<div>
    <div class='block'>
        <div class='block-primary ps'>
            顺风顺水
        </div>
        <div class='block-second'>
            PingFang SC
        </div>
    </div>
    <div class='block'>
        <div class='block-primary hsg'>
            顺风顺水
        </div>
        <div class='block-second'>
            Hiragino Sans GB
        </div>
    </div>
    <div class='block'>
        <div class='block-primary my'>
            顺风顺水
        </div>
        <div class='block-second'>
            Microsoft YaHei
        </div>
    </div>
</div>
</template>

## 英文/数字字体

<template>
    <div class='block'>
        <div class='block-primary hn'>
            Green 666
        </div>
        <div class='block-second'>
        Helvetica Neue
        </div>
    </div>
    <div class='block'>
        <div class='block-primary ha'>
            Green 666
        </div>
        <div class='block-second'>
            Helvetica
        </div>
    </div>
    <div class='block'>
        <div class='block-primary al'>
            Green 666
        </div>
        <div class='block-second'>
        Arial
        </div>
    </div>
</template>

## 引用代码

```CSS
font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
```

## 字体大小规格

| 场景       | 大小 | 效果                                                       |
| ---------- | ---- | ---------------------------------------------------------- |
| 主标题     | 20px | <span style='font-size:20px'>主标题 / Big title</span>     |
| 标题       | 18px | <span style='font-size:18px'>标题 / Title</span>           |
| 标题（小） | 16px | <span style='font-size:16px'>小标题 / Mini title</span>    |
| 正文       | 14px | <span style='font-size:14px'>正文 / Text</span>            |
| 正文 (小)  | 13px | <span style='font-size:13px'>小正文 / Mini text</span>     |
| 辅助文字   | 12px | <span style='font-size:12px'>辅助文字 / Assist text</span> |

 <style lang='scss' scoped>
    @import '~/components/themes/src/base/fly-variable.scss';
    .block{
        border:1px solid $fly-color-border;
        display:inline-block;
        width:200px;
    }
    .block-primary{
        text-align:center;
        padding:50px 10px;
        font-size:32px;
    }
    .block-second{
        padding:10px 20px;
        border-top:1px solid $fly-color-border;
    }
    .ps{
        font-family:'PingFang SC';
    }
    .hsg{
        font-family:'Hiragino Sans GB';
    }
    .my{
        font-family:'Microsoft YaHei';
    }
    .hn{
        font-family:'Helvetica Neue';
    }
    .ha{
        font-family:'Helvetica';
    }
    .al{
        font-family:'Arial';
    }
    table{
    width:100%;
    border:1px solid #dedede;
    border-bottom:0px;
    margin:0px;
    padding:0px;
    border-collapse:collapse;
    th{
        background-color:#fafafa;
    }
    td,th{
        text-align:left;
        border:0px;
        padding:10px 15px;
        box-sizing:border-box;
        border-spacing:0px;
        border-bottom:1px solid #dedede;
    }
}
</style>
