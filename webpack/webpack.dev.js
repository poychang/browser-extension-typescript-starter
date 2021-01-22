const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    mode: 'development',
    output: {
        path: path.join(__dirname, '../dist/app'),
        filename: '[name].js',
    },
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: 'initial',
        },
    },
    plugins: [
        // copy manifest
        new CopyPlugin([{ from: './manifest-dev.json', to: '../manifest.json' }], {
            context: 'src/manifest',
        }),
    ],
});
