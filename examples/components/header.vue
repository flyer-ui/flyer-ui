<template>
 <div class='fly-demo-header'>
   <div class='fly-demo-header_logo'>
     <img src='../assets/imgs/logo.png'/>
   </div>
   <div class='fly-demo-header_items'>

   </div>
 </div>
</template>
<script>
export default {
  name: 'FlyHeader'
}
</script>
<style lang='scss' scoped>
$logo_width:15%;
$items_width:95%;
$header_height:60px;
.fly-demo-header{
  display:flex;
  flex-direction: row;
  flex-wrap:nowrap;
  min-height:$header_height;
  height:$header_height;
  border-bottom:1px solid #dedede;
  &_logo{
    width:$logo_width;
    position: relative;
    padding: 10px 20px;
    box-sizing: border-box;
    position: relative;
    min-width: 200px;
    &:after{
      content:'';
      position:absolute;
      z-index: 1;
      right:0px;
      height:40px;
      vertical-align: middle;
      background-color:#dedede;
      width:1px;
    }
  }
  &_items{
    width:$items_width;
    text-align:right;
  }
}
</style>
