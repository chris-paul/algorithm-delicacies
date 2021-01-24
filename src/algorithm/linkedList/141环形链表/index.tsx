/*
 * @Author: 廉恒凯
 * @Date: 2021-01-24 10:46:36
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-01-24 11:32:37
 * @Description: file content
 */

import { LinkedListNode } from '@dataStructure/linkedList/singleLinkedList/index';

type ListNode = LinkedListNode<number>;
/**
 * 使用hash 如果一个链表的节点被遍历了2次 那么就存在环
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 * @param head
 */
const hashHasCycle = (head: ListNode | null): boolean => {
  const map = new Map();
  let node = head;
  while (node) {
    if (map.has(node)) {
      return true;
    }
    map.set(node, node);
    node = node.next;
  }
  return false;
};

/**
 * 使用快慢指针 fast指针每次前进2个节点 slow指针每次前进一个
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * @param head
 */
function slowFastHasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
export { hashHasCycle, slowFastHasCycle };
