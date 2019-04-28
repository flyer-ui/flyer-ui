const PopperJS = require('popper.js/dist/umd/popper')

export default {
  props: {
    value: Boolean,
    reference: {},
    popper: {},
    appendToBody: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'bottom'
    },
    offset: {
      type: [String, Number],
      default: 20
    },
    arrowOffset: {
      type: Number,
      default: 35
    },
    hasArrow: {
      type: Boolean,
      default: true
    },
    nativeProps: {
      type: Object
    }
  },
  data () {
    return {
      popperObj: null,
      selfModel: false
    }
  },
  computed: {
    showPopper: {
      get () {
        console.log('value', this.value)
        this.value ? this.createPopper() : this.updatePopper()
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    createPopper () {
      if (this.popperObj) {
        this.updatePopper()
      } else {
        const reference = this.referenceElm || (this.reference && this.reference.$el)
        const popper = this.popperElm || (this.popper && this.popper.$el)
        if (this.appendToBody) {
          document.body.appendChild(popper)
        }
        if (this.hasArrow) {
          this.appendArrow(popper)
        }
        const options = {...this.nativeProps,
          ...{placement: this.placement,
            offsets: {offset: this.offset},
            arrowOffset: this.arrowOffset,
            onCreate: (data) => {
              this.updatePopper()
            }}}

        this.popperObj = new PopperJS(reference, popper, options)
      }
    },
    updatePopper () {
      if (this.popperObj) {
        this.$nextTick(this.popperObj.update)
      } else {
        this.createPopper()
      }
    },
    destroyPopper () {
      this.popperObj = null
    },
    appendArrow (popper) {
      const arrow = document.createElement('div')
      arrow.className = 'popper__arrow'
      popper.appendChild(arrow)
    }
  }
}
