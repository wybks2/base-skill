/**
 * 将传入的obj作为新建obj的__proto__
 */

Object.prototype.create = function(obj) {
  const object = {};
  object.__proto__ = obj;
  return object;
}
const obj1 = {name:"孝昌"};
const obj2 = Object.create(obj1);
console.log(obj2, obj2.name);