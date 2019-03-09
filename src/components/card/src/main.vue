<template>
    <div class='fly-card'>
        <div class='fly-card__header' v-if='$slots.header'><slot name='header'></slot></div>
        <div class='fly-card__body'><slot name='default'></slot></div>
        <div class='fly-card__footer' v-if='$slots.footer'><slot name='footer'></slot></div>
    </div>
</template>
<script>
export default {
  name: 'FlyCard'
}
</script>
