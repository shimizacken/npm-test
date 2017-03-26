let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let loaders = require('./webpack.loaders');

const PORT = 8282;

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:' + PORT + '/',
        './src/app.js'
    ],
    output: {
        publicPath: '/',
        path: path.resolve('build'),
        filename: 'bundle.dev.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.webpack.js', '.web.js'],
        modules: ['node_modules']
    },
    module: {
        rules: loaders
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.dev.html',
            files: {
                css: ['style.css'],
                js: ['bundle.js'],
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
                screw_ie8: true,
                drop_console: true,
                drop_debugger: true
            }
        }),
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        }),
    ],
    devServer: {
        contentBase: './',
        hot: true,
        inline: true,
        noInfo: true,
        historyApiFallback: true,
        port: PORT
    }
};