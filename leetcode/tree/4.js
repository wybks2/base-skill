/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
  
};

function Ergodic(root, i) {
  if(root == null){
    return i;
  }
  if(root.left) {
    i++;
    Ergodic(root.left, i)
  }
  if(root.right) {
    i++
  }

}