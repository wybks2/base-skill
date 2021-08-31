/**
 * @desc bind()方法创建一个新的函数，在bind()被调用时，这个新函数的this被指定为bind()的第一个参数，而其余参数将作为新函数的参数，供调用时使用
 * 如果取名bind 堆栈溢出
 */

Function.prototype.bindnew = function (_this, ...args) {
  console.log(this, _this, ...args);
};
// 1.获取function  this == Father
// 最终返回一个新的函数

function Father(name = "老王") {
  this.name = name;
}
const obj = {
  age: 16,
};
const Fn = Father.bindnew(obj, "小王");
// Fn1 返回一个改变了this指向的函数
const Fn1 = Father.bind(obj, "小张");

const bindObj = new Fn1("bindObj");

console.log(Fn1.__proto__ === Father.prototype,"Fn1不是继承自Father" ,bindObj, "", obj ,"");
console.log(Fn1, "Fn1函数是bound Father")
