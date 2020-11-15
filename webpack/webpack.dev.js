const paths = require('./paths')

const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

const config = {
  mode: 'development',

  // Control how source maps are generated
  devtool: 'inline-source-map',

  // Spin up a server for quick development
  devServer: {
    contentBase: paths.public,
    port: 3000,
    historyApiFallback: true,
    open: true,
    hot: true,
    compress: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8001',
        secure: false,
      },
    },
  },
  plugins: [
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ]
};

module.exports = merge(common, config);
