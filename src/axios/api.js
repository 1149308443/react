import { get, post } from '@/axios';
// import './mock'; // 在上线或者调用接口联调的时候需要去除

// const { BASE_API } = process.env;

const BASE_API = '/api';
const BASE_API_RAP2 = '/rap2';

const apiObject = {
    server: `${BASE_API}/static/mock.json`,
    // server: `${BASE_API}/api`
    online: `${BASE_API_RAP2}/test`
};
export default apiObject;

export const loadDatas = (params) => get(apiObject.server, params); // 通过本地json文件模拟数据

export const test = (params) => get('http://test/mock', params); // 通过本地mockjs模拟数据

export const testOnline = (params) => post(apiObject.online, params); // rap2在线mock数据

export const testNode = (params) => get('http://localhost:3000/user', params); // 模拟请求本地的node服务

export const testRap2 = (params) => post('http://rap2.taobao.org:38080/app/mock/261660/test', params); // 直接请求rap2,看看是否存在跨域
