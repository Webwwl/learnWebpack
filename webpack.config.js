const path = require('path')
module.exports = {
    entry: {
        app: './app.js'
    },
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: '[name].[hash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    }
}