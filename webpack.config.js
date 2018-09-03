let webpack = require('webpack')
let cleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')
module.exports = {
    // 提取公告代码对单入口无效
    entry: {
        app: './app.js'
        // app2:'./app2.js'
    },
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: '[name].boundle.js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    plugins:[
        // new webpack.optimize.CommonsChunkPlugin({
        //   name:'common',
        //   minChunks:2
        // })
        new cleanWebpackPlugin(['./dist'],{
            verbose:true
        })
    ]
}