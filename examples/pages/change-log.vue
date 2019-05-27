<template>
<div>
  <fly-timeline>
    <change-log></change-log>
  </fly-timeline>
</div>
</template>

<script>
import ChangeLog from '../../CHANGELOG.md'
export default {
  name: 'FlyChangeLog',
  components: {
    ChangeLog
  }
}
</script>

<style lang="scss" scoped>
/deep/ .fly-timeline {
  pre {
    display: none;
  }
  line-height: 24px;
  p{
    margin:0px;
    padding:0px;
  }
  h3{
    margin:5px 0px;
  }
  ol{
    margin:5px;
  }
}
</style>
