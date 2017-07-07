// https://github.com/petehunt/webpack-howto
// https://github.com/babel/gulp-babel/issues/93

module.exports = {
    entry: "./startup.js",
    output: {
        path: __dirname + "/bin/",
        filename: "bundle.js"
    },
    module: {
        loaders: [ 
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['babel-preset-es2015'].map(require.resolve)  
                }
            }
        ]
    },
};