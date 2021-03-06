const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const { dev } = require('../src/config/index.js');

module.exports = merge(common, {
  // [会将 process.env.NODE_ENV 的值设置为 development. 启用 NamedChunksPlugin 和 NamedModulesPlugin]
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    clientLogLevel: 'none',
    historyApiFallback: true, // 页面出错不会弹出 404 页面。
    compress: true, // 开启虚拟服务器时，为你的代码进行压缩
    port: 8080,
    // open:true
    proxy: [
      {
        context: ['/api'],
        pathRewrite: { '^/api': '' },
        // 接口域名
        target: dev.BASE_API,
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
  }
});
