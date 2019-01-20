let config = require('../webpack.config')
let webpack = require('webpack')
const boundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

let compiler = webpack(config)

(new boundleAnalyzerPlugin()).apply(compiler)

compiler.run( (stat, err) => {
  console.log('my own run webpack')
})