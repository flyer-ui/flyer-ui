<template>
    <div class='fly-input' @mouseover="hovering=true">
       <span class='fly-input__prepend' v-if='$slots.prepend'>
         <slot name='prepend'></slot>
       </span>
       <span class='fly-input__prefix' v-if='isShowPrefix'>
          <slot name='prefix'>
            <i :class='prefixIcon'></i>
          </slot>
       </span>
       <input
       :type='type'
       ref='input'
       :class='{
         "is-disabled":disabled,
         "is-prefix":isShowPrefix,
         "is-suffix":isShowSuffix,
         "is-prepend":$slots.prepend,
         "is-append":$slots.append
       }'
       :value='value'
       :disabled="disabled"
       :readonly="readonly"
       :maxlength="maxLength"
       :minlength="minLength"
       :placeholder="placeholder"
       @blur="handleBlur"
       @focus="handleFocus"
       @change="handleChange"
       class='fly-input__native' v-on:input='handleInput'>
       <span class='fly-input__suffix' v-if='isShowSuffix'>
          <slot name='suffix'>
            <i :class='suffixIcon'></i>
          </slot>
       </span>
       <span class='fly-input__append' v-if='$slots.append'>
         <slot name='append'></slot>
       </span>
       <i v-if='clearable' v-show="isShowClear" @click="handleClear" class='fly-input__clear'></i>
    </div>
</template>
<script>
export default {
  name: 'FlyInput',
  props: {
    value: String,
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    maxLength: Number,
    minLength: Number,
    prefixIcon: String,
    suffixIcon: String
  },
  data () {
    return {
      focused: false,
      hovering: false
    }
  },
  computed: {
    isShowClear: {
      get () {
        return this.value.length > 0 && (this.focused || this.hovering)
      }
    },
    isShowPrefix: {
      get () {
        return this.prefixIcon || this.$slots['prefix']
      }
    },
    isShowSuffix: {
      get () {
        return this.suffixIcon || this.$slots['suffix']
      }
    }
  },
  methods: {
    handleInput ($event) {
      this.$emit('input', $event.target.value)
    },
    handleClear ($event) {
      this.$emit('input', '')
      this.$emit('change', '')
      this.$emit('clear', '')
      this.focus()
    },
    handleBlur ($event) {
      this.$emit('blur', $event)
      this.focused = false
    },
    handleFocus ($event) {
      this.focused = true
      this.$emit('focus', $event)
    },
    handleChange ($event) {
      this.$emit('change', $event.target.value)
    },
    focus () {
      this.$refs.input.focus()
    },
    blur () {
      this.$refs.input.blur()
    }
  }
}
</script>
