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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    const queue = []
    const number = []
    Dynamic(root, targetSum, queue)
};
// 层序遍历
function Dynamic(root, target, queue) {
    // 传入节点为空 则不存在
    if (!root) {
        return;
    }

    

}