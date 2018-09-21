const webpack = require('webpack'); // eslint-disable-line
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // eslint-disable-line
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin'); // eslint-disable-line
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // eslint-disable-line

const externalCSS = new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
});

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
    ]
  },
  plugins: [
    externalCSS,
    new UglifyjsWebpackPlugin({
      sourceMap: true
    }),
    new OptimizeCssAssetsPlugin({}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};
