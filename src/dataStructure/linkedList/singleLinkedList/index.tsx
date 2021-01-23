/*
 * @Author: 廉恒凯
 * @Date: 2021-01-17 21:03:02
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-01-23 15:37:44
 * @Description: file content
 */
/* eslint-disable no-param-reassign */
/* eslint-disable max-classes-per-file */
/**
 * 链表是数据元素的线性集合
 */

class LinkedListNode<T> {
  public next: LinkedListNode<T> | null = null;

  constructor(public data: T) {
    this.data = data;
  }
}

interface ILinkedList<T> {
  insertInBegin(data: T): LinkedListNode<T>;
  insertAtEnd(data: T): LinkedListNode<T>;
  // deleteNode(node: LinkedListNode<T>): void;
  deleteNodeByData(data: T): void;
  traverse(): T[];
  size(): number;
  search(data: T): LinkedListNode<T> | null;
}

class LinkedList<T> implements ILinkedList<T> {
  private head: LinkedListNode<T> | null = null;

  public insertInBegin(data: T): LinkedListNode<T> {
    const node = new LinkedListNode(data);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    return node;
  }

  public insertAtEnd(data: T): LinkedListNode<T> {
    const node = new LinkedListNode(data);
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
  }

  public deleteNodeByData(data: T): void {
    if (!this.head) return;
    const dummy = new LinkedListNode<unknown>(null) as LinkedListNode<T>;
    let pre: LinkedListNode<T> = dummy;
    let cur: LinkedListNode<T> | null = this.head;
    dummy.next = this.head;
    while (cur !== null && cur.data !== data) {
      pre = cur;
      cur = cur.next;
    }
    if (cur != null) pre.next = cur.next;
    this.head = dummy.next;
  }

  public traverse(): T[] {
    const array: T[] = [];
    if (!this.head) {
      return array;
    }

    const addToArray = (node: LinkedListNode<T>): T[] => {
      array.push(node.data);
      return node.next ? addToArray(node.next) : array;
    };
    return addToArray(this.head);
  }

  public size(): number {
    return this.traverse().length;
  }

  public search(data: T): LinkedListNode<T> | null {
    const checkNext = (node: LinkedListNode<T>): LinkedListNode<T> | null => {
      if (node.data === data) {
        return node;
      }
      return node.next ? checkNext(node.next) : null;
    };

    return this.head ? checkNext(this.head) : null;
  }
}

export { LinkedList, LinkedListNode };
