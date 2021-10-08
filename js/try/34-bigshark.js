const list = [
  {
    id: 1,
    text: '节点1',
    parentId: 0 //这里用0表示为顶级节点
  },
  {
    id: 2,
    text: '节点1_1',
    parentId: 1 //通过这个字段来确定子父级
  }
]
// 列表转换为树
function listToTree(list) {
  const temp = {};
  const tree = [];
  list.forEach(node => {
    if (node.parentId == 0) {
      tree.push(node);
      return;
    }
    temp[node.parentId] || (temp[node.parentId] = []);
    temp[node.parentId].push(node);
  })
  tree.forEach(item => { temp[item.id] && (item.children = temp[item.id]) })
  console.log(tree, tree[0].children)
}

listToTree(list)

// function parentId(node) {

// }