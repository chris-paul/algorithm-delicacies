/*
 * @Author: 廉恒凯
 * @Date: 2021-01-23 16:56:59
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-01-23 17:53:03
 * @Description: file content
 */
import { LinkedListNode } from '@dataStructure/linkedList/singleLinkedList/index';

type ListNode = LinkedListNode<number>;
/**
 * 时间负责度 O(n)
 * 空间复杂度 O(n)
 * @param l1
 * @param l2
 */
const twoSum = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  const node = new LinkedListNode(0);
  let carry = 0;
  let p1 = l1;
  let p2 = l2;
  let p3 = node;
  while (p1 || p2) {
    const v1 = p1 ? p1.val : 0;
    const v2 = p2 ? p2.val : 0;
    const count = v1 + v2 + carry;
    carry = Math.floor(count / 10);
    p3.next = new LinkedListNode(count % 10);
    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
    p3 = p3.next;
  }
  // 如果l1和l2位数相同,并且最后一位大于10
  if (carry) {
    p3.next = new LinkedListNode(carry);
  }
  return node.next;
};

export default twoSum;
