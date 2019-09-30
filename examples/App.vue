<template>
  <div id="app">
    <fly-container>
      <fly-header>
        <fly-head></fly-head>
      </fly-header>
      <fly-container direction="vertical">
        <fly-aside>Aside</fly-aside>
        <fly-main>Main</fly-main>
      </fly-container>
      <fly-footer>Footer</fly-footer>
    </fly-container>
  </div>
</template>

<script>
import FlyHead from '@/components/header'
// import FlyMenu from '@/components/menu'
// import FlyFooter from '@/components/footer'
// import FlyContainer from '@/components/container'

export default {
  components: {
    FlyHead
    // FlyMenu,
    // FlyFooter,
    // FlyContainer
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
html,body,#app{
  height:100%;
}
 .fly-container {
    min-height:100%;
  }
  .fly-container .fly-main {
    border:1px dashed #ccc;
  }
  .fly-container .fly-footer {
     border:1px dashed #ccc;
  }
  .fly-container .fly-aside {
    border:1px dashed #ccc;
  }
</style>
