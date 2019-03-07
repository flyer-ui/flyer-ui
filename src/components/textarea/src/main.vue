<template>
    <div class='fly-textarea'>
        <textarea
        class='fly-textarea__native'
        :class='{
        "is-disabled":disabled
        }'
        :rows='rows'
        :cols='cols'
        :disabled='disabled'
        :placeholder="placeholder"
        :maxlength='maxLength'
        :minlength='minLength'
        @focus='$emit("on-focus")'
        @blur='$emit("on-blur")'
        v-model='model'></textarea>
    </div>
</template>
<script>
export default {
  name: 'FlyTextarea',
  props: {
    value: [String, Number, Boolean],
    placeholder: String,
    disabled: Boolean,
    maxLength: Number,
    minLength: Number,
    rows: Number,
    cols: Number
  },
  data () {
    return {
      selfModel: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.selfModel
      },
      set (value) {
        this.selfModel = value
        this.$emit('input', value)
      }
    }
  }
}
</script>
