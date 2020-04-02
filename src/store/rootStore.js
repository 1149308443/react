import {
  observable, computed, action
} from 'mobx';

class RootStor {
    @observable // 观察数据name，响应observer
    age = 1

    @computed // 当age发生改变是，触发函数
    get douleAge() {
      // 此this值得是class类的实例
      return this.age + 2;
    }

    @action // 用户操作,action唯一可以更改state。数据请求直接在action中书写
    add() {
      // 数据更改
      this.age += 1;
    }
}

export default new RootStor();
