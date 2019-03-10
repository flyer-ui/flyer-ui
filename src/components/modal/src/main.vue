<template>
    <div class='fly-modal is-dialog'>
      <div class='fly-modal__content'>
        <div class='fly-modal__header' v-if='$slots.header'>
          <slot name='header'></slot>
          <fly-icon class='fly-icon-x fly-modal__close'></fly-icon>
        </div>
        <div class='fly-modal__body'>
          <slot name='default'></slot>
        </div>
        <div class='fly-modal__footer'>
          <slot name='footer'></slot>
        </div>
      </div>
    </div>
</template>
<script>
export default{
  name: 'FlyModal',
  props: {

  }
}
</script>
