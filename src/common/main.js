/**
 * filename: main.js
 */
// 1
// console.log('1,2,3,4,5')
// exports.name = 1
// => module.exports = {
//   name: 1
// }

// 2
// import _ from 'lodash';
// const numbers = _.map([1,2,3,4,5,6], n => n*n)
// // document.getElementById("app-container").innerHTML = template({numbers});
// console.log({numbers})


// console.log('__dirname', __dirname)
// console.log('__filename', __filename)
// console.log('process.cwd', process.cwd())
// console.log('resolve(\'./\')', path.resolve('./'))

// import path from 'path'
// import { map } from 'lodash';

// const path = require('path')


// function component() {
//   var element = document.createElement('div');
//   // Lodash, currently included via a script, is required for this line to work
//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   return element;
// }
// document.body.appendChild(component());

console.log('1,2,3,4,5');
(function (a) {
  console.log(a)
})(1);
/**
 * !继承
 */
!function () {
  function Person(name, age) {
    this.name = name
    this.age = age
  }
  var person1 = new Person('A', 10)
  Person.prototype.getName = function () {
    console.log(this.name)
  }
  console.log(person1.__proto__, Person.prototype) // 原型对象
  console.log(person1.constructor) // Person
  console.log(person1 instanceof Person) // true
  console.log(Person.prototype.constructor) // Person
  // 1
  Person.prototype = {
    getAge() {
      console.log(this.age)
    }
  }
  console.log(person1.__proto__, Person.prototype) // 上一个原型对象，新对象
  console.log(person1.constructor) // Person
  console.log(person1 instanceof Person) // false,因为person1原型对象还是原来的
  console.log(Person.prototype.constructor) // Object
}();
// 2
(function () {
  function Person(name, age) {
    this.name = name
    this.age = age
  }
  var person1 = new Person('A', 10)
  Person.prototype.getName = function () {
    console.log(this.name)
  }
  Person.prototype = {
    constructor: Person,
    getAge() {
      console.log(this.age)
    }
  }
  console.log(person1.__proto__, Person.prototype) // 上一个原型对象，新对象
  console.log(person1.constructor) // Person
  console.log(person1 instanceof Person) // false,因为person1原型对象还是原来的
  console.log(Person.prototype.constructor) // Object
})();
// 3
(function () {
  function Person(name, age) {
    this.name = name
    this.age = age
  }
  var person1 = new Person('A', 10)
  Person.prototype.getName = function () {
    console.log(this.name)
  }
  Person.prototype.constructor = Object
  console.log(person1.__proto__, Person.prototype) // 原型对象
  console.log(person1.constructor) // Person
  console.log(person1 instanceof Person) // true
  console.log(Person.prototype.constructor) // Object


  function Person(name, age) {
    const o = new Object()
    o.name = name
    o.age = age
    return o
  }
  var person1 = new Person('A', 10)
  console.log(person1 instanceof Person) // false
  console.log(person1.constructor) // Object
})();

/**
 * !原型链继承
 */
!function () {
  function Sub(name, color) {
    this.color = [1, 2, 4]
    this.name = name
  }
  Sub.prototype.getSubName = function () {
    console.log('sub', this.name)
  }
  function Super(name, age) {
    this.age = age
    Sub.call(this, name)
  }
  Super.prototype = new Sub()

  const eg = new Super('eg', 10)

  console.log(eg instanceof Super) //true  eg.__proto__ === Super.prototype
  console.log(eg instanceof Sub) // true  eg.__proto__.__proto__ === Sub.prototype
}();
/**
 * !2.寄生组合式继承
 */
!function () {
  function Sub(name, color) {
    this.color = [1, 2, 4]
    this.name = name
  }
  Sub.prototype.getSubName = function () {
    console.log('sub', this.name)
  }
  function Super(name, age) {
    this.age = age
    /**
     * !借用构造函数
     */
    Sub.call(this, name)
  }
  function F() { }
  F.prototype = Sub.prototype
  const f = new F()
  f._proto__ === F.prototype === Sub.prototype
  Super.prototype = f
  const eg = new Super('eg', 10)
  console.log(eg instanceof Super) //true  eg.__proto__ === Super.prototype
  console.log(eg instanceof Sub) // true  eg.__proto__.__proto__ === Sub.prototype
}();
/**
 * ! 寄生式继承
 */
function object(o) {
  function F() { }
  F.prototype = o
  var clone = new F()
  clone.getName = function () { }
  return clone
}
/**
 * ! 原生式继承
 */
function object(o) {
  function F() { }
  F.prototype = o
  var clone = new F()
  return clone
}

