import { all, fork } from 'redux-saga/effects';

/**
 * @description require.content  动态读取文件夹下的文件
 * @param {string}  说明需要检索的目录,不可使用变量和模版字符控制
 * @param {boolean} 是否检索子目录
 * @param {RegExp} 匹配文件的正则表达式,一般是文件名
 * @returns {Function} keys  也是一个函数，他返回的是一个数组，该数组是由所有可能被上下文模块解析的请求对象组成
 * @returns {Function} resolve  是一个函数，他返回的是被解析模块的id ，接受一个参数request。
 * @returns {string} id 上下文模块的id
 *
*/
const files = require.context('../views', true, /\/saga.(js|ts)$/);

const allSaga = [];
files.keys().forEach((key) => {
  // const name = key.substring(2, key.lastIndexOf('/'));
  const saga = files(key).default || files(key);
  allSaga.push(fork(saga));
});

export default function* () {
  yield all(allSaga);
}
