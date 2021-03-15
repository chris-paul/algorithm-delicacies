/*
 * @Author: 廉恒凯
 * @Date: 2021-03-14 10:18:38
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-15 21:39:30
 * @Description: file content
 */

import TreeNode from '@dataStructure/tree/treeNode';
import maxDepth from './index';

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
describe('maxDepth', () => {
  const tree: TreeNode<number> = create();
  test('maxDepth', () => {
    expect(maxDepth(tree)).toEqual(4);
    expect(maxDepth(undefined)).toEqual(0);
    const root = new TreeNode(1);
    expect(maxDepth(root)).toEqual(1);
  });
});
