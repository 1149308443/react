// 开发环境
const dev = {
  BASE_API: 'http://rap2api.taobao.org/app/mock/261660' // 在线库rap2模拟请求的地址
};
  // 测试环境
const uat = {
  BASE_API: 'http://localhost:8080'
};
  // 生产环境
const prod = {
  BASE_API: 'http://localhost:8080'
};

module.exports = {
  dev, uat, prod
};
