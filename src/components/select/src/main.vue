<template>
    <div class='fly-select'>
      <fly-input
      :placeholder='placeholder'
      :clearable='clearable'
      readonly
      suffix-icon='fly-icon-chevron-down'
      ref='flyInput'
      @on-focus='handleClick'
      ></fly-input>
      <fly-select-dropdowns ref='flyDropdowns' v-model='showPopper' :reference='$refs.flyInput' :popper='$refs.flyDropdowns'></fly-select-dropdowns>
    </div>
</template>
<script>
import FlyInput from '~/components/input'
import FlySelectDropdowns from './dropdowns'
export default {
  name: 'FlySelect',
  components: {
    FlyInput,
    FlySelectDropdowns
  },
  props: {
    value: [Number, String, Array],
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    placeholder: String
  },
  data () {
    return {
      showPopper: null
    }
  },
  methods: {
    handleClick ($event) {
      this.showPopper = true
    }
  }
}
</script>
