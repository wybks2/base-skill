// forEach 不会改变原数组
const arr = [1,2,3,4];
arr.forEach(item => {
    item > 2 && (item = 2)
})
console.log(arr)

// Array.prototype.flat(); 拍平

// 将数组展开
// 1. 扩展运算符 + concat
// 2. concat + apply
// 3. toString + split

// 1. 用reduce实现flat