<template>
    <div class='fly-input' @mouseover="hovering=true">
       <span class='fly-input__prepend' v-if='$slots.prepend'>
         <slot name='prepend'></slot>
       </span>
       <span :class='[
       "fly-input__prefix",
       `fly-input__prefix--${size}`]' v-if='isShowPrefix'>
          <slot name='prefix'>
            <i class='fly-icon' :class='prefixIcon'></i>
          </slot>
       </span>
       <input
       :type='selfType'
       ref='input'
       :class='["fly-input__native",
         `fly-input__native--${size}`,
         {
         "is-disabled":disabled,
         "is-prefix":isShowPrefix,
         "is-suffix":isShowSuffix,
         "is-prepend":$slots.prepend,
         "is-append":$slots.append,
         "is-round":isRound
       }]'
       :value='value'
       :disabled="disabled"
       :readonly="readonly"
       :maxlength="maxLength"
       :minlength="minLength"
       :placeholder="placeholder"
       @blur="handleBlur"
       @focus="handleFocus"
       @change="handleChange"
       v-on:input='handleInput'>
       <span :class='[
          "fly-input__suffix",
          `fly-input__suffix--${size}`]' v-if='isShowSuffix'>
          <slot name='suffix'>
            <i class='fly-icon' :class='suffixIcon'></i>
          </slot>
       </span>
       <span class='fly-input__append' v-if='$slots.append'>
         <slot name='append'></slot>
       </span>
       <i v-if='showPassword' @click="handleShowPassword" class='fly-icon fly-icon-eye_protection fly-input__eye'></i>
       <i v-if='clearable' v-show="isShowClear" @click="handleClear" class='fly-icon fly-icon-close fly-input__clear'></i>
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
    round: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium',
      validator (value) {
        return ['large', 'medium', 'small'].indexOf(value) > -1
      }
    },
    maxLength: Number,
    minLength: Number,
    prefixIcon: String,
    suffixIcon: String,
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      focused: false,
      hovering: false,
      selfType: this.type
    }
  },
  computed: {
    isShowClear: {
      get () {
        return (this.value && this.value.length > 0) && (this.focused || this.hovering)
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
    },
    isRound: {
      get () {
        return this.round && (!this.$slots.append && !this.$slots.prepend)
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
    handleShowPassword () {
      if (this.clearCode) {
        this.clearCode = false
        this.selfType = 'password'
      } else {
        this.clearCode = true
        this.selfType = 'input'
      }
    },
    focus () {
      this.$refs.input.focus()
    },
    blur () {
      this.$refs.input.blur()
    }
  },
  created () {
    if (this.showPassword) {
      this.clearCode = false
    }
  }
}
</script>
