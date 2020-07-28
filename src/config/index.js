// 开发环境
const dev = {
  BASE_API: 'http://localhost:8080', // 本地mock.json请求的地址
  BASE_API_RAP2: 'http://rap2.taobao.org:38080/app/mock/261660' // 在线库rap2模拟请求的地址
  // BASE_API: 'https://randomuser.me'
};
// 测试环境
const uat = {
  // BASE_API: 'http://localhost:8080'
  BASE_API: 'https://randomuser.me'
};
// 生产环境
const prod = {
  // BASE_API: 'http://localhost:8080'
  BASE_API: 'https://randomuser.me'
};

module.exports = { dev, uat, prod };
