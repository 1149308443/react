import { getData } from '@/axios';

const { BASE_API } = process.env;

export default {
    server: `${BASE_API}/api`
};

export const loadDatas = (params) => getData('/api2/static/mock.json', params);
