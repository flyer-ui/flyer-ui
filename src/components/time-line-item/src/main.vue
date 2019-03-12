<template>
    <div class='fly-time-line__item'>
        <slot name='dot'><div class='fly-time-line__dot'></div></slot>
        <div class='fly-time-line__body'>
          <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
  name: 'FlyTimeLineItem'
}
</script>
