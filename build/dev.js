let path = require('path')
let config = require('../webpack.config')
let webpack = require('webpack')
const boundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
let simpleConfig = {
  entry: './src/mian.js',
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: '[name].[hash].boundle.js'
  }
}
let compiler = webpack(config)

// new boundleAnalyzerPlugin().apply(compiler)
compiler.run( (stat, err) => {
  console.log('my own run webpack')
})