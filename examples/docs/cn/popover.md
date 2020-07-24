<script>
module.exports = {
  data(){
    return {

    }
  },
  methods:{
    handleClick(event){
      console.log('event',event)
    }
  },
  mounted(){
    document.body.addEventListener('click',(e)=>{
      console.log('body',e)
    })
    const div = document.createElement('div')
    div.innerHTML = `<div id='test' style='position: absolute;
      z-index: 1;
      width: 100px;
      margin:0px;
      padding:0px;
      left:0px;
      top:0px;
      height: 100px;
      background: #fafafa;
      line-height: 48px;
      padding: 10px;
      box-sizing: border-box;'>
        test
    </div>`
    document.body.appendChild(div)
  }
}
</script>

## Popover 组件

::: demo

```html
<template>
  <fly-button type='primary' class='flag' @click='handleClick'>
    计算弹出层
  </fly-button>
</template>

```
:::