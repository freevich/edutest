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
            { test: /\.pdf$/, use: 'raw-loader' },
            //
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                // More information here https://webpack.js.org/guides/asset-modules/
                type: "asset/resource",
            },
            // {
            //     test: /\.ttf$/i,
            //     type: 'asset/resource',
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[name].[ext]',
            //                 outputPath: '/fonts/'
            //             }
            //         }
            //     ],
            //
            // },
            // {
            //     test: /\.(pdf|txt)$/,
            //     include: path.resolve(__dirname, "src"),
            //     type: "asset/resource",
            //     // generator: {
            //     //     filename: "./src/data/pdfFiles/[name][ext]",
            //     // }
            // },
            // {
            //     test: /\.(png|jp(e*)g|gif)$/,
            //     exclude: /node_modules/,
            //     use: [{
            //         loader: 'url-loader',
            //         options: {
            //             limit: 10000,
            //             publicPath: "/img"
            //         }
            //     }]
            // },
            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                type: 'asset/resource',
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }]
            }


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