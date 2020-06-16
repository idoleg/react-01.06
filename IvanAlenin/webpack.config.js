const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, include: path.resolve(__dirname, "src"), loader: 'babel-loader',
                options: {presets: ['@babel/env', '@babel/react']},
            },
            {
                // test: /\.css$/i,
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader, options: {publicPath: "../"}},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'},
                    ],
            },
            {
                test: /\.(gif|png|jpe?g)$/, exclude: /favicon/,
                use: {loader: 'file-loader', options: {name: '[name].[ext]', outputPath: 'img'},}
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({template: path.resolve(__dirname, "public", "index.html")}),
        new MiniCssExtractPlugin({filename: 'css/[name].css'}),
    ],
    // resolve: {
    //     extensions: [".jsx", ".js"],
    // },
    devServer: {
        historyApiFallback: true,
    },
    devtool: 'inline-source-map',
}