<template>
    <div class='fly-demo-container'>
       <fly-menu :data='navData'></fly-menu>
        <div class='fly-demo-content'>
          <router-view></router-view>
        </div>
    </div>
</template>
<script>
import FlyMenu from './menu'
import routes from '../router.config.json'
export default {
  name: 'FlyContainer',
  components: {
    FlyMenu
  },
  computed: {
    navData () {
      return routes['cn']
    }
  }
}
</script>
<style lang='scss' scoped>
@import '~/components/themes/src/base/fly-common.scss';
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
