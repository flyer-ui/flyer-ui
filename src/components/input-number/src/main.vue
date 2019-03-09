<template>
    <div class='fly-input-number'>
        <label :class='["fly-input-number__plus",{
          "is-disabled":disabledPlus
        }]' @click='handlePlus'>
          <slot name='plus'>
            <i class='fly-icon-chevron-up'></i>
          </slot>
        </label>
        <input v-model='model' @blur='handleBlur' :class='["fly-input-number__native",{
          "is-disabled":disabled
        }]' type='text'>
        <label :class='["fly-input-number__minus",{
          "is-disabled":disalbedMinus
        }]' @click='handleMinus'>
          <slot name='minus'>
            <i class='fly-icon-chevron-down'></i>
          </slot>
        </label>
    </div>
</template>
<script>
import {preciseAddition, preciseReduce} from '~/util/util'
export default {
  name: 'FlyInputNumber',
  props: {
    value: Number,
    min: Number,
    max: Number,
    disabled: {
      type: Boolean,
      default: false
    },
    step: {
      tyep: Number,
      default: 1
    },
    precision: {
      type: Number,
      default: 0,
      validator (value) {
        return value > -1
      }
    },
    formatter: {
      type: Function
    },
    parser: {
      type: Function
    }
  },
  data () {
    return {
      selfModel: undefined
    }
  },
  computed: {
    model: {
      get () {
        return this.selfModel || this.precisionDisplay(this.value)
      },
      set (value) {
        if (typeof value === 'number') {
          if (this.min > value) {
            value = this.min
          }
          if (this.max < value) {
            value = this.max
          }
          this.$emit('input', value)
        }
        this.selfModel = this.precisionDisplay(value)
      }
    },
    disalbedMinus () {
      return this.min >= this.selfModel || this.disabled
    },
    disabledPlus () {
      return this.max <= this.selfModel || this.disabled
    }
  },
  methods: {
    handleBlur () {
      this.model = this.filterValue(this.model)
      this.$emit('on-blur')
    },
    handlePlus () {
      !this.disabledPlus && (this.model = preciseAddition(this.model, this.step))
    },
    handleMinus () {
      !this.disalbedMinus && (this.model = preciseReduce(this.model, this.step))
    },
    filterValue (value) {
      return Number.parseFloat(String(value).replace(/[^\d\\.-]*/ig, '')) || 0
    },
    precisionDisplay (value) {
      if (this.getMantissaLength(this.step) > this.precision) {
        console.error(`The value of 'precision' must be a non-negative integer 
        and cannot be less than the number of decimal places for 'step'.`)
      }
      return value.toFixed(this.precision)
    },
    getMantissaLength (value) {
      return (value.toString().split('.')[1] || '').length
    }
  }
}
</script>
