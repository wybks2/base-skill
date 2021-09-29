// 循坏调用
// 感觉有点问题
function mySet(fn, delay) {
  let number = 0;
  function interv() {
    number++;
    fn();
    if (number > 5) {
      return;
    }
    setTimeout(() => {
      interv();
    }, delay);
  }
  setTimeout(interv, delay);
}

function Fn() {
  console.log("1");
}
mySet(Fn, 1000)
// stack  inter() -> fn()  1000ms inter() fn()

// setInterval 是间歇调用 setTimeout 是超时调用
// 为什么要用 setTimeout 模拟setInterval
// setInterval 是一定时间后加入消息队列，而不是执行代码，何时执行，取决于何时被主线程的事件循环取到
