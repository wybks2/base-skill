// object toString 返回一个表示该对象的字符串
const Fn = function(params) {}
const type = Object.prototype.toString.call(Fn)
console.log(type);
const obj = {};
console.log(obj.toString())
// console.log(Object.toString.call(Fn))