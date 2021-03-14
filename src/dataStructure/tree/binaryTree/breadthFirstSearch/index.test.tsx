/*
 * @Author: 廉恒凯
 * @Date: 2021-03-14 10:18:38
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-14 21:28:58
 * @Description: file content
 */

import { BFS, BFSRecursive, BFS2 } from './index';
import TreeNode from '../../treeNode';

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
describe('BreathFirst Search', () => {
  const tree: TreeNode<number> = create();
  test('BreathFirst Search', () => {
    expect(BFSRecursive(tree, [])).toEqual([1, 2, 3, 4, 5, 6, 8, 7]);
    expect(BFS(tree)).toEqual([1, 2, 3, 4, 5, 6, 8, 7]);
    expect(BFS2(tree)).toEqual([1, 2, 3, 4, 5, 6, 8, 7]);
  });
});
