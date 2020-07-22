import Mock from 'mockjs';

const { Random } = Mock;

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
