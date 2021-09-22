// let 通过闭包和函数作用域 实现
const focus = [];

function loop(i) {
  focus[i] = function() {
    console.log(i)
  }
}

for (var i = 0; i < 4; i++) {
  loop(i);
}

// for (var i = 0; i < 4; i++) {
//   console.log(i);
// }

// for (var i = 0; i < 4; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }
