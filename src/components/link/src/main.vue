<template>
    <a :class='["fly-link",
        `fly-link--${type}`
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
    }
  }
}
</script>
