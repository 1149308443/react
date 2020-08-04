import Mock from 'mockjs';

const { Random } = Mock;

Mock.XHR.prototype.withCredentials = true; // 通过cros解决跨域问题的时候, mock会影响cookie的携带,需要设置设此项

Mock.setup({
  timeout: '200-400'
});

Mock.mock('http://test/mock', 'get', {
  isOk: true,
  'result|5-10': [{
    'key|+1': 1,
    'number3|123.3': 1,
    name: '@string',
    age: '@integer',
    img: '@image(100*100)'
  }]
});
