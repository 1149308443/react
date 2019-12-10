# react

## webpack配置
搭建webpack基础配置详情见 https://github.com/1149308443/webpack

## 配置eslint
1. 安装 npm i eslint -D

1. 创建基础 .eslintrc.js 执行./node_modules/.bin/eslint -–init

1. 安装 babel-eslint  在 .eslintrc.js 配置中添加"parser":"babel-eslint"

1. 安装依赖包
	npm i eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y -D

1. 修改 .eslintrc.js 配置 "extends":"airbnb",

1. 添加一下规则

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