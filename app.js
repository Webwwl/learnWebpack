let myModule = 'A'

// 提前将moduleC引入进来,这样A、B的打包代码里就不会有moduleC了
// moduleC此时在app.boundle.js中
// require.include('./moduleC')

if(myModule === 'A'){
    import(/* webpackChunkName:'moduleA' */'./moduleA').then(function (moduleA) {
        console.log(moduleA)
    })
} else if(module === 'B'){
    import(/*  webpackChunkName: "moduleB" */'./moduleB').then( function (moduleB) {
        console.log(moduleB)
    })
}

