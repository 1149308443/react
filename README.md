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

1. 配置打包后查看包大小可视化`webpack-bundle-analyzer`插件 ,webpack配置如下
```
plugins:[
    new BundleAnalyzerPlugin({ analyzerPort: 8919 })
]
```
在打包完成之后会自动打开`localhost:8919`展示各个包的具体详情

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

## css模块化
1. 配置webpack css-loader;
```
options: {
	modules: {
		localIdentName: '[local]_[sha1:hash:base64:5]'
	}
}
```
2. 如果需要覆盖其他库的样式入antd之类的需要 在:global中添加样式

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
