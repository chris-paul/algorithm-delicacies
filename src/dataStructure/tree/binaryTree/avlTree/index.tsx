/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
/*
 * @Author: 廉恒凯
 * @Date: 2021-03-20 22:54:51
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-21 21:07:40
 * @Description: file content
 */

import BinarySearchTree from '../binarySearchTree';
import TreeNode from '../../treeNode';

// 平衡因子的值
enum BalanceFactor {
  UNBALANCED_RIGHT = 1,
  SLIGHTLY_UNBALANCED_RIGHT = 2,
  BALANCED = 3,
  SLIGHTLY_UNBALANCED_LEFT = 4,
  UNBALANCED_LEFT = 5,
}

const defaultCompare = <T,>(a: T, b: T): number => {
  if (a === b) {
    return 0;
  }
  if (a > b) {
    return 1;
  }
  return -1;
};

export default class AVLTree<T> extends BinarySearchTree<T> {
  // 计算节点高度
  private getNodeHeight(node: TreeNode<T> | null): number {
    if (node === null) {
      return -1;
    }
    return (
      Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
      1
    );
  }

  private getBalanceFactor(node: TreeNode<T> | null) {
    // 计算差值
    if (!node) return 0;
    const heightDifference =
      this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    switch (heightDifference) {
      // 右子树不平衡
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        // 左子树不平衡
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  }

  // 向树AVL树中插入节点
  insert(val: T): void {
    this.root = this.insertNode(this.root, val);
  }

  /**
   * 插入节点f导致失衡, 以a为轴进行右旋转,传入的参数是b节点(也就是一棵树最近的失去平衡的节点)
   * 左左情况: 向右的单旋转
   *
   *       b                            a
   *      / \                          / \
   *     a   e -> rotationLL(b) ->    c   b
   *    / \                          /   / \
   *   c   d                        f   d   e
   *  /
   * f
   * @param node
   */
  private rotationLL(node: TreeNode<T>) {
    const tmp = node.left;
    if (tmp) {
      node.left = tmp.right;
      tmp.right = node;
    }
    return tmp;
  }

  /**
   * 右右情况: 插入节点f导致失衡, 以b为轴进行右旋转,传入的参数是a节点(也就是一棵树最近的失去平衡的节点)
   *
   *      a                            b
   *     / \                          / \
   *    c   b -> rotationRR(a) ->    a   e
   *       / \                      / \  \
   *      d   e                    c   d  f
   *           \
   *           f
   * @param node
   */
  private rotationRR(node: TreeNode<T>) {
    // 将节点X置于节点Y
    const tmp = node.right;
    if (tmp) {
      node.right = tmp.left;
      tmp.left = node;
    }
    return tmp;
  }

  /**
   * 插入节点f导致失衡, 以d为轴进行右旋转,传入的参数是b节点(也就是一棵树最近的失去平衡的节点)
   * 左右情况: 先右侧旋转再左侧旋转,先以d为轴进行右旋转,但是传入RR的参数必须是a节点,然后再进行以d为轴进行左旋转,
   * 传入的二叉树的节点是b
   *
   *       b                            b                           d
   *      / \                          / \                         /  \
   *     a   e -> rotationRR(a) ->    d   e -> rotationLL(b) ->   a    b
   *    / \                          / \                         / \  / \
   *   c   d                        a   f                       c    f   e
   *       \                       /
   *        f                     c
   * @param node
   */
  private rotationLR(node: TreeNode<T>) {
    if (node.left) {
      node.left = this.rotationRR(node.left);
    }
    return this.rotationLL(node);
  }

  private rotationRL(node: TreeNode<T>) {
    if (node.right) {
      node.left = this.rotationLL(node.right);
    }
    return this.rotationRR(node);
  }

  protected insertNode(node: TreeNode<T> | null, val: T): TreeNode<T> | null {
    if (node === null) {
      return new TreeNode(val);
    }
    if (defaultCompare(val, node.val) < 0) {
      node.left = this.insertNode(node.left, val);
    } else if (defaultCompare(val, node.val) > 0) {
      node.right = this.insertNode(node.right, val);
    } else {
      return node; // 重复的键
    }
    return this.balanceNode(node, val);
  }

  private balanceNode(node: TreeNode<T> | null, val: T): null | TreeNode<T> {
    // 开始计算是否平衡
    if (!node) return null;

    // 计算平衡因子
    const balanceState = this.getBalanceFactor(node);
    // 如果向左侧添加节点导致了失衡
    if (balanceState === BalanceFactor.UNBALANCED_LEFT) {
      // 判断插入的键是否小于左侧子节点的键
      if (defaultCompare(val, node.val) < 0) {
        // 小于则进行LL旋转
        return this.rotationLL(node);
      }
      // 否则进行LR旋转
      return this.rotationLR(node);
    }
    // 右子树失平衡
    if (balanceState === BalanceFactor.UNBALANCED_RIGHT) {
      // 判断插入的键是否小于右侧子节点的键
      if (defaultCompare(val, node.val) < 0) {
        // 小于则进行RR旋转
        return this.rotationRR(node);
      }
      // 否则进行RL旋转
      return this.rotationRL(node);
    }
    // 更新节点
    return node;
  }

  // 删除节点 最好的方式是使用递归 一层层的返回树的节点去判断是否需要旋转
  protected removeNode(node: TreeNode<T> | null, val: T): null | TreeNode<T> {
    if (node === null) {
      return null;
    }
    // let returnNode;
    // 不为null,需要在树中找到要移除的键
    if (defaultCompare(val, node.val) < 0) {
      // 目标val小于当前节点的值则沿着树的左边找
      node.left = this.removeNode(node.left, val);
      //   return node;
    } else if (defaultCompare(val, node.val) > 0) {
      // 目标val大于当前节点的值则沿着树的右边找
      node.right = this.removeNode(node.right, val);
      //   return node;
    }
    // 键等于val,需要处理三种情况
    else if (node.left == null && node.right == null) {
      // 移除一个叶节点,即该节点没有左、右子节点
      // 将节点指向null来移除它
      node = null;
      //   return node;
    } else if (node.left == null) {
      // 移除一个左侧子节点的节点
      // node有一个右侧子节点，因此需要把对它的引用改为对它右侧子节点的引用
      node = node.right;
      // 返回更新后的节点
      //   return node;
    } else if (node.right == null) {
      // 移除一个右侧子节点的节点
      // node有一个左侧子节点，因此需要把对它的引用改为对它左侧子节点的引用
      node = node.left;
      // 返回更新后的节点
      //   return node;
    } else {
      /* 如果想要删除节点12,只需要找到12节点的右子树最小的节点
       *        10
       *       /  \
       *      7    12
       *     /\    /\
       *    6  9  11 15
       *             / \
       *            14 16
       */
      const aux = super.minNode(node.right) as TreeNode<T>; // 当找到了要移除的节点后,需要找到它右边子树最小的节点,即它的继承者
      node.val = aux.val;
      node.right = this.removeNode(node.right, aux.val); // 移除右侧子树中的最小节点
    }
    // return node;
    return this.balanceNode(node, val);
  }

  // 删除节点函数
  remove(val: T): void {
    this.root = this.removeNode(this.root, val);
  }
}
