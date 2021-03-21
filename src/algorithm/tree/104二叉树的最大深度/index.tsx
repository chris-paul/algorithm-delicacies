/* eslint-disable no-param-reassign */
/*
 * @Author: 廉恒凯
 * @Date: 2021-03-15 21:12:41
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-21 17:43:23
 * @Description: file content
 */
import TreeNode from '@dataStructure/tree/treeNode';
/**
 * 深度优先遍历就好 事件复杂度O(N)
 * 空间复杂度 最差的时候 就是一个节点只有一个子树 空间复杂度和节点树的关系是O(N)
 * 如果树均匀分布的二叉树,空间复杂度是O(lgN)
 * @param root
 * @returns
 */
const maxDepth = (root: TreeNode<number> | null): number => {
  if (!root) return 0;
  const maxLeft = maxDepth(root.left) + 1;
  const maxRight = maxDepth(root.right) + 1;
  return Math.max(maxRight, maxLeft);
};

export default maxDepth;
