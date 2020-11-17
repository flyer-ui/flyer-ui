<template>
<div class='fly-tree'>
    <ul class='fly-tree__box fly-tree__root'>
        <fly-tree-node v-for="(item,index) in data"
          :key='index'
          @node-click='handleNodeClick'
          :data='item'
          :props='props'
          :show-checkbox='showCheckbox'>
        </fly-tree-node>
    </ul>
</div>
</template>

<script>
import FlyTreeNode from './node'
export default {
  name: 'FlyTree',
  components: {
    FlyTreeNode
  },
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    props: {
      type: Object,
      validator (obj) {
        return obj.hasOwnProperty('label') && obj.hasOwnProperty('children')
      }
    },
    showCheckbox: Boolean
  },
  methods: {
    handleNodeClick (label) {
      this.$emit('nodeClick', label)
    }
  }
}
</script>
