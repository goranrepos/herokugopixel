const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
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
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        //test: /\.tsx?$/,
        //exclude: /node_modules/,
        //use: ['ts-loader']
        test: /\.(t|j)sx?$/,
        use: { loader: 'ts-loader' },
        exclude: /node_modules/,
      },
      {
        test: /\.html/,
        use: ['html-loader'],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
};
