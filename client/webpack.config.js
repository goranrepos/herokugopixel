const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 8888,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
      },
      {
        test: /\.html/,
        use: ['html-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
};
