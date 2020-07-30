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
        @focus='$emit("focus")'
        @blur='$emit("blur")'
        @change='$emit("change")'
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
  computed: {
    model: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
