<template>
    <label class='fly-switch' :class='{
      "is-checked":isChecked,
      "is-disabled":disabled
    }'>
        <input type='checkbox' v-if='activeValue || inactiveValue'
        :true-value='activeValue'
        :false-value='inactiveValue'
        :disabled='disabled'
        v-model="model"
        :name='name'
        @change="handleChange"
        class='fly-switch__native'/>
        <input type='checkbox' v-else
        :disabled='disabled'
        v-model="model"
        @change="handleChange"
        :name='name'
        class='fly-switch__native'/>
        <span class='fly-switch__active' v-if='isChecked'>
          <slot name='active'></slot>
        </span>
        <span class='fly-switch__inactive' v-if='!isChecked'>
          <slot name='inactive'></slot>
        </span>
    </label>
</template>
<script>
export default {
  name: 'FlySwitch',
  props: {
    value: [String, Boolean, Number],
    name: String,
    checked: Boolean,
    disabled: Boolean,
    activeValue: [String, Boolean, Number],
    inactiveValue: [String, Boolean, Number]
  },
  data () {
    return {
      selfModel: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.selfModel || this.checked
      },
      set (newValue) {
        this.selfModel = newValue
        this.$emit('input', newValue)
      }
    },
    isChecked () {
      return typeof this.model === 'boolean' ? this.model : this.model === this.activeValue
    }
  },
  methods: {
    handleChange ($event) {
      this.$nextTick(() => {
        this.$emit('change', this.model)
      })
    }
  }
}
</script>
