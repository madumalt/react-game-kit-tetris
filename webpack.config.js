const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./src/main.js', './styles/style.css'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        loaders: ['react-hot', 'babel']},
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'styles'),
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  },
  devServer: {
    contentBase: './build',
    inline: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css', {allChunks: true})
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
