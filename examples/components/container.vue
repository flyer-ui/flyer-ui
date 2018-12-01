<template>
    <div class='fly-demo-container'>
       <fly-menu></fly-menu>
       <fly-content></fly-content>
    </div>
</template>
<script>
import FlyMenu from './menu'
import FlyContent from './content'
export default {
  name: 'FlyContainer',
  components: {
    FlyMenu,
    FlyContent
  }
}
</script>
<style lang='scss' scoped>
.fly-demo-container{
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    box-sizing: border-box;
    margin-top:60px;
    height:100%;
}
</style>
