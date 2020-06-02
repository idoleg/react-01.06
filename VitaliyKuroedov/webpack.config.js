const path = require('path')
const HTMLWebbackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, "src" , "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                include: path.resolve(__dirname, "src"),
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react']
                }
            }
        ],
    },
    plugins: [
        new HTMLWebbackPlugin({template: path.resolve(__dirname, "src", "index.html")})
    ]

}