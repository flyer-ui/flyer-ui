<template>
  <div id="app">
    <fly-header></fly-header>
    <fly-button>Click</fly-button>
  </div>
</template>

<script>
import FlyHeader from '@/components/header'
import FlyMenu from '@/components/menu'
import FlyFooter from '@/components/footer'

export default {
  components: {
    FlyHeader,
    FlyMenu,
    FlyFooter
  },
  created () {
    console.log(this)
  },
  mounted () {
    // console.log(this)
  },
  name: 'App'
}
</script>
<style lang='scss'>
@import url('../src/components/themes/index.scss');
</style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
