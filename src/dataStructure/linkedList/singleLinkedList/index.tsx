/*
 * @Author: 廉恒凯
 * @Date: 2021-01-17 21:03:02
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-04-05 16:13:02
 * @Description: file content
 */
/* eslint-disable no-param-reassign */
/* eslint-disable max-classes-per-file */
/**
 * 链表是数据元素的线性集合
 */

class LinkedListNode<T> {
  public next: LinkedListNode<T> | null = null;

  constructor(public val: T) {
    this.val = val;
  }
}

interface ILinkedList<T> {
  insertInBegin(val: T): LinkedListNode<T>;
  insertAtEnd(val: T): LinkedListNode<T>;
  // deleteNode(node: LinkedListNode<T>): void;
  deleteNodeByVal(val: T): void;
  traverse(): T[];
  size(): number;
  search(val: T): LinkedListNode<T> | null;
  getHead(): LinkedListNode<T> | null;
  isEmpty(): boolean;
}

class LinkedList<T> implements ILinkedList<T> {
  private head: LinkedListNode<T> | null = null;

  /**
   * 链表头部插入元素
   * @param val
   * @returns
   */
  insertInBegin = (val: T): LinkedListNode<T> => {
    const node = new LinkedListNode(val);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    return node;
  };

  /**
   * 链表尾部插入元素
   * @param val
   * @returns
   */
  insertAtEnd = (val: T): LinkedListNode<T> => {
    const node = new LinkedListNode(val);
    if (!this.head) {
      this.head = node;
    } else {
      const getLast = (headNode: LinkedListNode<T>): LinkedListNode<T> => {
        return headNode.next ? getLast(headNode.next) : headNode;
      };
      const lastNode = getLast(this.head);
      lastNode.next = node;
    }
    return node;
  };

  /**
   * 根据某一个值 删除某一个节点
   * @param val
   * @returns
   */
  deleteNodeByVal = (val: T): void => {
    if (!this.head) return;
    const dummy = new LinkedListNode<unknown>(null) as LinkedListNode<T>;
    let pre: LinkedListNode<T> = dummy;
    let cur: LinkedListNode<T> | null = this.head;
    dummy.next = this.head;
    while (cur !== null && cur.val !== val) {
      pre = cur;
      cur = cur.next;
    }
    if (cur != null) pre.next = cur.next;
    this.head = dummy.next;
  };

  /**
   * 获取链表中所有的元素
   * @returns
   */
  traverse = (): T[] => {
    const array: T[] = [];
    if (!this.head) {
      return array;
    }

    const addToArray = (node: LinkedListNode<T>): T[] => {
      array.push(node.val);
      return node.next ? addToArray(node.next) : array;
    };
    return addToArray(this.head);
  };

  size = (): number => {
    return this.traverse().length;
  };

  isEmpty = (): boolean => {
    return this.traverse().length === 0;
  };

  /**
   * 搜索链表中是否存在该值
   * @param val
   * @returns
   */
  search = (val: T): LinkedListNode<T> | null => {
    const checkNext = (node: LinkedListNode<T>): LinkedListNode<T> | null => {
      if (node.val === val) {
        return node;
      }
      return node.next ? checkNext(node.next) : null;
    };

    return this.head ? checkNext(this.head) : null;
  };

  /**
   * 获取链表的头部节点
   * @returns
   */
  getHead = (): LinkedListNode<T> | null => {
    return this.head;
  };
}

export { LinkedList, LinkedListNode };
