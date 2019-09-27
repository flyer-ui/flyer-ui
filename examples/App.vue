<template>
  <div id="app">
    <fly-header></fly-header>
    <fly-container></fly-container>
    <fly-footer></fly-footer>
  </div>
</template>

<script>
import FlyHeader from '@/components/header'
import FlyMenu from '@/components/menu'
import FlyFooter from '@/components/footer'
import FlyContainer from '@/components/container'

export default {
  components: {
    FlyHeader,
    FlyMenu,
    FlyFooter,
    FlyContainer
  },
  data () {
    return {
    }
  },
  props: {
    num: {
      type: String
    }
  },
  name: 'App'
}
</script>

<style lang='scss'>
@import '~/components/themes/src/base/fly-common.scss';
@import '~/components/themes/src/base/fly-bem.scss';
@import url('assets/css/common.scss');
body,#app{
  color:$font-color-common;
}
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
        color:$font-color-common;
        margin:10px 0px;
      }
    }
}
code{
    background-color:#fafafa;
    margin: 0px;
    padding: 15px 10px;
    display: block;
    font-family: Menlo,Monaco,Consolas,Courier,monospace;
    font-size: 14px;
    line-height: 18px;
}
pre{
  border-radius: $fly-round-default-size;
  border:1px solid $fly-border-color;
}
.fly-logs{
    margin:10px;
}
.fly-logs__items{
  margin:5px;
  line-height:24px;
}
</style>
