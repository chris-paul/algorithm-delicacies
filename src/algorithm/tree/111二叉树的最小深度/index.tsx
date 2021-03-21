/*
 * @Author: 廉恒凯
 * @Date: 2021-03-15 22:11:15
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-20 22:50:00
 * @Description: file content
 */
import Node from '@dataStructure/tree/treeNode';

type TreeNode = Node<number> | null;

function minDepth(root: TreeNode): number {
  if (!root) return 0;
  const queue: [TreeNode, number][] = [[root, 1]];
  while (queue.length) {
    const [current, res] = queue.shift() as [TreeNode, number];
    if (current && !current.left && !current.right) {
      return res;
    }
    if (current && current.left) queue.push([current.left, res + 1]);
    if (current && current.right) queue.push([current.right, res + 1]);
  }
  return 0;
}

function minDepthRecursive(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  if (!root.left && root.right) {
    return minDepth(root.right) + 1;
  }
  if (root.left && !root.right) {
    return minDepth(root.left) + 1;
  }
  return (
    Math.min(minDepthRecursive(root.left), minDepthRecursive(root.right)) + 1
  );
}

export { minDepthRecursive, minDepth };
