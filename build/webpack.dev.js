const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const { dev } = require('../src/config');

module.exports = merge(common, {
  // [会将 process.env.NODE_ENV 的值设置为 development. 启用 NamedChunksPlugin 和 NamedModulesPlugin]
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // hot: true, // 默认false，会自动刷新页面，设置为true自动更新不会刷新页面
    inline: true,
    overlay: true, // 编译出现错误时，将错误直接显示在页面上
    clientLogLevel: 'none',
    // quiet: true, // 需要设为true，禁止显示devServer的console信息
    historyApiFallback: true, // 页面出错不会弹出 404 页面。
    compress: true, // 开启虚拟服务器时，为你的代码进行压缩
    port: 8080,
    host: '0.0.0.0',
    // open: true
    // 设置代理
    proxy: [
       { // 本地json文件
        context: ['/api'],
        pathRewrite: { '^/api': '' },
        // 接口域名
        target: dev.BASE_API,
        // 如果是https接口，需要配置这个参数为false
        secure: false,
        // 如果接口跨域，需要进行这个参数配置
        changeOrigin: true
      },
      { // 在线rap2
        context: ['/rap2'],
        pathRewrite: { '^/rap2': '' },
        // 接口域名
        target: dev.BASE_API_RAP2,
        // 如果是https接口，需要配置这个参数为false
        secure: false,
        // 如果接口跨域，需要进行这个参数配置
        changeOrigin: true
      }
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          'css-loader'
        ]
      },
      {
        test: /\.l(c|e)ss$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]_[sha1:hash:base64:5]'
              }
            }
          }, // translates CSS into CommonJS
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: [
                require('autoprefixer')
              ]
            }
          },
          'less-loader'
        ]
      }
    ]
  },

   // 插件
   plugins: [
    new webpack.DefinePlugin({
      'process.env.BASE_API': JSON.stringify('/api')
    })
  ]
});
