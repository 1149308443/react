// 开发环境
const dev = {
    BASE_API: 'http://localhost:8080'
    // BASE_API: 'https://randomuser.me'
  };
  // 测试环境
  const stag = {
    BASE_API: 'http://localhost:8080'
  };
  // 生产环境
  const prod = {
    BASE_API: 'http://localhost:8080'
  };

  module.exports = { dev, stag, prod };
