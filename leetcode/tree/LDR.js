// import {bst} from "./createTree.js"
const {bst} = require('./createTree.js')

//  

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
  const stack = [];
  const nodeList = [];
  if(!root) {
    return nodeList;
  }
  hasLeft(root, stack, nodeList)
  return nodeList;
};

// 1.判断有无左子节点  有: stack存入该节点  无进行判断有无右子节点 
function hasLeft(node, stack , nodeList) {
  if(node.left){
    stack.push(node);
    // 对该节点的左子节点进行左判断
    hasLeft(node.left, stack, nodeList)
  } else {
    // 存入该节点
    nodeList.push(node.val);
    // 右判断
    hasRight(node, stack, nodeList);
  }
}


// 判断新推出的node 是否有右子节点
function hasRight(node, stack, nodeList) {
  // 存在右子节点
  if(node.right){
    hasLeft(node.right, stack, nodeList)
  } else {
    if(stack.length===0) {
      return nodeList;
    }
    const n = stack.pop();
    nodeList.push(n.val);
    hasRight(n, stack, nodeList)
  }
}
console.log(inorderTraversal(bst))