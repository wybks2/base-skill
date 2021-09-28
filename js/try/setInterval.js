// 循坏调用
// 感觉有点问题
// function mySet(fn , delay) {
//   let timer 
//   function inter() {
//     fn();
//     timer = setTimeout(inter, delay);
//   }
//   inter();
// }

// stack  inter() -> fn()  1000ms inter() fn()

function myInter(fn, delay) {
  let timer;
  const x = 3;
  function inter() {
    fn();
    timer = setTimeout(inter, delay);
  }

  setTimeout(inter, delay);
  return {
    stop: () => {
      console.log(x)
      clearTimeout(timer)
    }
  }
}

function Fn() {
  console.log(1)
}

const a = myInter(Fn, 1000);

setTimeout(() => {
  a.stop()
}, 2000)

// 进阶如何停止 

// 模拟定时器 执行一次后直接清除定时器