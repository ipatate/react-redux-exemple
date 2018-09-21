const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
  },
  module: {
    rules: [{
        test: /\.(scss|css)/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
    ]
  },
  devServer: {
    hot: true,
    inline: true,
    stats: {
      colors: true
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
};
