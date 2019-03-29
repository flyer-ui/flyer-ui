<template>
    <div class='fly-tab__nav'>
      <slot name='label'>{{pane.label}}</slot>
      <slot name='default'>{{pane.default}}</slot>
    </div>
</template>
<script>
export default {
  name: 'FlyTagNav',
  navs: {
    type: Object,
    default () {
      return {}
    },
    require: true
  }
}
</script>
