import { get } from '@/axios';
import './mock';

// const { BASE_API } = process.env;

const BASE_API = '/api';

const apiObject = {
    server: `${BASE_API}/static/mock.json`
    // server: `${BASE_API}/api`
};
export default apiObject;

export const loadDatas = (params) => get(apiObject.server, params);

export const test = (params) => get('http://test/mock', params);
