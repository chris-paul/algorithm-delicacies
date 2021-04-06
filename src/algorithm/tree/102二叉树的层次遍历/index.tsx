/*
 * @Author: 廉恒凯
 * @Date: 2021-03-17 21:15:33
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-17 21:16:30
 * @Description: file content
 */
import Node from '@dataStructure/tree/treeNode';

type TreeNode = Node<number> | undefined;

function levelOrder(root: TreeNode): number[][] {
  // 先进行广度优先遍历把
  if (!root) return [];
  const queue: [TreeNode, number][] = [[root, 0]];
  const result = [];
  while (queue.length) {
    const [current, depth] = queue.shift() as [Node<number>, number];
    if (result[depth]) {
      result[depth].push(current.val);
    } else {
      result[depth] = [current.val];
    }
    if (current.left) queue.push([current.left, depth + 1]);
    if (current.right) queue.push([current.right, depth + 1]);
  }
  return result;
}

export default levelOrder;
