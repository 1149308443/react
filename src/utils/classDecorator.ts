export default function Decorator(target: any): any {
  // console.log(target);
  return class extends target {
        apiUrl = '我是修改后的数据';

        getData(): any {
          const str = `${this.apiUrl}xxx`;

          console.log(str);
        }
  };
}
