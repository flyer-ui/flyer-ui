## 快速上手

### 引入Flyer-UI

在main.js中写入以下内容

```vue
import Vue from 'vue'
import App from './App'
import FlyerUI from 'flyer-ui'
import 'flyer-ui/lib/themes/index.css'

new Vue({
el: '#app',
components: { App },
template: '<App/>'
})

```
以上代码便完成了Flyer-UI的引入。需要注意的是，样式文件需要单独引入。
