/*
 * @Author: 廉恒凯
 * @Date: 2021-01-23 17:55:05
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-01-23 18:17:18
 * @Description: file content
 */
/**
 * 时间复杂度 O(n)
 * 空间复杂度(O(1))
 * 有序链表 所以相同的元素一定相邻
 * @param {*} head
 */
import { LinkedListNode } from '@dataStructure/linkedList/singleLinkedList/index';

type ListNode = LinkedListNode<number>;

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let p1 = head;
  while (p1 && p1.next) {
    if (p1.val === p1.next.val) {
      p1.next = p1.next.next;
    } else {
      p1 = p1.next;
    }
  }
  return head;
}

export default deleteDuplicates;
