const webpack = require('webpack')
const path = require('path')
const cleanWebapckPlguin = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const boundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const FileNamesPlugin = require('./plugins/filename')

let config = {
    entry: {
        main: './src/main.js',
        // main2: './src/main2.js'
        // vendor: ['lodash']
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'js/[name].boundle.js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['@babel/preset-env'],
                            plugins: ["@babel/syntax-dynamic-import", 'lodash']
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.less/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    devServer: {
      port: 3000,
    //   publicPath: '/assets/',
      compress: true,
      before(app) {
        app.get('/mock/test', (req, res) => {
            res.json({
                status: 0
            })
        })
      }
    //   contentBase: path.join(__dirname,'public'),
    //   hot: true
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 10,
            minChunks: 2,
            automaticNameDelimiter: '~',
            name: 'js/',
            cacheGroups: {
                common: {
                    test: /src\/other/,
                    enforce: true
                }
            }
        },
        minimize: false
    },
    plugins: [
        new cleanWebapckPlguin(['dist']),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: ['vendor'],
        //     minChunks: Infinity
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     async: 'async-common',
        //     children: true,
        //     minChunks: 2
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: ['common'],
        //     minChunks: 2,
        //     chunks: ['main']
        // }),
        // new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin(),
        new FileNamesPlugin()
        // new boundleAnalyzerPlugin()
        // new webpack.optimize.UglifyJsPlugin()
    ]
}

module.exports = config
// module.exports = (env, args) => {
// 	console.log("​env", env)
//     if(args.flag == 'true') {
//         console.log('hahaha')
//         config.devtool = 'source-map'
//     } else {
//         console.log('hehehe')
//         config.devtool = 'inline-source-map'
//     }
//     return config
// }