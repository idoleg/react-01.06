const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
   entry: ["@babel/polyfill", path.resolve(__dirname, "src", "index.js")],
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "main.js"
   },
   module: {
      rules: [
         {
            test: /\.(js||jsx)$/,
            include: path.resolve(__dirname, "src"),
            loader: 'babel-loader',
            options: {
               presets: ['@babel/env', '@babel/react'],
               plugins: [
                  [
                     "@babel/plugin-proposal-class-properties",
                     {"loose": true}]
               ]
            }
         },
         {
            test: /\.(css)$/,
            loader: 'style-loader!css-loader',
         },
         {
            test: /\.(png|jpg)$/, 
            loader: 'url-loader?limit=8192'
         }
      ]
   },
   plugins: [
      new HTMLWebpackPlugin({ template: path.resolve(__dirname, "src", "index.html") })
   ],
   resolve: {
      extensions: [".jsx", ".js"],
   },
   devServer: {
      historyApiFallback: true,
      writeToDisk: true,
      proxy: {
         '/bot/': {
            target: 'https://aiproject.ru/api/',
            pathRewrite: {'/bot/' : ''},
            secure: false,
            changeOrigin: true,
         }
      }
   },
   devtool: 'inline-source-map',
}