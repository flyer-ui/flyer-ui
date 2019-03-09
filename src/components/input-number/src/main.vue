<template>
    <div class='fly-input-number'>
        <label class='fly-input-number__plus' @click='handlePlus'>
          <slot name='plus'>
            <i class='fly-icon-chevron-up'></i>
          </slot>
        </label>
        <input v-model='model' @blur='handleBlur' class='fly-input-number__native' type='text'>
        <label class='fly-input-number__minus' @click='handleMinus'>
          <slot name='minus'>
            <i class='fly-icon-chevron-down'></i>
          </slot>
        </label>
    </div>
</template>
<script>
export default {
  name: 'FlyInputNumber',
  props: {
    value: Number,
    min: Number,
    max: Number
  },
  data () {
    return {
      selfModel: 0
    }
  },
  computed: {
    model: {
      get () {
        return this.selfModel
      },
      set (value) {
        this.selfModel = value
        this.$emit('input', this.model)
      }
    }
  },
  methods: {
    handleBlur () {
      this.model = this.filterValue(this.model)
      this.$emit('on-blur')
    },
    handlePlus () {
      this.model++
    },
    handleMinus () {
      this.model--
    },
    filterValue (value) {
      return parseFloat(String(value).replace(/[^\d-$%￥.]*/ig, '')) || 0
    }
  }
}
</script>
