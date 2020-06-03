const webpack = require('webpack');
// const path = require('path');
const merge = require('webpack-merge');
// 主要用于提取css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 主要用于css压缩、去重
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// 压缩js
const TerserPlugin = require('terser-webpack-plugin');
// 打包情况可视化插件
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./webpack.common.js');
const { prod } = require('../src/config');


module.exports = merge(common, {
  mode: 'production',
  plugins: [
    // 样式分离
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:5].css',
      chunkFilename: 'css/[name].[hash:5].css'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.BASE_API': JSON.stringify(prod.BASE_API)
    }),
    // 打包情况可视化插件
    new BundleAnalyzerPlugin({ analyzerPort: 8919 })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          }
        ]
      },
      {
        test: /\.(scss|css|sass)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2
            }
          }, // translates CSS into CommonJS
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
      new OptimizeCSSAssetsPlugin({
        cssProcessor: require('cssnano'), // 引入cssnano配置压缩选项
        cssProcessorOptions: {
          discardComments: { removeAll: true }
        },
        canPrint: true // 表示插件能够在console中打印信息，默认值是true
      }),
      // 压缩JS
      new TerserPlugin({
        sourceMap: false
      })
    ],
    // 代码分离
    splitChunks: {
      // 这表示将选择哪些块进行优化。当提供一个字符串，有效值为 all, async 和 initial. 提供 all 可以特别强大，因为这意味着即使在异步和非异步块之间也可以共享块
      chunks: 'all',
      minSize: 30000,
      minChunks: 1, // 分割前必须共享模块的最小块数
      maxAsyncRequests: 5, // 按需加载时的最大并行请求数
      maxInitialRequests: 3, // 入口点处的最大并行请求数
      name: true,
      cacheGroups: {
        // styles: {
        //   name: 'chunk-style',
        //   test: /\.(scss|css)$/,
        //   chunks: 'all',
        //   enforce: true
        // },
        react: {
          name: 'js/chunk-react',
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          priority: 10
        },
        antd: {
          name: 'js/chunk-antd',
          test: /[\\/]node_modules[\\/](antd)[\\/]/,
          priority: 10 // 权重
        },
        antDesign: {
          name: 'js/chunk-antDesign',
          test: /[\\/]node_modules[\\/](@ant-design)[\\/]/,
          priority: 10 // 权重
        },
        moment: {
          name: 'js/chunk-moment',
          test: /[\\/]node_modules[\\/](moment)[\\/]/,
          priority: 10 // 权重
        },
        // 默认配置
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10 // 权重
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
});
