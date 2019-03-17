<template>
    <div class='fly-progress'>
        <div class='fly-progress__bar'>
            <div class='fly-progress__outer'></div>
            <div class='fly-progress__inner'></div>
        </div>
        <div class='fly-progress__text'>
            20%
        </div>
        <div class='fly-progress__status'>
            <fly-icon name='x'></fly-icon>
        </div>
    </div>
</template>
<script>
export default {
  name: 'FlyProgress'
}
</script>
