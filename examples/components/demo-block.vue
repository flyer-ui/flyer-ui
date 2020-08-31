<template>
    <div class='fly-demo-block'>
        <div class='fly-demo-block__effect'>
            <slot name='effect' ></slot>
        </div>
        <div class='fly-demo-block__code' :class='{"is-open":isOpen}'>
            <slot name='code'></slot>
        </div>
        <div class='fly-demo-block__buttons'>
            <i class='fly-icon' :class='{
                "fly-icon-down":!isOpen,
                "fly-icon-upward":isOpen
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
@import '~/components/themes/src/base/fly-util.scss';
@include b('demo-block'){
    border:rem(1px) solid $fly-color-border;
    border-radius:$fly-round-default-size;
    @include e('effect'){
        padding:rem(20px);
        border-bottom:rem(1px) solid $fly-color-border;
    }
    @include e('row'){
        padding:rem(5px) rem(0px);
        box-sizing: border-box;
    }
    @include e('label'){
        display: inline-block;
        width:rem(80px);
    }
    @include e('icon'){
        margin-right:rem(5px);
    }
    @include e('code'){
        padding:rem(20px);
        background-color:#fafafa;
        display:none;
        border-bottom:rem(1px) solid $fly-color-border;
        @include state('open'){
            display: block;
        }
    }
    @include e('buttons'){
        padding:rem(10px);
        text-align: center;
        [class^='fly-icon-']{
            cursor: pointer;
            font-size:rem(18px);
        }
    }
    @include e('desc'){
        background-color:#fff;
        padding:rem(20px);
        margin-bottom:rem(20px);
        border:1px solid $fly-color-border;
    }
    @include e('drawer-buttons'){
        position: absolute;
        z-index:1;
        bottom:rem(0px);
        left:rem(0px);
        right:rem(0px);
    }
    pre{
        border:rem(0px);
        margin:rem(0px);
    }
    code{
        padding:rem(0px);
    }
}
</style>
