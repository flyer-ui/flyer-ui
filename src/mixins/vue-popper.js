const PopperJS = require('popper.js/dist/umd/popper')
export default {
  props: {
    value: Boolean,
    reference: {},
    popper: {},
    placement: {
      type: String,
      default: 'bottom'
    },
    offsets: {
      type: [String, Number],
      default: 10
    },
    nativeProps: {
      type: Object
    }
  },
  data () {
    return {
      popperObj: null
    }
  },
  computed: {
    showPopper: {
      get () {
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
        const reference = this.reference && this.reference.$el
        const popper = this.popper && this.popper.$el
        const options = {...this.nativeProps, ...{placement: this.placement, offset: {offset: this.offset}}}
        this.popperObj = new PopperJS(reference, popper, options)
        this.$nextTick(() => {
          this.updatePopper()
        })
      }
    },
    updatePopper () {
      if (this.popperObj) {
        this.popperObj.update()
        this.popper.$el.style.width = this.reference.$el.offsetWidth + 'px'
      }
    },
    destroyPopper () {
      this.popperObj = null
    }
  },
  mounted () {
    document.body.addEventListener('click', ($event) => {
      if (!this.popper || !this.popper.$el) return
      if ($event.target === this.popper.$el || this.popper.$el.contains($event.target)) {

      }
      // this.showPopper = false
    })
  }
}
