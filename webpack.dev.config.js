const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // title: 'Webpack App',
            // meta: {
            //     'charset': 'utf-8',
            //     'viewport': 'width=device-width, initial-scale=1'
            // }
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './src',
        watchContentBase: true,
        hot: true,
        inline: true,
    }
};
