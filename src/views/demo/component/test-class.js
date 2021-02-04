
// function Parent() {
//   // private 因为作用域的关系, 在函数外访问不到, 实例化之后的对象访问不到
//   const num = 1;
//   function print() {
//     console.log('private', num);
//   }
//   // protected 可以访问到函数内部的私有属性和私有方法, 在实例化之后就可以对实例化的类进行初始化拿到函数的私有属性
//   this.getnum = function () {
//     console.log(num);
//   };

//   // public 实例化之后,实例对象就可以访问到
//   this.name = 'wwx';
//   this.print = function () {
//     console.log(this.name);
//   };
// }

class Person {
  // 静态方法属性, 只能通过类来调用, 不会被实例继承
  // 如果静态方法包含this关键字, 这个this指向的是类,而不是实例
  static age = 'wwx';

  static getAge() {
    console.log(this.age); // this.age 其实是Person.age
  }

  // public 公共属性,实例可以调用,会被实例继承
  // 如下是简写, 相当于在constructor里面写了this.size='big'
  size = 'big';

  getSize() {
    console.log(this.size, this.#count);
  }

  // 私有方法和属性 ES6没有提供, 在命名上加以区分
  // 私有属性
  #count = 100;

  // 私有方法
  _bar() {
    console.log('private', this.size);
  }
}

export default Person;

// function Person() {
//   this.age = 18;
// }
// Person.prototype.name = 'nihao';
// const person = new Person();

// console.log('person is', Object.keys(person), person.name);
