<template>
    <div class='fly-select-dropdowns' v-show='showPopper'>
        <ul class='fly-select-dropdowns__list'>
            dropdowns
        </ul>
    </div>
</template>
<script>
import VuePopper from '~/mixins/vue-popper'
export default {
  name: 'FlySelectDropdowns',
  mixins: [VuePopper]
}
</script>
