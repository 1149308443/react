const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    historyApiFallback: true, //页面出错不会弹出 404 页面。
    compress: true, //开启虚拟服务器时，为你的代码进行压缩
    port: 8080
    // open:true
    // proxy:{
    //     "/api": {
    //         target: urlEnv.api,
    //         secure: true,
    //         changeOrigin: true
    //     }
    // }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  }
});
