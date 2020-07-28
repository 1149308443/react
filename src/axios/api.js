import { get, post } from '@/axios';
import './mock';

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
