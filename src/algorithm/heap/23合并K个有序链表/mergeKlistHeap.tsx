/*
 * @Author: 廉恒凯
 * @Date: 2021-03-28 13:20:22
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-28 17:37:25
 * @Description: file content
 */
/**
 * 使用堆对链表的头节点进行排序
 * @param lists
 */

/* eslint-disable class-methods-use-this */
/*
 * @Author: 廉恒凯
 * @Date: 2021-03-24 20:20:15
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-24 21:08:10
 * @Description: file content
 */
import { LinkedListNode } from '@dataStructure/linkedList/singleLinkedList/index';

class MinHeap<T> {
  protected heap: LinkedListNode<T>[];

  constructor() {
    this.heap = [];
  }

  // 获取左子节点的位置
  protected getLeftIndex(index: number): number {
    return 2 * index + 1;
  }

  // 获取右子节点的位置
  protected getRightIndex(index: number): number {
    return 2 * index + 2;
  }

  // 获取父节点的位置
  protected getParentIndex(index: number): number | undefined {
    if (index === 0) {
      return undefined;
    }
    return Math.floor((index - 1) / 2);
  }

  protected swap(parentIndex: number, index: number): void {
    [this.heap[index], this.heap[parentIndex]] = [
      this.heap[parentIndex],
      this.heap[index],
    ];
  }

  protected siftUp(index: number): void {
    // 获取父节点的位置
    const parentIndex = this.getParentIndex(index);
    if (
      parentIndex !== undefined &&
      this.heap[parentIndex].val > this.heap[index].val
    ) {
      this.swap(parentIndex, index);
      this.siftUp(parentIndex);
    }
  }

  protected siftDown(index: number): void {
    // 获取父节点的位置
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getLeftIndex(index);
    if (
      leftIndex !== undefined &&
      this.heap[leftIndex].val < this.heap[index].val
    ) {
      this.swap(leftIndex, index);
      this.siftDown(leftIndex);
    }

    if (
      rightIndex !== undefined &&
      this.heap[rightIndex].val < this.heap[index].val
    ) {
      this.swap(rightIndex, index);
      this.siftDown(rightIndex);
    }
  }

  /**
   *先将元素放入堆中
   * 堆中的元素一直向前移动 直到父节点小于等于这个插入的值
   * 时间复杂度 O(lgn) n为节点的数目
   * @param value
   * @returns
   */
  insert(value: LinkedListNode<T>): boolean {
    if (value != null) {
      this.heap.push(value);
      this.siftUp(this.heap.length - 1);
      return true;
    }
    return false;
  }

  /**
   * 删除堆顶元素 先用数组尾部元素替换堆顶元素,然后将
   * 新的堆顶向下移动直到子节点大于等于这个元素
   * 时间复杂度 O(lgn) n为节点的数目
   * @param value
   */
  pop(): LinkedListNode<T> | undefined {
    if (this.heap.length === 0) return;
    const value = this.heap.pop();
    if (value) {
      this.heap[0] = value;
      this.siftDown(0);
    }
    // eslint-disable-next-line consistent-return
    return value;
  }

  size(): number {
    return this.heap.length;
  }
}
/**
 *
 * @param lists 时间复杂度都是Nlogk k是堆的大小 N是节点的总数
 * @returns
 */
const mergeKListSort = <T,>(
  lists: LinkedListNode<T>[]
): LinkedListNode<T> | null => {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];
  // 先将当前链表进入堆
  const heap = new MinHeap<T>();
  lists.forEach((item) => {
    if (item) heap.insert(item);
  });
  const res = new LinkedListNode<T>(0 as T);
  let p = res;
  while (heap.size()) {
    const n = heap.pop() as LinkedListNode<T>;
    p.next = n;
    p = p.next;
    if (n.next) heap.insert(n.next);
  }
  return res.next;
};

export default mergeKListSort;
