import Node from '@dataStructure/tree/treeNode';

type TreeNode = Node<number> | null;

export const invertTreeRecurrence = (root: TreeNode): TreeNode => {
  if (!root) {
    return null;
  }
  const node = root;
  const tmp = node.left;
  node.left = node.right;
  node.right = tmp;
  invertTreeRecurrence(node.left);
  invertTreeRecurrence(node.right);
  return root;
};

export const invertTree = (root: TreeNode): TreeNode => {
  const queue = [root];
  while (queue.length) {
    const current = queue.shift();
    if (current && (current.left || current.right)) {
      const temp = current.left;
      current.left = current.right;
      current.right = temp;
    }
    if (current && current.left) {
      queue.push(current.left);
    }
    if (current && current.right) {
      queue.push(current.right);
    }
  }
  return root;
};
