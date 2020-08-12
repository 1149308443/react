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

## webpack 配置

搭建 webpack 基础配置详情见 [这里](https://github.com/1149308443/webpack)

新增

### 链判断运算符语法`?`支持

1. 安装插件`npm i @babel/plugin-proposal-optional-chaining`.
2. 在`.babelrc`文件中配置如下

```
 "plugins":[
    ["@babel/plugin-proposal-optional-chaining"]
  ],
```

### css 模块化

1. 配置 webpack css-loader;

```
options: {
	modules: {
		localIdentName: '[local]_[sha1:hash:base64:5]'
	}
}
```

2. 如果需要覆盖其他库的样式入 antd 之类的需要 在:global 中添加样式

### 配置打包后查看包大小可视化`webpack-bundle-analyzer`插件

1. 下载 npm i webpack-bundle-analyzer -D
2. webpack 配置如下

```
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
plugins:[
    new BundleAnalyzerPlugin({ analyzerPort: 8919 })
]
```

3. 在打包完成之后会自动打开`localhost:8919`展示各个包的具体详情

### VSCode 配置 webpack 别名提示生效

1. webpack 配置

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

## 配置 eslint

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

1. 下载`@loadable/component`模块, `npm i @loadable/component -S`
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
2. .babelrc 中配置

```
"plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
```

3. vscode 中配置 `"experimentalDecorators": true`
4. .eslint 中配置,装饰器语法支持 export 关键字

```
 "parserOptions": {
    "ecmaFeatures": {
      "legacyDecorators": true
    }
  },
```

## 添加 ahooks

1. 安装 `npm i ahooks -S`
2. 配置 按需加载,.babelrc 文件配置如下

```
"plugins":[
    ["import", { "libraryName": "ahooks"},"ahooks"],
],
```

3. api 文档参考 [这里](https://ahooks.js.org/zh-CN/hooks/async)

## 添加 mockjs 进行 mock 接口数据

1. 安装 `npm i mockjs -D`
2. 新建 一个 js 文件配置,具体的配置语法规则可以参考 [这里](https://github.com/nuysoft/Mock/wiki)
3. 在接口`api.js`文件中引入配置的 js 文件,注意这种方式是通过拦截`ajax`请求,本地返回数据,所以说不能再`network`上面看到请求,如果是`get`请求的话也不能直接在浏览器里面模拟请求,或者是用`postman`模拟也是不行的.
4. 如果不通过自己写`mockjs`配置文件的方式来实现的话也是可以通过网上的一些可视化平台来进行配置,这边推荐以下两个平台

- [easy-mock](https://easy-mock.com/)
- [淘宝 rap2](http://rap2.taobao.org/)

## 添加富文本插件`wangeditor`

1.  安装 `npm i wangeditor -S`
2.  具体的配置和使用见[文档](https://www.kancloud.cn/wangfupeng/wangeditor3/332599)

## 添加 serverless 自动部署项目到腾讯云

1. 全局安装`serverless`,执行`npm i -g serverless`
2. 配置`serverless.yml`文件配置如下, 如果是用的官网提供的模板文件的话该配置文件也可以自动生成.

```
name: reactApp # (必填) 该组件创建的实例名称
component: website  # (必填) 引用 component 的名称
displayName: react前端项目架构 #项目模板展示在控制台的名称（中文）
version: 0.0.3
stage: dev # (可选) 用于区分环境信息，默认值是 dev
repo: https://github.com/1149308443/react.git # 源代码

inputs:
src:
  src: ./src #你构建的项目代码目录
  hook: npm run build #钩子脚本。在你项目代码上传之前执行。
  dist: ./dist  #钩子脚本执行构建后，输出的目录。如果配置 hook， 此参数必填
src: # 描述项目中的哪些文件需要作为模板发布
src: ./ # 指定具体的相对目录，此目录下的文件将作为模板发布
exclude: #描述在指定的目录内哪些文件应该被排除
  # 通常希望排除
  # 1. 包含 secrets 的文件
  # 2. .git git 源代码管理的相关文件
  # 3. node_modules 等第三方依赖文件
  - .env
  - '.git/**'
  - '**/node_modules'
  - '**/package-lock.json'
```

这边说一下如果是要用腾讯云提供的框架,可以使用

- `serverless registry` 列出所有模板.
- `serverless init 模板` 选择需要的模板脚手架
- `cd 模板` 进入模板,之后的操作是一致的

3. 在`serverless.yml`文件的根目录执行 `serverless`或者`serverless deploy`部署到腾讯云.
4. `serverless remove`：从云端移除一个 Component 实例。
5. `serverless dev`: 启动 DEV MODE 开发者模式，通过检测 Component 的状态变化，自动部署变更信息。同时支持在命令行中实时输出运行日志，调用信息和错误等。此外，支持对 Node.js 应用进行云端调试。

6. 参考网站[腾讯云](https://cloud.tencent.com/product/sls)