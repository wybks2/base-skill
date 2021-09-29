// toString 返回一个表示当前函数源代码的字符串

function mytypeof(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}
console.log(mytypeof([]));