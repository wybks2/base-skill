

class Lazy {
    constructor(x) {
        console.log(x)
        this.tasks = [];
        this.time = 0;
    }
    async next() {
        return new Promise((reslove) => {
            this.tasks.shift()(this.time, reslove);
        })
    }
    eat(name) {
        console.log(`eat${name}`)
        this.tasks.push()
        return this
    }
    async sleep(delay) {
        this.time = delay;
        console.log(this.time)
        this.tasks.push(this.delay);
        await this.next();
        console.log("立马")
        return this
    }
    delay(delay, cb) {
        console.log(delay)
        setTimeout(() => {
            console.log("walk", delay)
            cb();
        }, delay)
    }
}


function lazyMan(name) {
    return new Lazy(name)
}

lazyMan("Hank").sleep(3000)