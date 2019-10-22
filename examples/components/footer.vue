<template>
  <div class='fly-demo-footer'>
    Copyright © 2017-2019 Zheng peng fei
    <a href='https://github.com/flyer-ui/flyer-ui' target='_blank'>
      <fly-icon name='github' class='fly-demo-footer__github'></fly-icon>
    </a>
  </div>
</template>
<script>
export default {
  name: 'FlyFooter'
}
</script>
<style lang='scss' scoped>
@import '~/components/themes/src/base/fly-common.scss';
@import '~/components/themes/src/base/fly-bem.scss';
@include b('demo-footer'){
    display: flex;
    flex-direction: row;
    flex-wrap:nowrap;
    justify-content: center;
    height:60px;
    background-color:#fafafa;
    line-height:60px;
    color:$font-color-placeholder;
    @include e('github'){
      font-size: 24px;
      padding: 18px;
    }
}
</style>
