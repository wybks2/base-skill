// 原型链继承

//构造函数super
//console.log(1)
function SuperType() {
  this.proSuper = true;
  this.colors = [];
}
//构造函数原型上挂载函数
SuperType.prototype.getPro = function () {
  console.log(this.proSuper);
};

function SubType() {
  this.subPro = false;
}
// 重写构造函数SubType的原型对象 指向SuperType实例  该原型对象的constract指向构造函数super
SubType.prototype = new SuperType(); // {proSuper:true, colors}

// console.log(SubType.proSuper) 构造函数无法继承自身原型对象上的方法

// 该方法挂载在supertype 原型对象上面
SubType.prototype.getSubPro = function () {
  console.log(this.subPro);
};

const instance = new SubType();
const instance2 = new SubType();
instance2.proSuper = 1;
//添加了一个新属性
instance.colors.push("green");
instance.colors = 2;
// 先查找 再push
console.log(instance.proSuper, instance2.colors, instance2, instance);
// proSuper 来自super的实例 == subType.prototype getSubPro colors
// subPro instance自身  getPro 来自构造函数superType的protorype

// 1 原型链继承缺点1 原型链上 引用类型的值 会被实例共享
// 2 无法在不影响所有实例对象的情况下，把参数传给父元素的构造函数
// 以上两种原因 导致不会被单独使用

//2 盗用构造函数 对象伪装 跟 经典继承

function SuperType1(name, age) {
  this.name = name;
  this.age = age;
  this.getName = function () {
    console.log(this.name);
  };
}

function SubType1(name, age) {
  SuperType.call(this, name, age);
}

const son = new SubType1("qqq", 12);
console.log(son);
// 方法定义在构造函数中，每构造一个实例都会创建一遍方法

// 组合继承
// 构造函数构造属性，原型链继承方法 定义在原型上的方法重用 每个实例都有属性
function Animal(name) {
  this.name = name;
}

Animal.prototype.getName = function () {
  console.log(this.name);
};

function Dog(name, age) {
  Animal.call(this, name);
  this.age = age;
}
// Dog.prototype = {animal实例} 实例上如果没有该属性 指向了animal的prototype
//-组合继承 
console.log((new Animal).contructor);
Dog.prototype = new Animal();
//- 最简单的寄生组合式继承
//- Dog.prototype = Object.create(Animal.prototype);


// 构造函数指回 否则会丢失constract 寄生组合式继承
const Fn = function() {};
Fn.prototype = Animal.prototype;
Dog.prototype = new Fn();

Dog.prototype.contructor = Dog;
const dog1 = new Dog("yellow", 23)
console.log(dog1.contructor)
console.log(dog1.age);

// 调用了两次构造函数

// 寄生组合式继承
// 不直接调用父类构造函数给子类原型赋值 通过创建空函数F获取父类原型的副本
// function Aniaml() {
  
// }


