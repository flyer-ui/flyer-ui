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
import pages from '../pages.config.json'
export default {
  name: 'FlyContainer',
  components: {
    FlyMenu
  },
  computed: {
    navData () {
      const currentLang = this.$route.params.lang || 'cn'
      const data = [].concat.apply(pages[currentLang], routes[currentLang])
      return data.filter((route) => { return !route.pending })
    }
  }
}
</script>
<style lang='scss' scoped>
@import '~/components/themes/src/base/fly-common.scss';
@import '~/components/themes/src/base/fly-bem.scss';
@include b('demo-container'){
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    box-sizing: border-box;
    @include e('content'){
        padding:10px;
        box-sizing: border-box;
        width: 95%;
    }
}

</style>
