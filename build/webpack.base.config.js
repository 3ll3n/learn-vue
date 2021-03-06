const path = require('path')

const configs = {
    entry: {
        app: path.resolve(__dirname, '../src/client-entry.js')
    },
    module: {
        rules:  [
            {
             enforce: 'pre',
             test: /(\.js$)|(\.vue$)/,
             loader: 'eslint-loader',
             exclude: /node_modules/
            },
            {
              test: /\.vue$/,
              loader: 'vue-loader',
              options: {
                css: 'css-loader',
                'sass': 'css-loader|sass-loader'
              }
            },
            {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: 'assets/js/[name].js'
    }
}

module.exports = configs
