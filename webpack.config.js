const webpack = require('webpack')
const path = require('path')
const cleanWebapckPlguin = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const boundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    entry: {
        main: './src/main.js',
        // main2: './src/main2.js'
        // vendor: ['lodash']
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].boundle.js',
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
                test: /\.less/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    devServer: {
      port: 3000
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 10,
            // maxSize: 20,
            minChunks: 2,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /node_modules/,
                    priority: -10,
                    minChunks: 1,
                    filename: '[name].[hash].boundle.js'
                },
                common: {
                    chunks: 'async',
                    priority: 0,
                    minChunks: 1,
                    minSize: 10,
                },
                other: {
                    chunks: 'all',
                    priority: 1,
                    minChunks: 2,
                    minSize: 10,
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
        new htmlWebpackPlugin({
            template: './index.html'
        }),
        new boundleAnalyzerPlugin()
        // new webpack.optimize.UglifyJsPlugin()
    ]
}