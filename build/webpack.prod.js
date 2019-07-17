const webpack = require('webpack');
// const path = require('path');
const merge = require('webpack-merge');
// const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    // new UglifyJSPlugin({
    //   sourceMap: true
    // }),
    // 样式分离
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:5].css',
      chunkFilename: 'css/[name].[hash:5].css'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(scss|css|sass)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', // translates CSS into CommonJS
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: false,
              plugins: [require('autoprefixer'), require('postcss-import')()]
            }
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS, using Node Sass by default
            options: {
              sourceMap: false
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      // 压缩css
      new OptimizeCSSAssetsPlugin()
    ],
    splitChunks: {
      //   chunks: "all",
      //   minSize: 30000,
      //   minChunks: 1,
      //   maxAsyncRequests: 5,
      //   maxInitialRequests: 3,
      //   name: true,
      //   cacheGroups: {
      //     styles: {
      //       name: "style",
      //       test: /\.(scss|css)$/,
      //       chunks: "all",
      //       enforce: true
      //     }
      //   }

      //   cacheGroups: {
      //     commons: {
      //       test: /[\\/]node_modules[\\/]/,
      //       // cacheGroupKey here is `commons` as the key of the cacheGroup
      //       name(module, chunks, cacheGroupKey) {
      //         const moduleFileName = module
      //           .identifier()
      //           .split("/")
      //           .reduceRight(item => item);
      //         const allChunksNames = chunks.map(item => item.name).join("~");
      //         return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
      //       },
      //       chunks: "all"
      //     }
      //   }
    }
  }
});
