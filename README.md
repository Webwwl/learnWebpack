### tree-shaking
tree-shaking,摇晃大树，枯叶落地,tree-shaking的目的就是将程序中引入但未使用的代码剔除，减少打包后文件大小。

### lodash需要配置babel进行tree-shaking,安装插件 babel-plugin-lodash<br>

webpack.optimize.UglifyJsPlugin会报错，请安装`uglifyjs-webpack-plugin`替
代

### tree-shakong in css

需要的包：`purifycss-webpack`,`purify-css`,`glop-all`
> webpack的plugin配置中：purifyCss在extractTextWebpackPlugin后面 <br>
> 坑： html中有文字与未使用样式的类名同名是，tree-shaking没效果，列入本例中的danger类。