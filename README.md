# react

## webpack配置
搭建webpack基础配置详情见 [这里](#https://github.com/1149308443/webpack)

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

## 迁移到typescript

1. 安装所需要的依赖

```
npm i @babel/preset-typescript @types/react @types/react-dom @types/react-router-dom @types/webpack-env @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript ts-loader -D
``` 
这边要注意一下原来项目里面的版本，可能会因为版本问题报错


2. eslint 修改

```
npm i @umijs/fabric -D
```
通过继承 umi的eslint 规则

3. 配置tsconfig.json
	这里需要注意 如果报.less文件找到，在根目录添加了.d.ts文件不起作用的话，可以在tsconfig.json文件中配置
```
"include": [
	"./typing.d.ts"
]
```
4. babelrc修改
```
"presets": [
	"@babel/preset-env", 
	"@babel/preset-react", 
	"@babel/preset-typescript",
]
```
5. 修改所有的.jsx, .js文件为.tsx, .ts文件

## Jest单元测试
1. 可以参照[火生](#https://github.com/1512751361/react-cli/blob/master/doc/JEST.md)的写法 
2. package.json新增如下配置
```
 "test": "jest --watchAll",
 "test:cov": "jest --coverage"

```

## git 提交规范

## Prettier代码格式化规范

