<template>
<div>a</div>
</template>
<script>
export default {
  name: 'FlyContent',
  watch: {
    '$route' () {
      console.log(this.$route.name)
    }
  },
  created () {
    console.log(this.$route.name)
  },
  methods: {
    getContent () {

    }
  }
}
</script>
<style lang='scss' scoped>

</style>
