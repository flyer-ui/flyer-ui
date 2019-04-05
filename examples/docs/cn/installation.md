## 安装

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
我们建议使用 CDN 引入 Flyer-UI 的用户在链接地址上锁定版本，以免将来 Flyer-UI 升级时受到非兼容性更新的影响。锁定版本的方法请查看 unpkg.com。