const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const webpack = require('webpack'); //to access built-in plugins
//const outputDirectory = './dist';
//
module.exports = {
    entry: '/src/mainApp.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            { test: /\.svg$/, use: 'svg-inline-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            { test: /\.js$/, use: 'babel-loader' },
            ],
    },
    plugins: [
        new HtmlWebpackPlugin(
            { template: 'index.html',
              favicon: 'favicon.ico'
            }),
        //new CleanWebpackPlugin(),

    ],
    mode: 'development',//production, development, none
    optimization: {
        //runtimeChunk: 'single',
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        poll: 1000, // Проверяем изменения каждую секунду
    },
    devServer: {
        port: 3000,
        open: true,
        proxy: {
            '/api': 'http://localhost:8080'
        },
        historyApiFallback: true,
        //contentBase: './dist/index.html',
        hot: true
    },

};