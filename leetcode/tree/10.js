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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const levels = []
    const queue = []
    level2(levels, root, 0, queue)
    return Array.from(levels);
};
// 层序遍历  递归
function level(levels, root, layer) {
    if (!root) {
        return
    }
    // 如果没有该对象,创建数组
    if (!levels[layer]) {
        levels[layer] = []
    }
    levels[layer].push(root.val);
    layer++;
    level(levels, root.left, layer);
    level(levels, root.right, layer);
}

// 优化层序遍历  递归

function level2(levels, root, layer, queue) {
    if (!root) {
        return
    }
    queue.push(root.val);
    // 如果没有该对象,创建数组, 说明进入了下一层
    if (!levels[layer]) {
        levels[layer] = queue;
        queue = [];
    }
    layer++;
    level2(levels, root.left, layer);
    level2(levels, root.right, layer);
}