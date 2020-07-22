# react
## 文件目录
```
├── build                   webpack配置文件
|  ├── webpack.common.js
|  ├── webpack.dev.js
|  └── webpack.prod.js
├── dist                    项目打包出来的文件
├── jsconfig.json           webpack配置的别名文件,
├── package-lock.json       
├── package.json            依赖包及配置信息文件
├── README.md               描述文件
├── src                     源码
|  ├── axios                      请求api    
|  ├── config                     项目配置
|  ├── entry                      入口文件
|  ├── routes                     路由配置
|  ├── utils                      工具方法
|  └── views                      页面
└── static                  静态资源文件
   ├── css
   ├── images
   └── js
```

## webpack配置

搭建webpack基础配置详情见 [这里](https://github.com/1149308443/webpack)

新增

### css模块化
1. 配置webpack css-loader;
```
options: {
	modules: {
		localIdentName: '[local]_[sha1:hash:base64:5]'
	}
}
```
2. 如果需要覆盖其他库的样式入antd之类的需要 在:global中添加样式

### 配置打包后查看包大小可视化`webpack-bundle-analyzer`插件 
1. 下载 npm i webpack-bundle-analyzer -D
2. webpack配置如下
```
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
plugins:[
    new BundleAnalyzerPlugin({ analyzerPort: 8919 })
]
```
3. 在打包完成之后会自动打开`localhost:8919`展示各个包的具体详情
### VSCode配置webpack别名提示生效
1. webpack配置
```
 resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@views': path.resolve(__dirname, '../src/views')
    }
  }
```
2. 安装插件 `npm i eslint-import-resolver-alias eslint-import-resolver-webpack -D`
3. 在根目录添加配置文件`jsconfig.json`,配置如下
```
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"],
      "@views/*": ["src/views/*"]
    },
    "experimentalDecorators": true
  }
}
```

## 配置eslint
1. 安装 `npm i eslint -D`

2. 创建基础 `.eslintrc.js` 执行`./node_modules/.bin/eslint -–init`

3. 安装 `babel-eslint` 在 `.eslintrc.js` 配置中添加`"parser":"babel-eslint"`

4. 安装依赖包
	```
	npm i eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y -D
	```
5. 修改 .eslintrc.js 配置 `"extends":"airbnb"`,

6. 添加一下规则

## 路由配置动态加载
1. 下载`@loadable/component`模块, `npm i  @loadable/component -S`
2. 在路由的引入处动态引入 
```
import loadable from '@loadable/component';
...
const router = [
  {
    path: '/',
    component: loadable(() => import('../views/demo')),
    exact: true
  }
  ...
]
```
## 装饰器
1. 环境支持 下载插件
   `npm i @babel/plugin-proposal-decorators -D` 支持装饰器插件,
     `npm i @babel/plugin-proposal-class-properties -D` 支持类里面添加属性(包括静态),
2. .babelrc中配置
```
"plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
```
3. vscode中配置 `"experimentalDecorators": true`
4. .eslint中配置,装饰器语法支持export关键字
```
 "parserOptions": {
    "ecmaFeatures": {
      "legacyDecorators": true
    }
  },
```


## 添加ahooks 
1. 安装  `npm i ahooks -S` 
2. 配置 按需加载,.babelrc文件配置如下
```
"plugins":[
    ["import", { "libraryName": "ahooks"},"ahooks"],
],
```
3. api文档参考 [这里](https://ahooks.js.org/zh-CN/hooks/async)

## 添加mockjs进行mock接口数据

1. 安装 `npm i mockjs -D`
2. 新建 一个js文件配置,具体的配置语法规则可以参考 [这里](https://github.com/nuysoft/Mock/wiki)
3. 在接口`api.js`文件中引入配置的js文件,注意这种方式是通过拦截`ajax`请求,本地返回数据,所以说不能再`network`上面看到请求,如果是`get`请求的话也不能直接在浏览器里面模拟请求,或者是用`postman`模拟也是不行的.
4. 如果不通过自己写`mockjs`配置文件的方式来实现的话也是可以通过网上的一些可视化平台来进行配置