/*
 * @Author: 廉恒凯
 * @Date: 2021-01-10 21:20:14
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-01-27 20:56:53
 * @Description: file content
 */
class Stack<T> {
  private data: T[] = [];

  push = (item: T): number => this.data.push(item);

  pop = (): T | undefined => this.data.pop();

  peek = (): T | undefined => this.data[this.size() - 1];

  size = (): number => this.data.length;

  empty = (): boolean => this.data.length === 0;

  clear = (): void => {
    this.data = [];
  };

  toString = (): string => this.data.toString();
}

export default Stack;
