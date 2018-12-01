<template>
  <div class='fly-demo-footer'>
      footer
  </div>
</template>
<script>
export default {
  name: 'FlyFooter'
}
</script>
<style lang='scss' scoped>
$footer_height:60px;
.fly-demo-footer{
    display: flex;
    flex-direction: row;
    flex-wrap:nowrap;
    justify-content: center;
    height:$footer_height;
    background-color:beige;
}
</style>
