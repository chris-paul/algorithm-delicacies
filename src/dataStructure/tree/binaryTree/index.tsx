/*
 * @Author: 廉恒凯
 * @Date: 2021-03-11 21:03:40
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-11 21:16:10
 * @Description: file content
 */
/**
 * 二叉搜索树的实现
 */
import TreeNode from '../treeNode';

export default class BinaryTree<T> {
  protected root: TreeNode<T>;

  constructor(val: T) {
    this.root = new TreeNode(val);
  }

  insterLeftChildNode(key: T): TreeNode<T> {
    this.root.left = new TreeNode(key);
    return this.root.left;
  }

  insterRightChildNode(key: T): TreeNode<T> {
    this.root.right = new TreeNode(key);
    return this.root.right;
  }
}
