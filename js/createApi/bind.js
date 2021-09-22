/**
 * @desc bind()方法创建一个新的函数，在bind()被调用时，这个新函数的this被指定为bind()的第一个参数，而其余参数将作为新函数的参数，供调用时使用
 * 如果取名bind 堆栈溢出
 * bind(thisArg, ...arg)
 * 1. 
 * 
 * 2. 如果为空，或者传入null 则原this作为
 */

Function.prototype.bindnew = function (_this, ...args) {
  console.log(this, _this, ...args, "构建包装类");
  //fn 就是该函数
  //bind 包装的函数 原型链不继承自原函数
  const fn = this;
  return function() {
    console.log("运行包装函数")
    fn.call(_this, ...args);
  }
};
// 1.获取function  this == Father
// 最终返回一个新的函数

function Father() {
  console.log(this, 'this指向',arguments);
  this.name = Array.from(arguments);
}
const obj = {
  age: 16,
};
const Fn = Father.bindnew(obj, "小王");
const bindFn = new Fn();
// new 1 创建一个空对象
// 执行构造函数 把构造函数的this 指向空对象。
// 返回该空对象

// console.log(Fn.__proto__ === Father.prototype, "Fn不是继承自father");
// console.log(bindFn, "包装函数new")
// Fn1 返回一个改变了this指向的函数
const Fn1 = Father.bind(obj, "小张");
const Fn2 = Father.bind(null);
console.log(Fn1.__proto__ === Father.prototype,"Fn1不是继承自Father", Fn1)
console.log(Fn2.__proto__ === Father.prototype,"Fm2不是继承自Father")

const bindFn1 = new Fn1("bindObj");
console.log(bindFn1, "bindFn1", obj ,"");

const bindFn2 = new Fn2("bindFn2")
console.log(bindFn2, "bindFn2");

console.log(Fn1, "Fn1函数是bound Father")


// 偏函数  thisArg 为null 或者空 执行作用域的this 被认为boundFunction
function TeamList() { 
  console.log(arguments)
  return Array.prototype.slice.call(arguments)
}

const TeamListBind = TeamList.bind(null, "zhangxiaochang");
TeamListBind()
const a = new TeamListBind("wyb")
console.log(a);
const b = new TeamListBind("wyb2")
console.log(b);

//c
this.x = 9;
module = {
  x: 91
}
