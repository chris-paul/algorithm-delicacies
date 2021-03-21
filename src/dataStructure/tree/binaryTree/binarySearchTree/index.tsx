/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/*
 * @Author: 廉恒凯
 * @Date: 2021-03-18 21:38:35
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-21 21:19:37
 * @Description: file content
 */
import TreeNode from '../../treeNode';

const defaultCompare = <T,>(a: T, b: T): number => {
  if (a === b) {
    return 0;
  }
  if (a > b) {
    return 1;
  }
  return -1;
};

export default class BinarySearchTree<T> {
  protected root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(val: T): void {
    if (this.root == null) {
      // 如果根节点不存在则直接新建一个节点
      this.root = new TreeNode(val);
    } else {
      // 在根节点中找合适的位置插入子节点
      this.insertNode(this.root, val);
    }
  }

  // 获取最小值
  min(): TreeNode<T> | null {
    return this.minNode(this.root);
  }

  // 树的最小节点
  protected minNode(node: TreeNode<T> | null): TreeNode<T> | null {
    let current = node;
    while (current !== null && current.left !== null) {
      current = current.left;
    }
    return current;
  }

  // 获取最大值
  max(): TreeNode<T> | null {
    return this.maxNode(this.root);
  }

  // 树的最大节点
  private maxNode(node: TreeNode<T> | null): TreeNode<T> | null {
    let current = node;
    while (current != null && current.right != null) {
      current = current.right;
    }
    return current;
  }

  protected insertNode(node: TreeNode<T>, val: T): void {
    const tempNode = node;
    // 如果添加的节点比根节点小,那么继续递归
    if (defaultCompare(tempNode.val, val) < 0) {
      // 如果当前节点的左子树为空
      if (tempNode.left === null) {
        tempNode.left = new TreeNode(val);
      } else {
        this.insertNode(tempNode.left, val);
      }
    } else if (tempNode.right === null) {
      tempNode.right = new TreeNode(val);
    } else {
      this.insertNode(tempNode.right, val);
    }
  }

  /**
   * 搜索二叉树的先序遍历
   * @returns
   */
  preOrderTraverse(): T[] {
    return this.preOrderTraverseNode(this.root, []);
  }

  protected preOrderTraverseNode(node: TreeNode<T> | null, result: T[]): T[] {
    if (node) {
      result.push(node.val);
      node.left && this.preOrderTraverseNode(node.left, result);
      node.right && this.preOrderTraverseNode(node.right, result);
    }
    return result;
  }

  /**
   * 搜索二叉树的后序遍历
   * @returns
   */
  inOrderTraverse(): T[] {
    return this.inOrderTraverseNode(this.root, []);
  }

  protected inOrderTraverseNode(node: TreeNode<T> | null, result: T[]): T[] {
    if (node) {
      node.left && this.inOrderTraverseNode(node.left, result);
      result.push(node.val);
      node.right && this.inOrderTraverseNode(node.right, result);
    }
    return result;
  }

  /**
   * 搜索二叉树的后序遍历
   * @returns
   */
  postOrderTraverse(): T[] {
    return this.postOrderTraverseNode(this.root, []);
  }

  protected postOrderTraverseNode(node: TreeNode<T> | null, result: T[]): T[] {
    if (node) {
      node.left && this.postOrderTraverseNode(node.left, result);
      node.right && this.postOrderTraverseNode(node.right, result);
      result.push(node.val);
    }
    return result;
  }

  search(val: T): null | TreeNode<T> {
    return this.searchNode(this.root, val);
  }

  private searchNode(node: TreeNode<T> | null, val: T): null | TreeNode<T> {
    if (node === null) {
      return null;
    }

    if (defaultCompare(val, node.val) < 0) {
      // 要查找的val在节点的左侧
      return this.searchNode(node.left, val);
    }
    if (defaultCompare(val, node.val) > 0) {
      // 要查找的val在节点的右侧
      return this.searchNode(node.right, val);
    }
    // 节点已找到
    return node;
  }

  // 删除节点函数
  remove(val: T): void {
    this.root = this.removeNode(this.root, val);
  }

  // eslint-disable-next-line class-methods-use-this
  protected removeNode(node: TreeNode<T> | null, val: T): null | TreeNode<T> {
    let parentNode: null | TreeNode<T> = null;
    let currentNode: null | TreeNode<T> = node;
    let tag: 'left' | 'right' | '' = '';
    while (currentNode) {
      // 要删除的节点是树的左侧
      if (defaultCompare(val, currentNode.val) < 0) {
        parentNode = currentNode;
        currentNode = currentNode.left;
        tag = 'left';
      } else if (defaultCompare(val, currentNode.val) > 0) {
        parentNode = currentNode;
        currentNode = currentNode.right;
        tag = 'right';
      } else {
        // 如果当前要删除的节点是子节点
        if (currentNode.left === null && currentNode.right === null) {
          // tag不为空 说明是删除子节点 否则为删除根节点
          if (tag && parentNode) {
            parentNode[tag] = null;
          } else {
            currentNode = null;
          }
          return currentNode;
        }

        // 如果要删除的节点的左子树不为空 但是右子树为空
        if (parentNode && currentNode.left == null) {
          parentNode.left = currentNode.left;
          return currentNode.left;
        }

        // 如果要删除的节点的右子树不为空 但是左子树为空
        if (parentNode && currentNode.right == null) {
          parentNode.right = currentNode.right;
          return currentNode.right;
        }
        // 说明删除的节点 同时存在左节点和右节点
        if (parentNode) {
          const aux = this.minNode(currentNode.right) as TreeNode<T>;
          currentNode.val = aux.val;
          currentNode.right = this.removeNode(currentNode.right, aux.val);
          return currentNode;
        }
      }
    }
    return null;
  }
}
