<template>
    <div class='fly-demo-block'>
        <div class='fly-demo-block__effect'>效果</div>
        <div class='fly-demo-block__code'>代码</div>
        <div class='fly-demo-block__buttons'>操作集</div>
    </div>
</template>
<script>
export default {
  name: 'FlyDemoBlock'
}
</script>
<style lang='scss'>
@import '~/components/themes/src/base/fly-common.scss';
@import '~/components/themes/src/base/fly-mixins.scss';
@include b('demo-block'){
    border:1px solid $fly-border-color;
    @include e('effect'){

    }
    @include e('code'){

    }
    @include e('buttons'){

    }
}
</style>
