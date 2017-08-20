'use strict';

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const extractLess = new ExtractTextPlugin({
  filename: '[name].css',
});

module.exports = {
  entry: __dirname + '/client/app.js',

  output: {
    path: __dirname + '/dist/client',
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: extractLess.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'less-loader' },
          ]
        }),
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file-loader',
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
      }
    ],
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new CopyWebpackPlugin([{
      from: __dirname + '/client/public',
    }]),
    extractLess,
  ],
};
