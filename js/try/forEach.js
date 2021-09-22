const arr = [1,2,3,4];
arr.forEach(item => {
  if(item >= 3) {
    return
  }
  console.log(item);
})
// 会有数组塌陷的问题
arr.forEach((item,index) => {
  arr.splice(index, 1);
  console.log(index, item);
})