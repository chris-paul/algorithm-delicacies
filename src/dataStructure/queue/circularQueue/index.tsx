/*
 * @Author: 廉恒凯
 * @Date: 2021-01-31 21:08:23
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-04-05 17:29:14
 * @Description: file content
 */
import { isDefined } from '@utils/index';

interface ICircularQueue<T> {
  peekFront(): T | null; // 获取循环队列队队首元素
  enQueue(value: T): boolean; // 在双端队列尾端添加元素
  deQueue(): T | null; // 从循环队列中删除一个元素。如果成功删除则返回真。
  isFull(): boolean; // 检查循环队列是否已满
  empty(): boolean; // 检查循环队列是否为空。
  size(): number; // 检查循环队列元素的数量。
  peekBack(): T | null; // 在队列前端删除元素
  toString(): string; // 返回队列元素的组成的字符串
}

class CircularQueue<T> implements ICircularQueue<T> {
  // 循环队列中的数据
  private data: T[];

  // 初始化循环队列的长度
  private len: number;

  // 循环队列的头部
  private head: number;

  // 循环队列的尾部
  private tail: number;

  private count: number;

  constructor(k: number) {
    this.data = [];
    // 数组长度多出一位 用来放置尾指针
    this.len = k;
    this.head = 0;
    this.tail = 0;
    this.count = 0;
  }

  peekFront = (): T | null => this.data[this.head];

  peekBack = (): T | null => this.data[(this.tail - 1 + this.len) % this.len];

  enQueue = (value: T): boolean => {
    if (this.isFull()) return false;
    this.data[this.tail] = value;
    this.tail = (this.tail + 1) % this.len;
    this.count += 1;
    return true;
  };

  deQueue = (): T | null => {
    const value = this.data[this.head];
    this.head = (this.head + 1) % this.len;
    this.count = this.empty() ? 0 : this.count - 1;
    return !isDefined(value) ? null : value;
  };

  empty(): boolean {
    return this.head === this.tail && this.peekFront() === undefined;
  }

  size(): number {
    return this.count;
  }

  // 下一个指针指向头部说明满了
  isFull(): boolean {
    return this.head === this.tail && !!this.peekFront();
  }
}

export default CircularQueue;
