import axios from 'axios';
import qs from 'qs';

const commonParams = {};

const instance = axios.create({
  timeout: 10000
});

// 添加请求拦截器
instance.interceptors.request.use((config) => {
// 在发送请求之前做些什么
  console.log(config);
  return config;
},
(error) => {
  console.log();
  // 对请求错误做些什么
  Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use((response) =>
  // 对响应数据做点什么
  // console.log(response);
  response.data,
(error) => {
  console.log(error.message);
  // 对响应错误做点什么
  // Promise.reject(error);
});

export default instance;


/**
 * get请求
 * @param urlLink 请求的接口地址
 * @param param     请求参数
 * @param config  axios请求配置项
 * @returns {Promise<AxiosResponse>}
 */
export function get(urlLink, param, config = {}) {
  const url = urlLink;
  const data = { ...commonParams, ...param };
  return instance.get(url, {
    params: data,
    ...config
  });
}

/**
   * post请求
   * @param urlLink 请求的接口地址
   * @param param   请求的参数
   * @param config  axios请求配置项
   * @returns {Promise<AxiosResponse>}
   */
export function post(urlLink, param, config = {}) {
  let data = {};
  if (param instanceof FormData) {
    Object.keys(commonParams).forEach((key) => {
      param.append(key, commonParams[key]);
    });
    data = param;
  } else {
    data = { ...commonParams, ...param };
  }
  // return instance.post(urlLink, qs.stringify(data), config)
  return instance.post(urlLink, data, config);
}
