// setTimeout 模拟setInterval

// setInterval 是每隔一段时间将一个回调函数存入事件队列
let count = 0;

function setInter(cb, delay) {
    let timer
    const interval = () => {
        // setTimeout((cb) => {
        //   cb();
        //   interval(cb)
        // }, delay);
        count ++;
        cb();
        // 它执行完毕 停止的是上一个
        timer = setTimeout(interval, delay);
    } 
    timer = setTimeout(interval, delay);

    return {
        stop: () => {
            console.log("stop")
            clearTimeout(timer)
        }
    }
}

function message() {
   console.log("timer", count)
//    if(count >=4) {
//      inter.stop()
//    }
}

const inter = setInter(message, 5000);

inter.stop()
// 进阶 执行5次后 自动停止

// 执行一次 自动停止 setInter
function setTime(cb, delay) {
    let timer;
    const Timeout= () => {
        cb();
        clearInterval(timer);
    }

    timer = setInterval(Timeout, delay)
}

setTime(message, 1000)