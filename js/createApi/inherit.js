// 原型链继承

//构造函数super
//console.log(1)
function SuperType() {
  this.proSuper = true;
  this.colors = []
}
//构造函数原型上挂载函数
SuperType.prototype.getPro = function() {
    console.log(this.proSuper)
}

function SubType() {
    this.subPro = false;
}
// 重写构造函数SubType的原型对象 指向SuperType实例  该原型对象的constract指向构造函数super
SubType.prototype = new SuperType() // {proSuper:true, colors}

// console.log(SubType.proSuper) 构造函数无法继承自身原型对象上的方法

// 该方法挂载在supertype 原型对象上面
SubType.prototype.getSubPro = function() {
    console.log(this.subPro)
}

const instance = new SubType();
const instance2 = new SubType();
instance2.proSuper = 1 
//添加了一个新属性
instance.colors.push("green");
instance.colors = 2
// 先查找 再push
console.log(instance.proSuper, instance2.colors, instance2, instance)
// proSuper 来自super的实例 == subType.prototype getSubPro colors
// subPro instance自身  getPro 来自构造函数superType的protorype

// 1 原型链继承缺点1 原型链上 引用类型的值 会被实例共享
// 2 无法在不影响所有实例对象的情况下，把参数传给父元素的构造函数
// 以上两种原因 导致不会被单独使用


//2 盗用构造函数 对象伪装 跟 经典继承

function SuperType1(name, age) {
   this.name = name;
   this.age = age;
}

function SubType1(name, age) {
   SuperType.call(this, name, age)
}

const son = new SubType1("qqq", 12);
console.log(son)



