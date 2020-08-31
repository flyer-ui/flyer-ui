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
@import '~/components/themes/src/base/fly-util.scss';
@include b('demo-header'){
  border-bottom: rem(1px) solid #e4eaec;
  @include e('logo'){
    position:relative;
    img{
      width: rem(30px);
      position: absolute;
      z-index: 1;
      left: rem(20px);
      top: rem(15px);
    }
    h2{
      position: absolute;
      z-index: 1;
      left: rem(70px);
      color: #3e8ef7;
    }
    &:after{
      content: "";
      position: absolute;
      z-index: 1;
      right: 0;
      top: rem(10px);
      height: rem(40px);
      vertical-align: middle;
      border-right: rem(1px) solid #e4eaec;
    }
  }
}
</style>
