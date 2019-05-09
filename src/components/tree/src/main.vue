<template>
<div class='fly-tree'>
    <ul class='fly-tree__box fly-tree__root'>
        <fly-tree-node v-for="(item,index) in data" :key='index' :data='item' :node-key='nodeKey' :props='props' :label='label' :show-checkbox='showCheckbox'>
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
    nodeKey: String,
    props: {
      type: Object
    },
    showCheckbox: Boolean,
    label: String
  }
}
</script>
