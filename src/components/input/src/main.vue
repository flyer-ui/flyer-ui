<template>
    <div class='fly-input'>
       <slot></slot>
       <input
       :class='{
         "is-disabled":disabled
       }'
       :value='value'
       :disabled="disabled"
       :maxlength="maxLength"
       :minlength="minLength"
       :placeholder="placeholder"
       @blur="handleBlur"
       @focus="handleFocus"
       @change="handleChange"
       class='fly-input__native' v-on:input='handleInput'>
       <i v-if='clearable' v-show="isShowClear" @click="handleClear" class='fly-input__clear'></i>
    </div>
</template>
<script>
export default {
  name: 'FlyInput',
  props: {
    value: String,
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    maxLength: Number,
    minLength: Number
  },
  computed: {
    isShowClear: {
      get () {
        return true
      }
    }
  },
  methods: {
    handleInput ($event) {
      this.$emit('input', $event.target.value)
    },
    handleClear ($event) {
      this.$emit('input', '')
      this.$emit('on-clear', '')
    },
    handleBlur ($event) {
      this.$emit('on-blur', $event)
    },
    handleFocus ($event) {
      this.$emit('on-focus', $event)
    },
    handleChange ($event) {
      this.$emit('on-change', $event.target.value)
    }
  }
}
</script>
