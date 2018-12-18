<template>
 <div class='fly-demo-header'>
   <div class='fly-demo-header_logo'>
     <img src='../assets/imgs/logo.png' alt=''/>
     <h2>Flyer-UI</h2>
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
@import '~/components/themes/src/base/fly-common.scss';
$logo_width:15%;
$items_width:95%;
$header_height:60px;
.fly-demo-header{
  display:flex;
  flex-direction: row;
  flex-wrap:nowrap;
  min-height:$header_height;
  height:$header_height;
  border-bottom:1px solid $fly-four-border-color;
  &_logo{
    width:$logo_width;
    position: relative;
    box-sizing: border-box;
    position: relative;
    min-width: 200px;
    img{
      width:50px;
      position: absolute;
      z-index: 1;
      left:10px;
      top:5px;
    }
    h2{
      position:absolute;
      z-index:1;
      left:70px;
      color:$fly-primary-color;
    }
    &:after{
      content:'';
      position:absolute;
      z-index: 1;
      right:0px;
      top:10px;
      height:40px;
      vertical-align: middle;
      border-right:1px solid $fly-four-border-color;
    }
  }
  &_items{
    width:$items_width;
    text-align:right;
  }
}
</style>
