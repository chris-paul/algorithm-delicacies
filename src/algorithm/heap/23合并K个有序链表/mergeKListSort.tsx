/*
 * @Author: 廉恒凯
 * @Date: 2021-03-28 11:49:02
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-28 13:20:46
 * @Description: file content
 */
import { LinkedListNode } from '@dataStructure/linkedList/singleLinkedList/index';
/**
 * 合并K个有序链表,先把所有的元素放到数组然后排序然后形成新的链表返回
 * 时间复杂度 O(NlogN) 主要在排序
 * @param lists
 */
const defaultCompare = <T,>(a: T, b: T): number => {
  if (a === b) {
    return 0;
  }
  if (a > b) {
    return 1;
  }
  return -1;
};

const mergeKListSort = <T,>(
  lists: LinkedListNode<T>[]
): LinkedListNode<T> | null => {
  if (!lists || lists.length === 0) return null;
  const arr: T[] = [];
  lists.forEach((item: LinkedListNode<T> | null) => {
    let cur = item;
    while (cur) {
      arr.push(cur.val);
      cur = cur.next;
    }
  });
  let cur = new LinkedListNode<T>((0 as unknown) as T);
  arr
    .sort((a, b) => defaultCompare(a, b))
    .forEach((val) => {
      const node = new LinkedListNode<T>(val);
      cur.next = node;
      cur = cur.next;
    });
  return cur.next;
};

export default mergeKListSort;
