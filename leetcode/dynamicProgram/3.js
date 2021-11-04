//给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

// 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

// 进阶：

// 如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/is-subsequence
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// var isSubsequence = function (s, t) {
//   // 作为s的指针
//   const index = 0;
//   const max = s.length - 1;
//   for (let i = 0; i < t.length; i++) {
//     if (index == max) {
//       return true;
//     }
//     if (s[index] == t[i]) {
//       index++;
//     }
//   }
//   if( index !== max ) {
//     return false;
//   }
//   return true;
// };

// 进阶 存储每个字符串 下一个字母的出现位置


var isSubsequence = function (s, t) {
  const array = [];
  for(let i = 0; i < t.length; i ++) {

  }
}