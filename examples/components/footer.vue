<template>
  <div class='fly-demo-footer'>

  </div>
</template>
<script>
export default {
  name: 'FlyFooter'
}
</script>
<style lang='scss' scoped>
@import '~/components/themes/src/base/fly-common.scss';
@import '~/components/themes/src/base/fly-mixins.scss';
@include b('demo-footer'){
    display: flex;
    flex-direction: row;
    flex-wrap:nowrap;
    justify-content: center;
    height:60px;
    background-color:$fly-border-color;
}
</style>
