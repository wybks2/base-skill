// function compose(...args) {
//   let number = 0;
//   args.forEach((fn) => {
//     number = fn(number);
//   });
//   return (x) => {
//     return x + number;
//   };
// }
// function compose(...fn) {
//   if (!fn.length) return (v) => v;
//   if (fn.length === 1) return fn[0];
//   return fn.reduce(
//     (pre, cur) =>
//       (...args) =>
//         pre(cur(...args))
//   );
// }


// 函数嵌套还是没太明白啊
// function compose(...fn) {
//   if (fn.length == 0) return (x) => x;
//   if (fn.length == 1) return fn[0];
//   return fn.reduce(
//     (pre, next) =>
//       (...args) =>
//         pre(next(...args))
//   );
// }


// 9/29
function compose(...fn) {
  if (fn.length == 0) return (x) => x;
  if (fn.length == 1) return fn[0];
  return fn.reduce(
    (pre, next) =>
      (...args) =>
        pre(next(...args))
  )
}
// 用法如下:
function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11
// [1, 2, 3].reduce((pre, next) => {
//   console.log(pre, next);
//   return pre + next;
// });
