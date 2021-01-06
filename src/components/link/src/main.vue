<template>
    <a @click="handleClick" :class='["fly-link",
        `fly-link--${type}`,
        {"is-disabled":disabled},
        {"is-underline":underline}
    ]' :href='href'>
        <slot name='default'></slot>
    </a>
</template>

<script>
export default {
  name: 'FlyLink',
  props: {
    href: String,
    type: {
      type: String,
      default: 'default'
    },
    disabled: Boolean,
    underline: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
