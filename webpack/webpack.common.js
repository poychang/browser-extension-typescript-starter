const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const srcDir = '../src/';

module.exports = {
    entry: {
        popup: path.join(__dirname, srcDir + 'popup.ts'),
        options: path.join(__dirname, srcDir + 'options.ts'),
        background: path.join(__dirname, srcDir + 'background.ts'),
        content_script: path.join(__dirname, srcDir + 'content_script.ts'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    plugins: [
        // copy html pages
        new CopyPlugin([{ from: '.', to: '../app' }], {
            context: 'src/pages',
        }),
        // copy icons
        new CopyPlugin([{ from: '.', to: '../icons' }], {
            context: 'src/icons',
        }),
    ],
};
