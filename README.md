# learnWebpack
learn how to use webpack

### webpack可以兼容es6、AMD、commonjs的模块化写法
> 只是支持es6的模块化写法，并不是支持es6的特性，想要使用es6语法需引入`babel-loader`

### babel-polyfill  垫片 全局注册  适用于应用开发
### babel-transform-runtime  局部实现  使用于 框架开发

### require.ensure(depandencies,successCallback,errorCallback,chunkName)
异步加载

### import(module).then( module => {})
异步
> require.ensure 引入文件但不一定执行，需要在successCallback中require相应的module
> import() 引入文件并执行  