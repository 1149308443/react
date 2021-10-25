import NoFound from '@src/views/404/';
import { mount } from 'enzyme';

test("get child component AddTodo length", () => {
  // 模拟 props
  //   const props = {};

  // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
  const Wrapper = mount(<NoFound />);
  expect(Wrapper.html()).toMatchSnapshot()
})

export { }