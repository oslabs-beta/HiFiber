const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCSS = require('mini-css-extract-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  stats: {
    children: true,
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },

  devtool: 'inline-source-map',
  mode: 'development',

  devServer: {
    host: 'localhost',
    port: 8084,
    static: {
      publicPath: '/build',
      directory: path.resolve(__dirname, 'build'),
    },
    open: true,
    hot: true,
    proxy: {
      '/api/**': {
        target: 'http://localhost:3030',
        secure: false,
      },
      '/client/stylesheets/**': {
        target: 'http://localhost:3030',
        secure: false,
      },
    },
  },

  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(svg|webp|ico|png|jpg|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.mp3$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new miniCSS(),
  ],
};
