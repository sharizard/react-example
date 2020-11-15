const paths = require('./paths')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + '/index.tsx'],

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      title: 'Accenture Training Plan',
      template: paths.public + '/index.html'
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      { test: /\.html$/, loader: "html-loader" },
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
};