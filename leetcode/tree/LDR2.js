const {bst} = require('./createTree.js')
 // 递归遍历
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
  const nodeList = [];
  isEnd(nodeList, root)
  console.log(nodeList);
  return nodeList;
};
function isEnd(nodeList, root){
  if(!root) {
    return
  }
  isEnd(nodeList, root.left);
  nodeList.push(root.val);
  isEnd(nodeList, root.right);
}
inorderTraversal(bst);