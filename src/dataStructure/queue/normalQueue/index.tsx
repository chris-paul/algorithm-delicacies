/*
 * @Author: 廉恒凯
 * @Date: 2021-01-17 10:28:32
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-01-31 12:13:26
 * @Description: file content
 */
interface INormalQueue<T> {
  enqueue(value: T): number; // 入队
  dequeue(): T | undefined; // 出队列
  peek(): T | undefined; // 返回队首元素
  clear(): void; // 清空队列
  size(): number; // 队列长度
  empty(): boolean; // 队列是否为空
  toString(): string; // 返回队列元素的组成的字符串
}

class Queue<T> implements INormalQueue<T> {
  private data: T[] = [];

  enqueue = (item: T): number => this.data.push(item);

  dequeue = (): T | undefined => this.data.shift();

  peek = (): T | undefined => this.data[0];

  size = (): number => this.data.length;

  empty = (): boolean => this.data.length === 0;

  clear = (): void => {
    this.data = [];
  };

  toString = (): string => this.data.toString();
}

export default Queue;
