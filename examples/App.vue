<template>
  <div id="app">
    <fly-container>
      <fly-header>
        <fly-head></fly-head>
      </fly-header>
      <fly-container direction="vertical">
        <fly-aside>
          <fly-menu :data='navData'></fly-menu>
        </fly-aside>
        <fly-main>
          <router-view></router-view>
        </fly-main>
      </fly-container>
      <fly-footer>
        <fly-bottom></fly-bottom>
      </fly-footer>
    </fly-container>
  </div>
</template>

<script>
import FlyHead from '@/components/header'
import FlyMenu from '@/components/menu'
import FlyBottom from '@/components/footer'
import routes from './router.config.json'
import pages from './pages.config.json'

export default {
  components: {
    FlyHead,
    FlyMenu,
    FlyBottom
  },
  computed: {
    navData () {
      const currentLang = this.$route.params.lang || 'cn'
      const data = [].concat.apply(pages[currentLang], routes[currentLang])
      return data.filter((route) => { return !route.pending })
    }
  },
  name: 'App'
}
</script>

<style lang='scss'>
html,body,#app{
  height:100%;
}
 .fly-container {
    min-height:100%;
  }
.fly-main{
  padding:rem(0px) rem(10px);
}
  @import '~/components/themes/src/base/fly-variable.scss';
@import '~/components/themes/src/base/fly-bem.scss';
@import url('assets/css/common.scss');
body,#app{
  color:$font-color-common;
}
@include b('demo-table'){
    width:100%;
    border:rem(1px) solid #dedede;
    border-bottom:rem(0px);
    margin:rem(0px);
    padding:rem(0px);
    border-collapse:collapse;
    th{
        background-color:#fafafa;
    }
    td,th{
        text-align:left;
        border:rem(0px);
        padding:rem(10px) rem(15px);
        box-sizing:border-box;
        border-spacing:rem(0px);
        border-bottom:rem(1px) solid #dedede;
    }
}
@include b('demo-icon'){
    [class^="fly-icon-"]{
        font-size:rem(28px);
        margin:0 rem(15px);
    }
    ul{
      list-style-type:none;
      margin:rem(0px);
      padding:rem(0px);
      border-top:rem(1px) solid $fly-color-border;
      border-left:rem(1px) solid $fly-color-border;
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
      padding:rem(10px) rem(0px);
      box-sizing:border-box;
      border-right:rem(1px) solid $fly-color-border;
      border-bottom:rem(1px) solid $fly-color-border;
      div{
        color:$font-color-common;
        margin:rem(10px) rem(0px);
      }
    }
}
code{
    overflow: visible;
    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
    font-size: rem(14px);
    color: #24292e;
    word-wrap: normal;
    white-space: pre;
}
pre{
  border-radius: $fly-round-default-size;
  border:rem(1px) solid $fly-color-border;
}
.fly-logs{
    margin:rem(10px);
}
.fly-logs__items{
  margin:rem(5px);
  line-height:rem(24px);
}
</style>
