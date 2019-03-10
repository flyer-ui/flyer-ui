<script>
    export default {
        data(){
            return {
                open1:false
            }
        },
        methods:{
            handleOpen(){
                this.open1 = true
            }
        }
    }
</script>
## Modal 模态框

### 基本使用
::: demo
```html
<template>
    <fly-button @on-click='handleOpen'>基本使用</fly-button>
    <fly-modal>
        <div slot='header'>
            Title
        </div>
        <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
        </ul>
        <div slot='footer'>
            <fly-button type='primary'>确认</fly-button>
            <fly-button>取消</fly-button>
        </div>
    </fly-modal>
</template>
<script>
    export default {

    }
</script>
```
:::