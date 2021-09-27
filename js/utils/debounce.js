// 防抖 触发事件不立即执行，而是延缓一定时间，时间内再次触发，则刷新计时时间  用于高频触发事件
// 调整浏览器窗口大小
// 按钮
function debounce(cb) {
  console.log('enter');
  let timer = null;
  return function() {
    console.log("debounce")
    if(timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(cb, 200);
  }
}

const fn =  debounce(consolePrint);

function consolePrint() {
  consolePrint("i am print");
}
fn();
fn();