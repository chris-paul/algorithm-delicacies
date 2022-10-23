/* eslint-disable no-continue */
/* eslint-disable no-unused-expressions */
/*
 * @Author: 廉恒凯
 * @Date: 2021-03-11 21:32:50
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-14 21:28:38
 * @Description: file content
 */
import TreeNode from '../../treeNode';

/**
 * 左右根 递归实现二叉树的后序遍历
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 * @param node
 * @param result
 * @returns
 */
const LRDRecursive = <T,>(node: TreeNode<T>, result: T[]): T[] => {
  if (node) {
    node.left && LRDRecursive(node.left, result);
    node.right && LRDRecursive(node.right, result);
    result.push(node.val);
  }
  return result;
};

/**
 * 左右根 实现二叉树的后序遍历 其实就是把前序遍历调转下方向
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 * @param node
 * @param result
 * @returns
 */
const LRD = <T,>(node: TreeNode<T>): T[] => {
  const stack: TreeNode<T>[] = [node];
  const result = [];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current) {
      result.push(current.val);
      current.left && stack.push(current.left);
      current.right && stack.push(current.right);
    }
  }
  return result.reverse();
};

const LRD2 = <T,>(root: TreeNode<T>): T[] => {
  const stack: TreeNode<T>[] = [root];
  const res = [];
  while (stack.length) {
    const node = stack.pop();
    if (node) {
      res.unshift(node.val);
      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
    }
  }
  return res;
};
export { LRD, LRD2, LRDRecursive };
