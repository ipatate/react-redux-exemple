const webpack = require('webpack'); // eslint-disable-line
const path = require('path');
const commonPath = require('./common-paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  output: {
    filename: '[name].[hash].js',
    path: commonPath.outputPath
  },
  module: {
    rules: [{
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          emitWarning: true
        }
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ]
};

module.exports = config;
