const path = require('path');
const HTMLWebpackPlgn= require('html-webpack-plugin')
module.exports={
    entry: [ "@babel/polyfill",path.resolve(__dirname, 'src', 'index.js')],
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
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, 'src'),
                loader:'babel-loader',
                options: {
                    presets:['@babel/env', '@babel/react'],
                    plugins: ['@babel/plugin-proposal-class-properties'],
                }

            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    resolve:{
        extensions: ['.jsx','.js']
    },
    devServer: {
        historyApiFallback: true,
        proxy:{
            '/botAPI/': {
            target: 'https://aiproject.ru/api/',
            pathRewrite: { '/botAPI/': '' },
            secure: false,
            changeOrigin: true,}
        }
    },
    devtool: 'cheap-inline-module-source-map',

    
}