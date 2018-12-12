<template>
    <div class='fly-demo-container'>
       <fly-menu></fly-menu>
        <div class='fly-demo-content'>
          <router-view></router-view>
        </div>
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
    height:100%;
}
.fly-demo-content{
    padding:10px;
    box-sizing: border-box;
    width: 95%;
    height:100%;
}
</style>
