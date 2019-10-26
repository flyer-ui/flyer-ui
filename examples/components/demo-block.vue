<template>
    <div class='fly-demo-block'>
        <div class='fly-demo-block__effect'>
            <slot name='effect' ></slot>
        </div>
        <div class='fly-demo-block__code' :class='{"is-open":isOpen}'>
            <slot name='code'></slot>
        </div>
        <div class='fly-demo-block__buttons'>
            <i :class='{
                "fly-icon-chevron-down":!isOpen,
                "fly-icon-chevron-up":isOpen
            }' @click='handleOpenCode'></i>
        </div>
    </div>
</template>
<script>
export default {
  name: 'FlyDemoBlock',
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    handleOpenCode () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
<style lang='scss'>
@import '~/components/themes/src/base/fly-variable.scss';
@import '~/components/themes/src/base/fly-bem.scss';
@include b('demo-block'){
    border:1px solid $fly-border-color;
    border-radius:$fly-round-default-size;
    @include e('effect'){
        padding:20px;
        border-bottom:1px solid $fly-border-color;
    }
    @include e('row'){
        padding:5px 0px;
        box-sizing: border-box;
    }
    @include e('label'){
        display: inline-block;
        width:80px;
    }
    @include e('icon'){
        margin-right:5px;
    }
    @include e('code'){
        padding:20px;
        background-color:#fafafa;
        display:none;
        border-bottom:1px solid $fly-border-color;
        @include when('open'){
            display: block;
        }
    }
    @include e('buttons'){
        padding:10px;
        text-align: center;
        [class^='fly-icon-']{
            cursor: pointer;
            font-size:18px;
        }
    }
    @include e('desc'){
        background-color:#fff;
        padding:20px;
        margin-bottom:20px;
        border:1px solid $fly-border-color;
    }
    @include e('drawer-buttons'){
        position: absolute;
        z-index:1;
        bottom:0px;
        left:0px;
        right:0px;
    }
    pre{
        border:0px;
        margin:0px;
    }
    code{
        padding:0px;
    }
}
</style>
