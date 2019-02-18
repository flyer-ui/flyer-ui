<template>
    <div class='fly-demo-block'>
        <div class='fly-demo-block__effect'>
            <slot name='effect' ></slot>
        </div>
        <div class='fly-demo-block__code' :class='{"is-open":isOpen}'>
            <slot name='code'></slot>
        </div>
        <div class='fly-demo-block__buttons'>
            <i class='fly-icon-chevron-down' @click='handleOpenCode'></i>
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
@import '~/components/themes/src/base/fly-common.scss';
@import '~/components/themes/src/base/fly-mixins.scss';
@include b('demo-block'){
    border:1px solid $fly-border-color;
    border-radius:$fly-round-default-size;
    @include e('effect'){
        padding:20px;
        border-bottom:1px solid $fly-border-color;
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
        padding:20px;
        text-align: center;
        [class^='fly-icon-']{
            cursor: pointer;
            font-size:18px;
        }
    }
}
</style>
