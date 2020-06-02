import axios from 'axios';
import qs from 'qs';

const commonParams = {};

const instance = axios.create({
  timeout: 10000
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
export function getData(urlLink, param, config = {}) {
  const url = urlLink;
  const data = { ...commonParams, ...param };

  return instance.get(url, {
    params: data,
    ...config
  })
    .then((res) => {
      console.info('then', res);
      return Promise.resolve(res.data);
    })
    .catch((error) => {
      console.info('error', error);
      return Promise.resolve(error.data);
    });
}

/**
   * post请求
   * @param urlLink 请求的接口地址
   * @param param   请求的参数
   * @param config  axios请求配置项
   * @returns {Promise<AxiosResponse>}
   */
export function postData(urlLink, param, config = {}) {
  const data = { ...commonParams, ...param };
  return instance.post(urlLink, qs.stringify(data), config)
    .then((res) => Promise.resolve(res.data))
    .catch((error) => {
      console.info('postDataerror', error);
      return Promise.resolve(error);
    });
}
