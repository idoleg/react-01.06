const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.(js)$/, include: path.resolve(__dirname, "src"), loader: 'babel-loader',
                options: {presets: ['@babel/env', '@babel/react']},
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader']
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({template: path.resolve(__dirname, "public", "index.html"),})
    ],
}

/*
 добавить css для bootstrap - 4 часа... so sadly.. ))
 rules: [
 ...
             {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader']
            },
        ],
*/