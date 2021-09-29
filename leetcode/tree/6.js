/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const queue = [];
  const stack = [];
  if(!root) {
    return stack;
  }
  resursive(root, stack);
};
// 1. 递归
function resursive(root, stack) {
  if(!root) {
    return stack;
  }
}

// 2. 迭代
// 队列存储fn
function interation(root) {
  // 有左子节点
  if(root.left){
    interation();
  }  
}

// 3. 莫里斯遍历