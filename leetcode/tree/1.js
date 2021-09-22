/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} 
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {};
// 1 思路先有多少种排列组合 然后生成二叉树 递归

// 搜索树 左小于跟小于右
function generateArr(n) {
  const arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
}
// 生成排列组合
function generateNode(arr) {
  
}
// 生成二叉树
// 2.动态规划