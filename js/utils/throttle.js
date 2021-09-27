// 开关锁 timer = null
// scroll 每隔一秒计算一次 位置信息
function throttle(fn, delay) {
  let timer;
  return (args) => {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  };
}
