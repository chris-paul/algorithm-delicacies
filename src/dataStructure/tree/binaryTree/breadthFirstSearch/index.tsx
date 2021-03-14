/* eslint-disable no-unused-expressions */
/*
 * @Author: 廉恒凯
 * @Date: 2021-03-14 20:42:34
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-14 21:27:33
 * @Description: file content
 */

import TreeNode from '../../treeNode';

/**
 * 广度优先搜索 shift对性能不好 所以换成point指针
 * @param node
 * @returns
 */
const BFS = <T,>(node: TreeNode<T>): T[] => {
  const result = [];
  const queue = [node];
  while (queue.length) {
    const current = queue.shift();
    if (current) {
      result.push(current.val);
      current.left && queue.push(current.left);
      current.right && queue.push(current.right);
    }
  }
  return result;
};

/**
 * 广度优先搜索 shift对性能不好 所以换成point指针
 * @param node
 * @returns
 */
const BFS2 = <T,>(node: TreeNode<T>): T[] => {
  const result = [];
  const queue = [node];
  let pointer = 0;
  while (pointer < queue.length) {
    const current = queue[pointer];
    pointer += 1;
    if (current) {
      result.push(current.val);
      current.left && queue.push(current.left);
      current.right && queue.push(current.right);
    }
  }
  return result;
};

/**
 * 广度优先搜索递归
 * @param nodeList 要递归的栈
 * @param result 结果
 * @param pointer 当前指针
 * @returns
 */
const BFSRecursive = <T,>(
  nodeList: TreeNode<T> | TreeNode<T>[],
  result: T[],
  pointer = 0
): T[] => {
  const stack: TreeNode<T>[] = Array.isArray(nodeList) ? nodeList : [nodeList];
  let currentPointer = pointer;
  const current = stack[pointer];
  if (current) {
    result.push(current.val);
    current.left && stack.push(current.left);
    current.right && stack.push(current.right);
    currentPointer += 1;
    BFSRecursive(stack, result, currentPointer);
  }
  return result;
};
export { BFS, BFSRecursive, BFS2 };
