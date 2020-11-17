<template>
<li class='fly-tree__node'>
    <div>
        <fly-icon  @click='handleExpand' :name='selfExpand?"arrow-down":"arrow-right"' class='fly-tree__icon' v-if='data[props.children].length>0'></fly-icon>
        <fly-checkbox @change='handleCheckChange' v-if='showCheckbox' ></fly-checkbox>
        <span  @click='handleNodeClick(data[props.label])'>{{data[props.label]}}</span>
    </div>
    <ul class='fly-tree__box' v-if='data[props.children].length>0 && selfExpand'>
        <fly-tree-node
            v-for="(item,index) in data[props.children]"
            :key='index'
            @node-click='handleNodeClick'
            :data='item'
            :props='props'
            :show-checkbox='showCheckbox'>
        </fly-tree-node>
    </ul>
</li>
</template>

<script>
export default {
  name: 'FlyTreeNode',
  props: {
    data: {
      type: Object
    },
    props: {
      type: Object
    },
    nodeKey: String,
    label: String,
    showCheckbox: Boolean,
    expand: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selfExpand: false
    }
  },
  methods: {
    handleExpand () {
      this.selfExpand = !this.selfExpand
    },
    handleNodeClick (label) {
      this.$emit('nodeClick', label)
    },
    handleCheckChange (label) {
      this.$emit('checkChange', label)
    }
  },
  created () {
    this.selfExpand = this.expand
  }
}
</script>
