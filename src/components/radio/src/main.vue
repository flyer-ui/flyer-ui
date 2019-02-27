<template>
    <label class='fly-radio'>
        <span :class='["fly-radio__input",{
          "is-checked":isChecked,
          "is-disabled":disabled
        }]'></span>
        <span class='fly-radio__label'>
          <slot></slot>
        </span>
        <input class='fly-radio__input-native'
          v-model="model"
          :disabled="disabled"
          :value='label'
          :name='name'
          type="radio" />
    </label>
</template>
<script>
import {findParentByName} from '~/util/util'
import emitter from '~/mixins/emitter'
export default{
  name: 'FlyRadio',
  mixins: [emitter],
  props: {
    value: {
      type: [String, Boolean, Number]
    },
    label: {
      type: [String, Boolean, Number],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.parent.value : this.value
      },
      set (newValue) {
        if (this.isGroup) {
          this.dispatch('FlyRadioGroup', 'input', newValue)
        } else {
          this.$emit('input', newValue)
        }
      }
    },
    isChecked: {
      get () {
        return this.model === this.label
      }
    },
    isGroup: {
      get () {
        return !!this.parent
      }
    },
    parent: {
      get () {
        return findParentByName('FlyRadioGroup', this)
      }
    }
  }
}
</script>
