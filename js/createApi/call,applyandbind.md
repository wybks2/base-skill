> call,apply,bind都可以用于改变this指向。
> 但是不同点，bind会返回一个新的函数，而call,apply则是直接执行函数
> call 后面跟参数, apply后跟数组。都是劫持一个对象的方法，继承另一个对象的属性并调用。call的性能要优于apply,尤其是在参数超过三个的时候