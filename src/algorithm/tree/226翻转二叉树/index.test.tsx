/*
 * @Author: 廉恒凯
 * @Date: 2021-03-14 10:18:38
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-15 21:39:30
 * @Description: file content
 */

import TreeNode from '@dataStructure/tree/treeNode';
import { BFS } from '@dataStructure/tree/binaryTree/breadthFirstSearch/index';
import { invertTree, invertTreeRecurrence } from './index';

/**
 *        1
 *      /  \
 *    2     3
 *  /  \   / \
 * 4   5  6  8
 *       /
 *      7
 */
const create = () => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(8);
  root.right.left.left = new TreeNode(7);
  return root;
};
describe('invertTree', () => {
  const tree: TreeNode<number> = create();
  const singleTree = new TreeNode(1);
  test('invertTree', () => {
    const invertRes = invertTree(tree) as TreeNode<number>;
    expect(null).toBe(null);
    expect(BFS(invertRes)).toEqual([1, 3, 2, 8, 6, 5, 4, 7]);
  });

  test('invertTree empty node', () => {
    expect(null).toBe(null);
  });

  test('invertTree single node', () => {
    const invertRes = invertTree(singleTree) as TreeNode<number>;
    expect(BFS(invertRes)).toEqual([1]);
  });
});

describe('invertTreeRecurrence', () => {
  const tree: TreeNode<number> = create();
  const singleTree = new TreeNode(1);
  test('invertTreeRecurrence', () => {
    const invertRes = invertTreeRecurrence(tree) as TreeNode<number>;
    expect(null).toBe(null);
    expect(BFS(invertRes)).toEqual([1, 3, 2, 8, 6, 5, 4, 7]);
  });

  test('invertTree empty node', () => {
    expect(null).toBe(null);
  });

  test('invertTree single node', () => {
    const invertRes = invertTreeRecurrence(singleTree) as TreeNode<number>;
    expect(BFS(invertRes)).toEqual([1]);
  });
});
