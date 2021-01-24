/*
 * @Author: 廉恒凯
 * @Date: 2021-01-24 11:47:47
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-01-24 14:41:34
 * @Description: file content
 */
import { LinkedListNode } from '@dataStructure/linkedList/singleLinkedList/index';

type ListNode = LinkedListNode<number>;

/**
 * 获取最中间的节点
 * @param head
 */
const getMidNode = (head: ListNode | null): ListNode | null => {
  let slow = head;
  let fast = head;
  while (fast && fast.next && slow) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

/**
 * 翻转链表
 * @param head
 */
const iterationReverseList = (head: ListNode | null): ListNode | null => {
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
 * head的长度一定大于reverseNode的长度 并且是它的两倍
 * @param reverseNode
 * @param head
 */
const isContainer = (
  reverseNode: ListNode | null,
  head: ListNode | null
): boolean => {
  let p1 = reverseNode;
  let p2 = head;
  while (p1 && p2) {
    if (p2.val !== p1.val) return false;
    p2 = p2.next;
    p1 = p1.next;
  }
  return true;
};

function isPalindrome(head: ListNode | null): boolean {
  if (!head) return true;
  const midNode = getMidNode(head);
  const reverseNode = iterationReverseList(midNode);
  return isContainer(head, reverseNode);
}

export default isPalindrome;
