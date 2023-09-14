const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
//const __dirname = "./"

module.exports = {
    entry: './mainApp.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            { test: /\.svg$/, use: 'svg-inline-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            { test: /\.(js)$/, use: 'babel-loader' }
            ],
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
    mode: 'development',//production, development, none
    optimization: {
        //runtimeChunk: 'single',
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        poll: 1000, // Проверяем изменения каждую секунду
    },
};