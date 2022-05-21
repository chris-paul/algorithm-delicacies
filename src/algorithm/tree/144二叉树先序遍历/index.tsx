import Node from '@dataStructure/tree/treeNode';

type TreeNode = Node<number> | undefined;

/**
 * 使用递归实现遍历 时间复杂度 O(n) 空间复杂度O(n)
 * @param root
 * @returns
 */
function preorderTraversal(root: TreeNode): number[] {
  const result: number[] = [];
  const loop = (node: TreeNode) => {
    if (node) {
      result.push(node.val);
      if (node.left) loop(node.left);
      if (node.right) loop(node.right);
    }
  };
  loop(root);
  return result;
}

/**
 * 非递归实现先序遍历 时间复杂度O(n) 空间复杂度O(n)
 * @param root
 * @returns
 */
function preorderTraversal2(root: TreeNode): number[] {
  const result = [];
  const stack = [root];
  while (stack.length) {
    const peek = stack.pop();
    if (peek) {
      result.push(peek.val);
      if (peek.right) stack.push(peek.right);
      if (peek.left) stack.push(peek.left);
    }
  }
  return result;
}

export { preorderTraversal2, preorderTraversal };
