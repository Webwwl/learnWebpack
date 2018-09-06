let webpack = require('webpack')
let cleanWebpackPlugin = require('clean-webpack-plugin')
let extractTextWebpackPlugin = require('extract-text-webpack-plugin')
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
                use: extractTextWebpackPlugin.extract({
                    // 不分离css时使用的loader
                    fallback: {
                        loader: 'style-loader',
                        options: {
                            // 将style标签插入浏览器时执行的js commonJs规范
                            transform: './css/transform.js'
                        }
                    },
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                // modules: true,
                                minimize: true
                                // localIdentName: '[path][name]'
                            }
                        }
                    ]
                })
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            // modules:true,
                            minimize: true
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin(['./dist'], {
            verbose: true
        }),
        new extractTextWebpackPlugin({
            filename: '[name].min.css',
            //指定提取css的范围  
            allChunks:false
        })
    ]
}