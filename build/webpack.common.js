const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const os = require('os');
const HappyPack = require('happypack');

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = {
  entry: {
    index: '@/entry/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
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
        minifyJS: true
      }
    }),
    new HtmlWebpackTagsPlugin({
      append: false,
      files: ['index.html'],
      tags: [
        'css/normalize.css'
      ],
      publicPath: '/static'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HappyPack({
      // 用id来标识 happypack处理那里类文件
      id: 'happyBabel',
      // 如何处理  用法和loader 的配置一样
      loaders: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }],
      // 共享进程池
      threadPool: happyThreadPool,
      // 允许 HappyPack 输出日志, 默认是 true
      verbose: true,
      // 用于故障排查。默认 false。
      debug: false
    })
  ],
  // 解析模块请求的选项
  resolve: {
    // 自动解析确定的扩展
    extensions: ['.js', '.jsx', '.vue', '.json', '.css', '.less', '.html'],
    // 模块别名列表
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@views': path.resolve(__dirname, '../src/views'),
      static: path.resolve(__dirname, '../static')
    }
  },
  // 防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(external dependencies)
  // 可以通过html-webpack-tags-plugin从静态引入到模板 或者直接在模板手动引入
  externals: {
    jquery: 'jQuery'
  },
  // 配置如何展示性能提示
  performance: {
    // 定一个创建后超过 500kb 的资源，将展示一条警告
    maxAssetSize: 1024 * 500
  },
  module: {
    // 忽略的文件中不应该含有 import, require, define 的调用，或任何其他导入机制
    noParse(content) {
      return content.includes('jquery');
    },
    rules: [
      // {
      //   test: /\.(j|t)s(x)?$/,
      //   exclude: /(node_modules|bower_components)/,
      //   loader: 'babel-loader'
      //   // options: {
      //   //   presets: ['@babel/preset-env', '@babel/preset-react'],
      //   //   plugins: [
      //   //     '@babel/transform-runtime'
      //   //   ]
      //   // }
      // },
      {
        test: /\.(j|t)s(x)?$/,
        // 把对.js 的文件处理交给id为happyBabel 的HappyPack 的实例执行
        loader: 'happypack/loader?id=happyBabel',
        // 排除node_modules 目录下的文件
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        loader: 'url-loader',
        options: {
          limit: 2048,
          name: 'imgs/[name].[ext]'
        }
      },
      {
        test: /\.(ttf|woff|eot|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  }
};
