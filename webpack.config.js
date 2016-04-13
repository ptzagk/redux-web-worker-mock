'use strict';

const fs = require('fs');
const path = require('path');

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
    }
};

//const debugConfig = nodeEnv === 'local' ? { devtool: 'cheap-module-eval-source-map' } : {};

module.exports = defaultConfig;
