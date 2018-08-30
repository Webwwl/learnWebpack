const path = require('path')
module.exports = {
    entry: {
        app: './app.js'
    },
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: '[name].js'
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