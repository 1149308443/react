import axios from 'axios';
import qs from 'qs';
import { getCookie } from '@/utils/cookieUtil';

const ycasToken = getCookie('ycas_token');
const commonParams = {};

const instance = axios.create({
  timeout: 10000,
  headers: {
    ycas_token: ycasToken
  }
});

// // 添加请求拦截器
// instance.interceptors.request.use((config) => {
// // 在发送请求之前做些什么
//   console.log(config);
//   return config; // 添加这一行
// },
// (error) => {
//   console.log();
//   // 对请求错误做些什么
//   Promise.reject(error);
// });

// // 添加响应拦截器
// instance.interceptors.response.use((response) => {
//   // 对响应数据做点什么
//   console.log(response);
//    return response;
// },
// (error) => {
//   console.log(error);
//   // 对响应错误做点什么
//   Promise.reject(error);
// });

export default instance;


/**
 * get请求
 * @param urlLink 请求的接口地址
 * @param param     请求参数
 * @param config  axios请求配置项
 * @returns {Promise<AxiosResponse>}
 */
export function get(urlLink, param = {}, config = {
  // headers: {
  //   ycas_token: 'ycas_token'
  // }
}) {
  const url = urlLink;
  const data = { ...commonParams, ...param };

  return new Promise((resolve, reject) => {
    instance.get(url, {
      params: data,
      ...config
    })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        console.info('error', error);
        reject(error);
      });
  });
}

/**
   * post请求
   * @param urlLink 请求的接口地址
   * @param param   请求的参数
   * @param config  axios请求配置项
   * @returns {Promise<AxiosResponse>}
   */
export function post(urlLink, param = {}, config = {
  // headers: {
  //   ycas_token: 'ycas_token'
  // }
}) {
  const data = { ...commonParams, ...param };

  return new Promise((resolve, reject) => {
    instance.post(urlLink, qs.stringify(data), config)
    .then((res) => resolve(res))
    .catch((error) => {
      console.info('postDataerror', error);
      return reject(error);
    });
  });
}
