/* eslint-disable no-param-reassign */
import { LinkedListNode } from '@dataStructure/linkedList/singleLinkedList/index';

type ListNode = LinkedListNode<number>;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const deleteNode = (node: ListNode) => {
  node.val = (node.next as ListNode).val;
  node.next = (node.next as ListNode).next;
};

export default deleteNode;
