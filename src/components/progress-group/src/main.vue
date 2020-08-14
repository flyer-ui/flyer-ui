<template>
    <div class='fly-progress'>
        <div :class='["fly-progress__bar"]'>
            <div class='fly-progress__outer'>
               <slot name='default'></slot>
            </div>
        </div>
    </div>
</template>

<script>
import ProgressItem from './item'
export default {
  name: 'FlyProgressGroup',
  components: {
    ProgressItem
  }
}
</script>
