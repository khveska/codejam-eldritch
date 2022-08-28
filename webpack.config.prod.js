const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/scripts/app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/codejam-eldritch/',
    filename: 'app.[contenthash].js',
    clean: true,
    assetModuleFilename: 'assets/[name][ext]',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 5501,
    open: true,
    hot: true,
    compress: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'CodeJam Eldritch',
      filename: 'index.html',
      favicon: 'src/favicon.ico',
      template: 'src/index.template.html',
    }),
  ],
};
