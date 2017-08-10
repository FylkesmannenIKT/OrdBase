'use strict';

// @doc https://medium.com/javascript-training/beginner-s-guide-to-webpack-b1f1a3638460

// @note to use webpack
// 'npm install <package> -g' "webpack": "^3.3.0",
// 'npm install <package> -g' "webpack-dev-server": "^2.5.1",

var webpack = require('webpack');

module.exports = {
  
    entry: {
        "index": "./app/App.js", 
    },

    output: {
        filename: "dist/bundle.js",
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                query: {
                    presets: ["babel-preset-es2016", "babel-preset-es2017"].map(require.resolve)
                },
            },

            
            {
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    minimize: true,
                    removeComments: true,
                    collapseWhitespace: true,
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ],

    },
    watch: false,


    resolve: {
        modules: ["node_modules", "app", "components", "views", "lib"],
    },

    // @doc webserver proxy - https://webpack.github.io/docs/webpack-dev-server.html#rewriting-urls-of-proxy-request
    devServer: {
        inline: true,
        port: 8081,
        proxy: {
            "/api/**":  "http://localhost:5000"
        }
    }
}