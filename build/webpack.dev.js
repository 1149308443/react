const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

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
    port: 8080
    // open:true
    // proxy:{
    //     "/api": {
    //         target: urlEnv.api,
    // 如果是https接口，需要配置这个参数为false
    //         secure: true,
    //         changeOrigin: true
    //     }
    // }
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
        test: /\.s(c|a)ss$/,
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
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
});
