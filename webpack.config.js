let webpack = require('webpack')
let cleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')
module.exports = {
    // 提取公告代码对单入口无效
    entry: {
        app: './app.js',
    },
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: '[name].boundle.js',
        publicPath: path.join(__dirname, 'dist/'),
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options:{
                            // 将style标签插入浏览器是执行的js commonJs规范
                            transform:'./css/transform.js'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options:{
                            modules:true,
                            Minimize:true,
                            localIdentName:'[path][name]'
                        }
                    }
                ]
            },
            {
                test:/\.s[ac]ss$/,
                use: [
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader',
                        options:{
                            // modules:true,
                            Minimize:true
                        }
                    },
                    {
                        loader:'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin(['./dist'], {
            verbose: true
        })
    ]
}