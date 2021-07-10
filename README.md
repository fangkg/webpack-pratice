得将 js 代码转成 es5 才行。首先安装下babel-loader及几个相关的依赖
配置 babel

babel-loader
@babel/core
@babel/preset-env
@babel/plugin-transform-runtime
@babel/plugin-proposal-decorators
@babel/plugin-proposal-class-properties
@babel/plugin-proposal-private-methods
@babel/runtime
@babel/runtime-corejs3

npm install babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime  @babel/plugin-proposal-decorators  @babel/plugin-proposal-class-properties @babel/plugin-proposal-private-methods -D
npm install @babel/runtime @babel/runtime-corejs3 -s



浏览器中观看效果
作为一个伸手党直接从社区嫖来一个插件 html-webpack-plugin，这个插件的作用是将打包产物引入到我们提前准备好的模板 .html 文件中，我们访问这个文件就能直观的看到效果了
先来安装下插件
npm install html-webpack-plugin -D

接着创建一个 public 目录， 用来存放静态资源。新增一个 index.html 模板，放在 public 目录下


每修改一次代码，都要走一遍打包流程，然后自己手动打开 html 文件，预览效果
第一次调用错误 api 的时候，报错信息定位不精确
打包目录下面 上次构建产物 也仍旧存在，时间长了会存在越来越多的无用代码