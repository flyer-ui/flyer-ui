<template>
    <div class='fly-form__item'>
        <div class='fly-form__item-label'>
            {{label}}<i v-if='required' class='fly-form__item-required'>*</i>
        </div>
        <div class='fly-form__item-content'>
            <slot name='default'>
            </slot>
            <div class='fly-form__item-error'>
                {{errorText}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'FlyFormItem',
  props: {
    label: {
      type: String
    },
    prop: {
      type: String
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      errorText: ''
    }
  },
  methods: {
    showError (message) {
      this.errorText = message
    }
  }
}
</script>
