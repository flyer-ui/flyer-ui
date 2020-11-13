<template>
    <fly-row class='fly-transfer'>
      <fly-col class='fly-transfer__sources' :span='10'>
          <panel ref='sources' v-model="sourcesKeys"
          :hasSelectAll='hasSelectAll'
          :title='titles[0]'
          :disabled='sourcesDisabled'
          :items="sources">
            <slot name='source-bottom'></slot>
          </panel>
      </fly-col>
      <fly-col class='fly-transfer__operation' align='center' :span='4'>
        <div class='fly-transfer__operation-left'>
          <fly-icon name='left' @click="handleToSources"></fly-icon>
        </div>
        <div class='fly-transfer__operation-right'>
          <fly-icon name='right' @click="handleToTargets"></fly-icon>
        </div>
      </fly-col>
      <fly-col class='fly-transfer__targets' :span='10'>
        <panel ref='targets' v-model="targetsKeys"
        :hasSelectAll='hasSelectAll'
        :title='titles[1]'
        :disabled='targetsDisabled'
        :items="targets">
          <slot name='target-bottom'></slot>
        </panel>
      </fly-col>
    </fly-row>
</template>
<script>
import Panel from './panel'
export default {
  name: 'FlyTransfer',
  components: {
    Panel
  },
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    },
    data: {
      type: Array,
      default () {
        return []
      }
    },
    titles: {
      type: Array,
      default () {
        return ['来源', '目标']
      }
    },
    hasSelectAll: {
      type: Boolean,
      default: true
    },
    targetsDefault: {
      type: Array,
      default () {
        return []
      }
    },
    sourcesDisabled: {
      type: Boolean,
      default: false
    },
    targetsDisabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      targets: [],
      sources: [],
      sourcesKeys: [],
      targetsKeys: [],
      changeItems: []
    }
  },
  created () {
    this.sources = this.data.slice(0)
    this.handleDefault()
  },
  methods: {
    handleTransfer (keys, to, from, panelName) {
      this.changeItems = []
      keys.forEach(key => {
        const index = from.findIndex(val => val.value === key)
        const item = from[index]
        to.push(item)
        this.changeItems.push(item)
        from.splice(index, 1)
      })
      keys.length = 0
      this.$refs[panelName] && this.$refs[panelName].resetState()
    },
    handleToTargets () {
      this.handleTransfer(this.sourcesKeys, this.targets, this.sources, 'sources')
      this.handleEmitValue()
    },
    handleToSources () {
      this.handleTransfer(this.targetsKeys, this.sources, this.targets, 'targets')
      this.handleEmitValue()
    },
    handleEmitValue () {
      this.$emit('input', this.targets.map(target => target.value))
      this.$emit('change', this.targets, this.changeItems)
    },
    handleDefault () {
      this.sourcesKeys = this.targetsDefault.slice(0)
      this.handleTransfer(this.sourcesKeys, this.targets, this.sources, 'sources')
    },
    setTargets (items) {
      this.targets = items
    }
  }
}
</script>
