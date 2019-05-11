 
 <div style='text-align:center'>
  <img src='/examples/assets/imgs/logo.svg' style='width:160px;height:160px'>
 </div>
 <div>
  <a href="https://www.npmjs.com/package/flyer-ui">
    <img src="https://img.shields.io/npm/v/flyer-ui.svg">
  </a>
  <a href="http://img.badgesize.io/https://unpkg.com/flyer-ui/lib/index.js?compression=gzip&label=gzip%20size:%20JS">
    <img src="http://img.badgesize.io/https://unpkg.com/flyer-ui/lib/index.js?compression=gzip&label=gzip%20size:%20JS">
  </a>
  <a href="http://img.badgesize.io/https://unpkg.com/flyer-ui/lib/themes/index.css?compression=gzip&label=gzip%20size:%20CSS">
    <img src="http://img.badgesize.io/https://unpkg.com/flyer-ui/lib/themes/index.css?compression=gzip&label=gzip%20size:%20CSS">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
</div>

### npm 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用

```JS
npm i flyer-ui -S 
npm install flyer-ui -S
```
### CDN 引用方式

目前可以通过 unpkg.com/flyer-ui
 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。


```HTML
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/flyer-ui/lib/themes/index.css"> 
<!-- 引入组件库 --> 
<script src="https://unpkg.com/flyer-ui/lib/index.js"></script>
```
建议使用 CDN 引入 Flyer-UI 的用户在链接地址上锁定版本，以免将来 Flyer-UI 升级时受到非兼容性更新的影响。锁定版本的方法请查看 unpkg.com。

### 引入Flyer-UI

在main.js中写入以下内容

```VUE
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

### Community
感兴趣的朋友可以加微信: s272546896 (备注:Flyer-UI)

### LICENSE
MIT
Copyright (c) 2017-present, Zheng peng fei