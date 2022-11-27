/*
 * @Author: 廉恒凯
 * @Date: 2021-03-28 11:49:02
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-28 17:18:48
 * @Description: file content
 */
// https://leetcode.cn/problems/merge-k-sorted-lists/solution/23-he-bing-kge-sheng-xu-lian-biao-by-che-0h21/
import { LinkedListNode } from '@dataStructure/linkedList/singleLinkedList/index';
/**
 *
 * 合并K个有序链表,先把所有的元素放到数组然后排序然后形成新的链表返回
 * 时间复杂度 O(NlogK) k为链表总数, N是mergeSortLinkList的时间复杂度(N就是p1和p2长度之和)
 * @param lists
 */

/**
 *  使用分而治之的算法进行求解
 * @param lists
 */
const mergeSortLinkList = <T,>(
  p1: LinkedListNode<T> | null,
  p2: LinkedListNode<T> | null
) => {
  // 合并2个有序链表
  const head = new LinkedListNode<T>((0 as unknown) as T);
  let node1: LinkedListNode<T> | null = p1;
  let node2: LinkedListNode<T> | null = p2;
  let preNode = head;
  while (node1 && node2) {
    if (node1.val < node2.val) {
      preNode.next = node1;
      node1 = node1.next;
    } else {
      preNode.next = node2;
      node2 = node2.next;
    }
    preNode = preNode.next;
  }
  if (node1) preNode.next = node1;
  if (node2) preNode.next = node2;
  return head.next;
};

const mergeKListSort = <T,>(
  lists: LinkedListNode<T>[]
): LinkedListNode<T> | null => {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];
  const middle = Math.floor(lists.length / 2);
  const left = lists.slice(0, middle);
  const right = lists.slice(middle);
  return mergeSortLinkList(mergeKListSort<T>(left), mergeKListSort<T>(right));
};

export default mergeKListSort;
