/* eslint-disable no-unused-expressions */
/*
 * @Author: 廉恒凯
 * @Date: 2021-03-11 21:32:50
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-14 19:02:57
 * @Description: file content
 */
/**
 * 遍历顺序是根节点->左子树->右子树
 * @param node
 * @returns
 */
import TreeNode from '../../treeNode';

/**
 * 根左右 递归实现二叉树的前序遍历
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 * @param node
 * @param result
 * @returns
 */
const DLRRecursive = <T,>(node: TreeNode<T>, result: T[]): T[] => {
  if (node) {
    result.push(node.val);
    node.left && DLRRecursive(node.left, result);
    node.right && DLRRecursive(node.right, result);
  }
  return result;
};

/**
 * 根左右 递归实现二叉树的前序遍历
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 * @param node
 * @param result
 * @returns
 */
const DLR = <T,>(node: TreeNode<T>): T[] => {
  const stack: TreeNode<T>[] = [node];
  const result = [];
  while (stack.length) {
    const current = stack.pop();
    if (current) {
      result.push(current.val);
      current.right && stack.push(current.right);
      current.left && stack.push(current.left);
    }
  }
  return result;
};

export { DLR, DLRRecursive };
