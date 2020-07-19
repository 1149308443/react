import axios from 'axios';

const service = axios.create({
  // api 请求前缀
  baseURL: '',
  // 超时时间
  timeout: 5000,
});
// 添加请求拦截器

axios.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  console.log('在发送请求之前做些什么');
  return config;
}, (error) => {
  // 对请求错误做些什么
  console.log('在发送请求之前做些什么');
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  // 对响应数据做点什么
  console.log('在发送请求之前做些什么');
  return response;
}, (error) => {
  // 对响应错误做点什么
  console.log('在发送请求之前做些什么');
  return Promise.reject(error);
});

export default service;
