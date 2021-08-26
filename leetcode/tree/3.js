/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 递归路子
var isSymmetric = function (root) {
  if (root.left == root.right) {
    return true;
  }
  if (root.left == null) {
    return false;
  }
  if (root.right == null) {
    return false;
  }
  return isSame(root.left, root.right);
};
function isSame(left, right) {
  // 传入节点都为空
  if (left == right) {
    return true;
  }
  // 传入节点有一个为空 因为是&& 所以会导致最终输出false
  if (left == null || right == null) {
    return false;
  }
  // 优化
  // if(left.val !== right.val) {
  //   return false;
  // }
  // // 全为null相等, 走到最后空说明是镜像
  // if(left.left == right.right) {
  //   return true
  // }
  // // 有一个为空
  // if(left.left == null || right.right == null) {
  //   return false
  // }
  return (
    left.val === right.val &&
    isSame(left.left, right.right) &&
    isSame(left.right, right.left)
  );
}

// 迭代路子
