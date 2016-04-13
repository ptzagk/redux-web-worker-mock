'use strict';

const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

//const nodeEnv = process.env.NODE_ENV || 'production';

const defaultConfig = {
    entry: {
        'main': path.resolve('src/main.js')
    },
    output: {
        filename: '[name].js',
        path: 'dist',
        publicPath: '/dist/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ]
};

//const debugConfig = nodeEnv === 'local' ? { devtool: 'cheap-module-eval-source-map' } : {};

module.exports = defaultConfig;
