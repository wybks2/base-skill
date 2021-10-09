// 大数相加
let a = "9007199254740991";
let b = "1234567899999999999";

// padStart() padEnd方法 字符串补全



// function add(a, b) {
//     const alen = a.length;
//     const blen = b.length;
//     const maxlen = Math.max(alen, blen);
//     // 我的想法 反转 加零
//     const arr1 = a.split("").reverse().map(item => Number(item));
//     const arr2 = b.split("").reverse().map(item => Number(item));
//     const number = [];
//     let sign = 0;
//     for(let i = 0; i< maxlen; i++) {
//         arr1[i] = arr1[i]? arr1[i] : 0;
//         arr2[i] = arr2[i]? arr2[i] : 0;
//         let num = arr1[i] + arr2[i] + sign;
//         sign = 0;
//        if(num < 10) {
//            // sign 控制进制位
//            number[i] = num;
//        } else {
//            // 取余 取个位数
//            number[i] = num%10;
//            sign = 1;
//        }
//     }
//     console.log(number.reverse().join(""));
//     return  sign == 0 ? number.reverse().join("") : sign + number.reverse().join("")
// }

function add(a, b) {
    const length = Math.max(a.length, b.length);
    const A = a.padStart(length, '0');
    const B = b.padStart(length, '0');
    let sign = 0;
    let number = "";
    // 进位
    for(let i = length-1;i>=0 ;i--) {
      const num = Number(A[i]) + Number(B[i]) + sign;
      sign = 0;
      if( num >= 10) {
          sign = 1;
          number = String(num)[1] + number;
      } else {
          number = num + number;
      }
    }
    return number
}

console.log(add(a, b));