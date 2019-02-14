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
