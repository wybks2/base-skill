// 循坏调用
// 感觉有点问题
function mySet(fn , delay) {
  let timer 
  function inter() {
    fn();
    timer = setTimeout(inter, delay);
  }
  inter();
}

// stack  inter() -> fn()  1000ms inter() fn()