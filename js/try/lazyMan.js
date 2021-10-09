

class Lazy {
  constructor(name) {
      // 创建一个任务队列
      this.tasks = [];
      const task = () => {
          console.log(`Hi! this is ${name}`)
          this.next();
      }
      tasks.push(task);
      setTimeout(() => {
        this.next();
      }, 0)
  }
  eat(some) {
    
  }
}


function lazyMan(name) {
    return new Lazy(name)
}

lazyMan("Hank").sleep(3000)