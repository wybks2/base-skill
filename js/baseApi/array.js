// forEach 不会改变原数组
const arr = [1,2,3,4];
arr.forEach(item => {
    item > 2 && (item = 2)
})
console.log(arr)