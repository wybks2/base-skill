/**
 * @desc new运算符，创建新对象做了什么
 * 1. 创建一个空对象
 * 2. 将构造函数的this，指向空对象，然后执行构造函数
 * 3. 将空对象的__proto__ 指向构造函数的prototype
 * 4. return 该对象
 */

function myNew(fun, ...rest) {
  const obj = {};
  fun.call(obj, ...rest);
  obj.__proto__ = fun.prototype;
  return obj;
}

function Father(name = "小明") {
  this.name = name;
}
Father.prototype.callName = function(){
  console.log(this.name);
}

let son = myNew(Father, "小王");
console.log(son, "son...");
son.callName()
