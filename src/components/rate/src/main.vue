<template>
    <div class='fly-rate'>
      <input type='hidden' v-model='model'>
      <div :class='["fly-rate__item",
        {"is-disabled":disabled},
        `is-${size}`]'
        v-for='(item,index) in max' :key='index'>
        <i v-if='allowHalf'
          :class='["fly-icon fly-rate__half",
          iconName,
          {"is-active":isActive(getHalfValue(item))}]'
          @click='handleClick(getHalfValue(item))'
          @mouseout='handleHalfOut($event,item)'
          @mouseover='handleHalfOver($event,item)'>
          {{character}}
        </i>
        <i
          :class='["fly-icon fly-rate__full",
          iconName,{"is-active":isActive(item)}]'
          @click='handleClick(item)'
          @mouseout='handleFullOut($event,item)'
          @mouseover='handleFullOver($event,item)'>
          {{character}}
        </i>
      </div>
      <div v-if='showText' class='fly-rate__text'>
        <slot name='default' v-bind:value="model">
          {{model}}
        </slot>
      </div>
    </div>
</template>
<script>
export default {
  name: 'FlyRate',
  props: {
    value: Number,
    max: {
      type: Number,
      default: 5
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'fly-icon-star'
    },
    character: String,
    showText: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium',
      validator (value) {
        return ['small', 'medium', 'large'].indexOf(value) > -1
      }
    },
    showClear: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      selfModel: -1,
      hoverValue: -1,
      timer: null
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (value) {
        if (!this.disabled) {
          this.selfModel = value
          this.$emit('input', value)
          this.$emit('change', value)
        }
      }
    },
    iconName () {
      return typeof this.character === 'undefined' ? this.icon : ''
    }
  },
  methods: {
    handleFullOver ($event, value) {
      if (this.disabled) return ''
      this.hoverValue = value
      this.addClass($event.target, 'is-full')
    },
    handleFullOut ($event, value) {
      this.initialHoverValue()
      this.removeClass($event.target, 'is-full')
    },
    handleHalfOver ($event, value) {
      if (this.disabled) return ''
      this.hoverValue = value
      this.addClass($event.target, 'is-half')
    },
    handleHalfOut ($event, value) {
      this.initialHoverValue()
      this.removeClass($event.target, 'is-half')
    },
    handleClick (value) {
      this.model = value
    },
    isActive (value) {
      return this.hoverValue > -1 ? value < this.hoverValue : value <= this.model
    },
    getHalfValue (value) {
      return value - 1 + 0.5
    },
    addClass (target, name) {
      target.parentNode.classList.add(name)
    },
    removeClass (target, name) {
      target.parentNode.classList.remove(name)
    },
    initialHoverValue () {
      this.hoverValue = -1
    }
  }
}
</script>
