/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let layer = [0];
  if (!root) {
    return 0;
  }
  Ergodic(root, 0, layer);
  return layer[0];
};
// - 确定递归思路 i当前次数 conut最终次数
function Ergodic(root, count, layer) {
  if (root == null) {
    if(count>layer[0]){
      layer[0] = count;
    }
    console.log(count)
  }
  count++;
  Ergodic(root.left, count, layer);
  Ergodic(root.right, count, layer);
}
