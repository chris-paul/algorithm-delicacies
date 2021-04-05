/*
 * @Author: 廉恒凯
 * @Date: 2021-01-10 21:20:14
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-04-05 17:19:56
 * @Description: file content
 */
import { isDefined } from '@utils/index';

interface IStack<T> {
  push(value: T): number; // 入栈
  pop(): T | null; // 出栈
  peek(): T | null; // 返回栈首元素
  clear(): void; // 清空栈
  size(): number; // 栈长度
  empty(): boolean; // 栈是否为空
  toString(): string; // 返回栈元素的组成的字符串
}

class Stack<T> implements IStack<T> {
  private data: T[] = [];

  push = (item: T): number => this.data.push(item);

  pop = (): T | null => {
    const value = this.data.pop();
    return !isDefined(value) ? null : value;
  };

  peek = (): T | null => this.data[this.size() - 1];

  size = (): number => this.data.length;

  empty = (): boolean => this.data.length === 0;

  clear = (): void => {
    this.data = [];
  };

  toString = (): string => this.data.toString();
}

export default Stack;
