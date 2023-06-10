const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash].bundle.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              // options...
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash].styles.css' }),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new HtmlWebpackPlugin({ template: 'src/views/dashboard.html', filename: 'dashboard.html' }),
    new HtmlWebpackPlugin({ template: 'src/views/books.html', filename: 'books.html' }),
    new HtmlWebpackPlugin({ template: 'src/views/customers.html', filename: 'customers.html' }),
    new HtmlWebpackPlugin({ template: 'src/views/orders.html', filename: 'orders.html' }),
  ]
}