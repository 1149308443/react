import classDecorator from './classDecorator';

export { default as createBrowserHistory } from './historyUtil';

export { default as service } from './axiosUtil';

export { default as classDecorator } from './classDecorator';

@classDecorator
class Name {
    public apiUrl: any

    constructor() {
      this.apiUrl = '这是构造函数里面的';
    }

    getData(): void {
      console.log(this.apiUrl);
    }
}
export default Name;
