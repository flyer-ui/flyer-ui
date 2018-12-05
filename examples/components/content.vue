<template>
    <div class='fly-demo-content'>
        内容
        <fly-button>默认按钮</fly-button>
        <fly-button nativeType='submit' type='primary'>默认按钮</fly-button>
        <fly-button type='success'>成功按钮</fly-button>
        <fly-button type='warning' loading>警告按钮</fly-button>
        <fly-button nativeType='reset' type='info'>信息按钮</fly-button>
        <fly-button nativeType='reset' circle type='info'>信息按钮</fly-button>
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
