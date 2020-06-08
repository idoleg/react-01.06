const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   entry: {
       app: './index.js',
   },
   context: path.resolve(__dirname, "static_src"),
   output: {
       path: path.resolve(__dirname, "static", "build"),
       filename: 'app.js',
   },
   module: {
    rules: [
        {
            test: /\.(js)$/,
            include: path.resolve(__dirname, "static_src"),
            loader: 'babel-loader',
            options: {
                presets: ['@babel/env', '@babel/react'],
            }
        }
    ],
},
   plugins: [
    new HTMLWebpackPlugin({template:  path.resolve(__dirname, "static_src", "index.html"),})
],
};