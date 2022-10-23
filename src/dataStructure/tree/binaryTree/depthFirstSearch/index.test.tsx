/*
 * @Author: 廉恒凯
 * @Date: 2021-03-14 10:18:38
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-14 20:40:54
 * @Description: file content
 */

import { DLR, DLRRecursive } from './degreeLeftRight';
import { LDR, LDR2, LDRRecursive } from './leftDegreeRight';
import { LRDRecursive, LRD, LRD2 } from './leftRightDegree';
import TreeNode from '../../treeNode';
// DLR

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
describe(' DepthFirst Search', () => {
  let tree: TreeNode<number>;
  beforeAll(() => {
    tree = create();
  });
  test('depthLeftRight traversal', () => {
    expect(DLRRecursive(tree, [])).toEqual([1, 2, 4, 5, 3, 6, 7, 8]);
    expect(DLR(tree)).toEqual([1, 2, 4, 5, 3, 6, 7, 8]);
  });
  test('leftDegreeRight traversal', () => {
    expect(LDRRecursive(tree, [])).toEqual([4, 2, 5, 1, 7, 6, 3, 8]);
    expect(LDR2(tree)).toEqual([4, 2, 5, 1, 7, 6, 3, 8]);
    expect(LDR(tree)).toEqual([4, 2, 5, 1, 7, 6, 3, 8]);
  });

  test('leftRightDegree traversal', () => {
    expect(LRDRecursive(tree, [])).toEqual([4, 5, 2, 7, 6, 8, 3, 1]);
    expect(LRD(tree)).toEqual([4, 5, 2, 7, 6, 8, 3, 1]);
    expect(LRD2(tree)).toEqual([4, 5, 2, 7, 6, 8, 3, 1]);
  });
});
