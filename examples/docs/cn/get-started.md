# 快速上手

## 引入 Flyer-UI

在 main.js 中写入以下内容

```JS
import Vue from 'vue'
import App from './App'
import FlyerUI from 'flyer-ui'
import 'flyer-ui/lib/themes/index.css'

Vue.use(Flyer)

new Vue({
    el: '#app',
    render: h=>h(App)
})

```

以上代码便完成了 Flyer-UI 的引入。需要注意的是，样式文件需要单独引入。
