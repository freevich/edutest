const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

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
            { test: /\.(pdf|txt)$/,
                use: ['file-loader', 'url-loader', 'raw-loader']
            },
            //
            {
                test: /\.ttf$/i,
                type: 'asset/resource',
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        }
                    }
                ],

            },
            {
                test: /\.(png|jp(e*)g|gif)$/,
                use: ['url-loader', 'file-loader']
                //     [{
                //     loader: ['url-loader', 'file-loader'],
                //     options: {
                //         //limit: 10000,
                //         //publicPath: "/src/img",
                //         //mimetype: 'image/png',
                //         //name: "[path][name].[hash].[ext]",
                //     }
                // }]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(
            { template: 'index.html',
              favicon: 'favicon.ico'
            }),
        new CleanWebpackPlugin(),

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