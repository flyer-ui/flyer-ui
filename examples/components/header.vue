<template>
 <div class='fly-demo-header'>
   <div class='fly-demo-header_logo'>
     <img src='../assets/imgs/logo.png'/>
   </div>
   <div class='fly-demo-header_items'>
     <ul>
       <li>组件</li>
       <li>组件</li>
     </ul>
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
  }
  &_items{
    width:$items_width;
  }
}
</style>
