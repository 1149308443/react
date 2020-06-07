import { get } from '@/axios';

const { BASE_API } = process.env;
console.log(BASE_API);
// console.log(window.location.href);
const apiObject = {
    server: `${BASE_API}/static/mock.json`
};
export default apiObject;

export const loadDatas = (params) => get(apiObject.server, params);
