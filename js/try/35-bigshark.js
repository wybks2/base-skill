// 树形结构转成列表

// 转成
// [
//     {
//         id: 1,
//         text: '节点1',
//         parentId: 0 //这里用0表示为顶级节点
//     },
//     {
//         id: 2,
//         text: '节点1_1',
//         parentId: 1 //通过这个字段来确定子父级
//     }
//     ...
// ]
// const list = []


// function toList(tree) {
//     tree.forEach(node => {
//        const {id, text, parentId} = node;
//        list.push({id , text, parentId});
//        if(node.children) {
//            toList(node.children);
//        }
//     })
// }

// toList(tree)
// console.log(list);
//

// function treeToList(tree) {
//     const res = [];
//     const dfs = (tree) => {
//         tree.forEach(item => {
//             if (item.children) {
//                 dfs(item.children);
//                 delete item.children
//             }
//             res.push(item);
//         })
//     }
//     dfs(tree);
//     console.log(res)
//     return res
// }
const tree = [
    {
        id: 1,
        text: '节点1',
        parentId: 0,
        children: [
            {
                id: 2,
                text: '节点1_1',
                parentId: 1
            }
        ]
    }
]

function treeToList(tree) {
    const list = [];
    const dfs = (tree) => {
        tree.forEach(node => {
            list.push(node)
            if (node.children) {
                dfs(node.children)
            }
        })
    }
    dfs(tree);
    console.log(list);
    return list
}
treeToList(tree);