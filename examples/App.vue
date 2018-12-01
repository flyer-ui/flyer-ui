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
  data () {
    return {
      // 问我怎么用函数的方式返回，而不是直接赋值，这样不好。
    }
  },
  props: {
    num: {
      type: String
      // 让我在这里就验证好
    }
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
