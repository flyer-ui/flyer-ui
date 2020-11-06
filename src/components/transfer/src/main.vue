<template>
    <fly-row class='fly-transfer'>
      <fly-col class='fly-transfer__sources' :span='10'>
          <panel ref='sources' v-model="sourcesKeys"
          :hasSelectAll='hasSelectAll'
          :title='titles[0]'
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
    }
  },
  data () {
    return {
      targets: [],
      sources: [],
      sourcesKeys: [],
      targetsKeys: []
    }
  },
  created () {
    this.sources = this.data.slice(0)
    this.handleDefault()
  },
  methods: {
    handleToTargets () {
      this.sourcesKeys.forEach(key => {
        const index = this.sources.findIndex(val => val.value === key)
        this.targets.push(this.sources[index])
        this.sources.splice(index, 1)
      })
      this.sourcesKeys.length = 0
      this.$refs['sources'].resetState()
      this.handleEmitValue()
    },
    handleToSources () {
      this.targetsKeys.forEach(key => {
        const index = this.targets.findIndex(val => val.value === key)
        this.sources.push(this.targets[index])
        this.targets.splice(index, 1)
      })
      this.$refs['targets'].resetState()
      this.handleEmitValue()
      this.targetsKeys.length = 0
    },
    handleEmitValue () {
      this.$emit('input', this.targets.map(target => target.value))
      this.$emit('change', this.targets)
    },
    handleDefault () {
      this.sourcesKeys = this.targetsDefault.slice(0)
      this.handleToTargets()
    }
  }
}
</script>
