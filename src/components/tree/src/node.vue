<template>
<li class='fly-tree__node'>
    <div>
        <fly-icon name='minus' class='fly-tree__icon'></fly-icon>
        <fly-checkbox v-if='showCheckbox'></fly-checkbox>
        <span>{{data[label]}}</span>
    </div>
    <ul class='fly-tree__box' v-if='data.children.length>0'>
        <fly-tree-node v-for="(item,index) in data.children" :key='index' :data='item' :node-key='nodeKey' :props='props' :label='label' :show-checkbox='showCheckbox'>
        </fly-tree-node>
    </ul>
</li>
</template>

<script>
export default {
  name: 'FlyTreeNode',
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    props: {
      type: Object
    },
    nodeKey: String,
    label: String,
    showCheckbox: Boolean
  }
}
</script>
