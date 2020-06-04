const path = require('path');
const HTMLWebpackPlgn= require('html-webpack-plugin')
module.exports={
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'script.js'
    },
    plugins:[
        new HTMLWebpackPlgn({template: path.resolve(__dirname, 'src', 'index.html') })
    ],
    module:{
        rules:[
            {
                test: /\.(js)$/,
                include: path.resolve(__dirname, 'src'),
                loader:'babel-loader',
                options: {
                    presets:['@babel/env', '@babel/react']

                }

            }
        ]
    }

    
}