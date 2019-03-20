<template>
    <div class='fly-tab'>
      <div class='fly-tab__header'>
         <fly-tab-nav class='is-active'></fly-tab-nav>
         <fly-tab-nav></fly-tab-nav>
         <fly-tab-nav></fly-tab-nav>
      </div>
      <div class='fly-tab__content'>
        <slot name='default'></slot>
      </div>
    </div>
</template>
<script>
import FlyTabNav from './nav'
import FlyTabPane from './pane'
export default {
  name: 'FlyTab',
  components: {
    FlyTabNav,
    FlyTabPane
  }
}
</script>
