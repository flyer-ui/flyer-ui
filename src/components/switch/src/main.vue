<template>
    <label class='fly-switch' :class='{
      "is-checked":isChecked,
      "is-disabled":disabled
    }'>
        <input type='checkbox'
        :true-value='activeValue'
        :false-value='inactiveValue'
        :disabled='disabled'
        v-model="model"
        :name='name'
        @change="handleChange"
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

/**
 * 1、可以自定义开关值，默认开关值为：true|false
 * 2、可以用v-model实现数据双向绑定
 * 3、提供change事件，在组件状态发生变化时通知外部。
 * 4、可以设置为禁用状态
 */

export default {
  name: 'FlySwitch',
  props: {
    value: [String, Boolean, Number],
    name: String,
    disabled: Boolean,
    activeValue: {
      type: [String, Boolean, Number],
      default: true
    },
    inactiveValue: {
      type: [String, Boolean, Number],
      default: false
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (newValue) {
        this.$emit('input', newValue)
      }
    },
    isChecked () {
      return typeof this.model === 'boolean' ? this.model : this.model === this.activeValue
    }
  },
  methods: {
    /** 提供change事件，在组件状态发生变化时通知外部。 */
    handleChange ($event) {
      this.$nextTick(() => {
        this.$emit('change', this.model)
      })
    }
  }
}
</script>
