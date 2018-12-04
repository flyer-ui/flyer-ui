<template>
 <div class='fly-demo-header'>
   <div class='fly-demo-header_logo'>
     Logo
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
  position:fixed;
  z-index:99;
  top:0px;
  left:0px;
  right:0px;
  flex-direction: row;
  flex-wrap:nowrap;
  min-height:$header_height;
  height:$header_height;
  // background-color:#76838F;
  &_logo{
    width:$logo_width;
    // background-color:#CCC5DE;
  }
  &_items{
    width:$items_width;
  }
}
</style>
