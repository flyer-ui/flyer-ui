<template>
 <fly-container direction="vertical" class='fly-demo-header'>
   <fly-aside class='fly-demo-header__logo'>
     <fly-row>
       <fly-col :span='8'>
         <img src='../assets/imgs/logo.png' alt=''/>
       </fly-col>
       <fly-col :span='16'>
        <h2>Flyer-UI</h2>
       </fly-col>
     </fly-row>
   </fly-aside>
   <fly-main></fly-main>
 </fly-container>
</template>
<script>
export default {
  name: 'FlyHeader'
}
</script>
<style lang='scss' scoped>
@import '~/components/themes/src/base/fly-bem.scss';
@include b('demo-header'){
  border-bottom: 1px solid #e4eaec;
  @include e('logo'){
    position:relative;
    img{
      width: 30px;
      position: absolute;
      z-index: 1;
      left: 20px;
      top: 15px;
    }
    h2{
      position: absolute;
      z-index: 1;
      left: 70px;
      color: #3e8ef7;
    }
    &:after{
      content: "";
      position: absolute;
      z-index: 1;
      right: 0;
      top: 10px;
      height: 40px;
      vertical-align: middle;
      border-right: 1px solid #e4eaec;
    }
  }
}
</style>
