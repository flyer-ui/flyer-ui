<h1>Flyer-UI - Button</h1>
<h3>Button类型</h3>
<p>
    <fly-button>Default</fly-button>
    <fly-button type='primary'>Primary</fly-button>
    <fly-button type='warning'>Warning</fly-button>
    <fly-button type='danger'>Danger</fly-button>
    <fly-button type='success'>Success</fly-button>
    <fly-button type='info'>Info</fly-button>
</p>
<h3>Button特性</h3>
<p>
    <fly-button native-type='button'>Button</fly-button>
    <fly-button native-type='submit'>Submit</fly-button>
    <fly-button native-type='reset'>Reset</fly-button>
    <fly-button disabled>Disabled</fly-button>
    <fly-button loading>Loading...</fly-button>
</p>
<h3>Icon Button</h3>
<p>
    <fly-button icon='fly-icon-help-circle'></fly-button>
    <fly-button icon='fly-icon-map-pin' round></fly-button>
    <fly-button icon='fly-icon-chevrons-right' type='info' circle></fly-button>
</p>
<h3>Button 大小规格</h3>
<p>
   <fly-button size='large'>大号按钮 / Large</fly-button>
   <fly-button size='medium'>中等按钮 / medium</fly-button>
   <fly-button size='small'>小按钮 / small</fly-button>
   <fly-button size='mini'>迷你按钮 / mini</fly-button>
</p>
<p>
   <fly-button ci size='large'>大号按钮 / Large</fly-button>
   <fly-button size='medium'>中等按钮 / medium</fly-button>
   <fly-button size='small'>小按钮 / small</fly-button>
   <fly-button size='mini'>迷你按钮 / mini</fly-button>
</p>
<h3>Plain Button</h3>
<p>
    <fly-button plain>Default</fly-button>
    <fly-button plain type='primary'>Primary</fly-button>
    <fly-button plain type='warning'>Warning</fly-button>
    <fly-button plain type='danger'>Danger</fly-button>
    <fly-button plain type='success'>Success</fly-button>
    <fly-button plain type='info'>Info</fly-button>
</p>

**可定制属性**  

属性名称 | 类型 | 默认值  | 可选值  | 说明  |
---------|----------|---------|---------|--------|
type | String | default  | default/primary/warning/danger/success/info  | 定义按钮的类型  |
native-type | String | button  | button/submit/reset | 原生的type属性  |
disabled | Boolean | false  | - | 是否设置为禁用  |
icon | String | -  | - | 字体图标的样式名称  |
round  |  Boolean  | -  | -  | 是否设有圆角  |
circle  |  Boolean  | -  | -  | 是否设为圆形  |
size  |  String  | medium  | large/medium/small/mini  | 按钮大小
loading | Boolean | - | - | 是否显示在加载中 |  
plain | Boolean | - | - | 是否是简约风格的按钮 |  
  
<style lang='scss' scoped>
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