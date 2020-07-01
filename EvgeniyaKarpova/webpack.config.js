const path = require('path');
const HtmlWebPlugin = require('html-webpack-plugin');

module.exports = {
    entry:["@babel/polyfill", path.resolve(__dirname, "src","index.js")],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "src"),
                loader: 'babel-loader',
                
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ],
    },
    plugins: [
        new HtmlWebPlugin({template: path.resolve(__dirname, "src","index.html")})
    ],
    resolve: {
        extensions: ['.jsx', '.js'],
    },
    devServer: {
        historyApiFallback: true,
        writeToDisk: true,
        proxy: {
            '/bot/': {
                target: 'https://aiproject.ru/api/',
                pathRewrite: { '/bot/': '' },
                secure: false,
                changeOrigin: true,
            }
        }
    },
    devtool: 'inline-source-map',
}