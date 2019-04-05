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
@import '~/components/themes/src/base/fly-common.scss';
@import '~/components/themes/src/base/fly-mixins.scss';
@include b('demo-table'){
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
@include b('demo-icon'){
    [class^="fly-icon-"]{
        font-size:2em;
        margin:0 15px;
    }

    ul{
      list-style-type:none;
      margin:0px;
      padding:0px;
      border-top:1px solid $fly-border-color;
      border-left:1px solid $fly-border-color;
      &:after{
      content:'';
      display:block;
      clear:both;
    }
    }
    li{
      float:left;
      width:16.66%;
      text-align:center;
      padding:10px 0px;
      box-sizing:border-box;
      border-right:1px solid $fly-border-color;
      border-bottom:1px solid $fly-border-color;
      div{
        color:$font-color-text;
        margin:10px 0px;
      }
    }
}
</style>
