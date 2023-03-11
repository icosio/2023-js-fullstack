const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    /*mode: 'development',*/
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js',
    },
    module: {
        rules:[
            {test: /\.scss$/, use: ['style-loader','css-loader','sass-loader']}
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]
}