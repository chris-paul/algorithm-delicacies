/*
 * @Author: 廉恒凯
 * @Date: 2021-01-23 11:26:34
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-01-23 15:36:03
 * @Description: file content
 */
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 *
 */

import { LinkedListNode } from '@dataStructure/linkedList/singleLinkedList/index';
/**
 * 迭代法 时间复杂度O(n) 空间复杂度O(1)
 * @param head
 */
const iterationReverseList = (
  head: LinkedListNode<number> | null
): LinkedListNode<number> | null => {
  let cur = head;
  let pre = null;
  while (cur !== null) {
    const temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
};

/**
 * 递归 时间复杂度O(n) 空间复杂度O(n)
 * @param head
 */
const recursiveReverseList = (
  head: LinkedListNode<number> | null
): LinkedListNode<number> | null => {
  const cur = head;
  if (cur === null || cur.next === null) return cur;
  const newHeadNode = recursiveReverseList(cur.next);
  if (newHeadNode && cur) {
    newHeadNode.next = cur;
    cur.next = null;
  }
  return cur;
};

export { iterationReverseList, recursiveReverseList };
