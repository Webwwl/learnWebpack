### tree-shaking
tree-shaking,摇晃大树，枯叶落地,tree-shaking的目的就是将程序中引入但未使用的代码剔除，减少打包后文件大小。

#### lodash需要配置babel进行tree-shaking,安装插件 babel-plugin-lodash<br>

webpack.optimize.UglifyJsPlugin会报错，请安装`uglifyjs-webpack-plugin`替代