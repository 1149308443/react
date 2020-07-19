/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: '@/entry/index.tsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([path.resolve(__dirname, '../static/**/*')]),
    new HtmlWebpackPlugin({
      title: 'react',
      template: './src/entry/index.html',
      filename: 'index.html',
      minify: {
        // 是否去除空格，默认false
        collapseWhitespace: true,
        // 是否压缩html里的css（使用clean-css进行的压缩） 默认值false；
        minifyCSS: true,
        // 是否压缩html里的js（使用uglify-js进行的压缩）
        minifyJS: true,
      },
    }),
    new HtmlWebpackTagsPlugin({
      append: false,
      files: ['index.html'],
      tags: [
        'css/normalize.css',
      ],
      publicPath: '/static',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.vue', '.json', '.css', '.less', '.html', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  // 防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(external dependencies)
  // 可以通过html-webpack-tags-plugin从静态引入到模板 或者直接在模板手动引入
  externals: {
    jquery: 'jQuery',
  },
  // 配置如何展示性能提示
  performance: {
    // 定一个创建后超过 500kb 的资源，将展示一条警告
    maxAssetSize: 1024 * 500,
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(j|t)sx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        loader: 'url-loader',
        options: {
          limit: 2048,
          name: 'imgs/[name].[ext]',
        },
      },
      {
        test: /\.(ttf|woff|eot|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
    ],
  },
};
