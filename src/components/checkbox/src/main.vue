<template>
    <label class='fly-checkbox'>
        <span :class='["fly-icon fly-checkbox__input",{
          "is-checked":isChecked,
          "is-disabled":disabled,
          "is-indeterminate":indeterminate
        }]'>
        </span>
        <span class='fly-checkbox__label'>
          <slot></slot>
        </span>
        <input class='fly-checkbox__input-native'
          v-model="model"
          :disabled="disabled"
          :value="label"
          :name='name'
          :true-value="trueValue"
          :false-value="falseValue"
          @change='handleChange'
          type="checkbox" />
    </label>
</template>
<script>
import {findParentByName} from '~/utils'
import emitter from '~/mixins/emitter'
export default{
  name: 'FlyCheckbox',
  mixins: [emitter],
  props: {
    value: [String, Number, Boolean],
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selfModel: undefined
    }
  },
  created () {
    this.selfModel = this.value || this.checked
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.parent.value : this.selfModel
      },
      set (newValue) {
        if (this.isGroup) {
          this.dispatch('FlyCheckboxGroup', 'input', [newValue])
        } else {
          this.selfModel = newValue
          this.$emit('input', newValue)
        }
      }
    },
    isChecked: {
      get () {
        return this.isGroup ? this.parent.value.indexOf(this.label) > -1
          : typeof this.model === 'boolean' ? this.model : this.model === this.trueValue
      }
    },
    isGroup: {
      get () {
        return !!this.parent
      }
    },
    parent: {
      get () {
        return findParentByName('FlyCheckboxGroup', this)
      }
    }
  },
  watch: {
    value () {
      this.model = this.value
    }
  },
  methods: {
    handleChange ($event) {
      this.$nextTick(() => {
        if (this.isGroup) {
          this.dispatch('FlyCheckboxGroup', 'change', [this.parent.value])
        } else {
          this.$emit('change', this.model)
        }
      })
    }
  }
}
</script>
