import { get } from '@/axios';

const { BASE_API } = process.env;

export default {
    server: `${BASE_API}/api`
};


  // 'https://randomuser.me/api',
      // '/api/api',
      // server.server,
export const loadDatas = (params) => get('/api2/static/mock.json', params);
