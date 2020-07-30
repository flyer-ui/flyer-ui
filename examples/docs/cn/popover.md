<script>
const popover = require('../../../src/components/popover/src/popover.js')
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
    div.innerHTML = `<div id='test' style='
      z-index: 1;
      width: 100px;
      padding:0px;
      height: 40px;
      background: #fafafa;
      line-height: 20px;
      padding: 10px;
      border-bottom:2px solid #000;
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