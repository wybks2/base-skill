/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// var isSameTree = function (p, q) {
//   //都为空
//   if (p == q) {
//     return true;
//   }
//   isSame(p, q);
//   return flag;
// };
// let flag = true;
// function isSame(p, q) {
//   if (p == null) {
//     if (q) {
//       flag = false;
//       return caa;
//     }
//     return;
//   } else {
//     if (q == null) {
//       flag = false;
//       return;
//     }
//     if (p.val != q.val) {
//       flag = false;
//       return;
//     }
//     isSame(p.left, q.left);
//     isSame(p.right, q.right);
//   }
// }

// -> 优化算法 深度优先算法
var isSameTree = function (p, q) {
  //都为空
  if (p == q) {
    return true;
  }
  return isSame(p, q);
};
function isSame(p, q) {
  if (p == null) {
    if (q) {
      return false;
    }
    return true;
  } else {
    if (q == null) {
      return false;
    }
    if (p.val != q.val) {
      return false;
    }
    return isSame(p.left, q.left) && isSame(p.right, q.right);
  }
}
// -> 广度优先算法 思路get