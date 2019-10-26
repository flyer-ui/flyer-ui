<template>
  <div :class="['fly-color-card','fly-color-'+type]">
      <div class='fly-color-card__main'>
          <div>{{text}}</div>
          <div>{{color}}</div>
      </div>
      <ul>
          <li :class="[`fly-color-${type}--default`]"></li>
          <li :class="[`fly-color-${type}--hover`]"></li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'FlyColorCard',
  props: {
    color: String,
    type: {
      type: String,
      validator (value) {
        return ['border', 'primary', 'success', 'info', 'warning', 'danger', 'title', 'subtitle', 'text', 'placeholder'].indexOf(value) > -1
      }
    },
    text: String
  },
  data () {
    return {
      changeNums: [8, 7, 5, 1]
    }
  }
}
</script>
