const path = require("path");
const webpack = require('webpack');

module.exports = {
    entry: {  //с чего начинается сборка
        app: './index.js', 
    },
    context: path.resolve(__dirname, "src"),  //папка где искать 
    output: {
        path: path.resolve(__dirname, "static", "build"),
        filename: 'app.js',
    },
};