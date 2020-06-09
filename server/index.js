const path = require('path');
const express = require('express');
// const history = require('connect-history-api-fallback'); // 解决路由浏览器模式刷新404问题
const route = require('./router/route');

const app = express();

// app.use(history({}));

app.use('/static', express.static(path.resolve(__dirname, '../static')));

app.use(express.static(path.resolve(__dirname, '../dist')));

app.use(route);

app.listen(3000);
