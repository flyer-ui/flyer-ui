<template>
    <div class='fly-demo-container'>
       <fly-menu :data='navData'></fly-menu>
        <div class='fly-demo-container__content'>
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
      return routes['cn'].filter((route) => { return !route.pending })
    }
  }
}
</script>
<style lang='scss' scoped>
@import '~/components/themes/src/base/fly-common.scss';
@import '~/components/themes/src/base/fly-mixins.scss';
@include b('demo-container'){
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    box-sizing: border-box;
    // height:calc(100vh - 60px * 2);
    @include e('content'){
        padding:10px;
        box-sizing: border-box;
        width: 95%;
    }
}

</style>
