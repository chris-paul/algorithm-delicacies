/* eslint-disable no-unused-expressions */
/*
 * @Author: 廉恒凯
 * @Date: 2021-03-11 21:32:50
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-04-05 20:56:15
 * @Description: file content
 */
import { isDefined } from '@utils/index';
import TreeNode from '../../treeNode';

/**
 * 左根右 递归实现二叉树的中序遍历
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 * @param node
 * @param result
 * @returns
 */
const LDRRecursive = <T,>(node: TreeNode<T>, result: T[]): T[] => {
  if (node) {
    node.left && LDRRecursive(node.left, result);
    result.push(node.val);
    node.right && LDRRecursive(node.right, result);
  }
  return result;
};

const LDR2 = <T,>(node: TreeNode<T>): T[] => {
  const stack: TreeNode<T>[] = [];
  const result: T[] = [];
  let point: TreeNode<T> | null = node;
  while (stack.length || point) {
    // 先把左节点依次入栈
    while (point) {
      stack.push(point);
      point = point.left;
    }
    const current = stack.pop();
    current && result.push(current.val);
    const value = current?.right;
    point = isDefined(value) ? value : null;
  }
  return result;
};

const LDR = <T,>(node: TreeNode<T>): T[] => {
  const stack: TreeNode<T>[] = [];
  const result: T[] = [];
  let point: TreeNode<T> | null = node;
  while (stack.length || point) {
    // 先把左节点依次入栈
    if (point) {
      stack.push(point);
      point = point.left;
    } else {
      const current = stack.pop();
      current && result.push(current.val);
      const value = current?.right;
      point = isDefined(value) ? value : null;
    }
  }
  return result;
};
export { LDR, LDR2, LDRRecursive };
