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
      return routes['cn']
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
    height:100%;
    @include e('content'){
        padding:10px;
        box-sizing: border-box;
        width: 95%;
        height:100%;
    }
}

</style>
<style lang='scss'>
table{
    width:100%;
    border:1px solid #dedede;
    border-bottom:0px;
    margin:0px;
    padding:0px;
    border-collapse:collapse;
    th{
        background-color:#fafafa;
    }
    td,th{
        text-align:left;
        border:0px;
        padding:10px 15px;
        box-sizing:border-box;
        border-spacing:0px;
        border-bottom:1px solid #dedede;
    }
}
</style>
