<template>
    <div class='fly-demo-content'>
        <h3>Button类型</h3>
        <p>
            <fly-button>Default</fly-button>
            <fly-button type='primary'>Primary</fly-button>
            <fly-button type='warning'>Warning</fly-button>
            <fly-button type='danger'>Danger</fly-button>
            <fly-button type='success'>Success</fly-button>
            <fly-button type='info'>Info</fly-button>
        </p>
        <h3>Button特性</h3>
        <p>
            <fly-button native-type='button'>Button</fly-button>
            <fly-button native-type='submit'>Submit</fly-button>
            <fly-button native-type='reset'>Reset</fly-button>
            <fly-button disabled>Disabled</fly-button>
            <fly-button loading>Loading...</fly-button>
        </p>
        <h3>Icon Button</h3>
        <p>
            <fly-button icon='fly-icon-help-circle'></fly-button>
            <fly-button icon='fly-icon-map-pin' circle></fly-button>
        </p>
    </div>
</template>
<script>
export default {
  name: 'FlyContent'
}
</script>
<style lang='scss' scoped>
.fly-demo-content{
    // background-color:#1CD5FB;
    box-sizing: border-box;
    width: 95%;
    height:100%;
}
</style>
