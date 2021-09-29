// 发布订阅模式  发布者   
class EventEmitter{
    constructor() {
        // 中间调度
        this.events = {

        }
    }
    // 发布
    on(type, cb) {
       if(!this.events[type]) {
           this.events[type] = [cb]
       }else{
           this.events[type].push(cb)
       }
    }

}