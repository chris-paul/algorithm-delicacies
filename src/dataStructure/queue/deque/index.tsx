/*
 * @Author: 廉恒凯
 * @Date: 2021-01-17 10:28:32
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-04-05 17:24:57
 * @Description: file content
 */
import { isDefined } from '@utils/index';

interface IDeque<T> {
  addFront(value: T): number; // 在双端队列前端添加元素
  addBack(value: T): number; // 在双端队列尾端添加元素
  removeFront(): T | null; // 在队列前端删除元素
  removeBack(): T | null; // 在队列尾端删除元素
  peekFront(): T | null; // 获取队列前端第一个元素
  peekBack(): T | null; // 获取队列尾端第一个元素
  size(): number; // 队列长度
  clear(): void; // 清空队列
  toString(): string; // 返回队列元素的组成的字符串
}

class Deque<T> implements IDeque<T> {
  private data: T[] = [];

  addFront = (item: T): number => this.data.unshift(item);

  addBack = (item: T): number => this.data.push(item);

  removeFront = (): T | null => {
    const value = this.data.shift();
    return !isDefined(value) ? null : value;
  };

  removeBack = (): T | null => {
    const value = this.data.pop();
    return !isDefined(value) ? null : value;
  };

  peekFront = (): T | null => this.data[0];

  peekBack = (): T | null => this.data[this.size() - 1];

  size = (): number => this.data.length;

  empty = (): boolean => this.data.length === 0;

  clear = (): void => {
    this.data = [];
  };

  toString = (): string => this.data.toString();
}

export default Deque;
