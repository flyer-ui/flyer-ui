<template>
    <ul class='fly-select-group'>
        <li class='fly-select-group__title'>
            {{label}}
        </li>
        <slot name='default'></slot>
    </ul>
</template>
<script>
export default {
  name: 'FlyOptionGroup',
  props: {
    label: String
  }
}
</script>
