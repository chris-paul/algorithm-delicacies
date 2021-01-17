import { threadId } from 'worker_threads';

class Stack<T> {
  private data: T[] = [];

  push = (item: T): number => this.data.push(item);

  pop = (): T | undefined => this.data.pop();

  peek = (): T | undefined => this.data[this.size() - 1];

  size = (): number => this.data.length;

  empty = (): boolean => this.data.length === 0;
}

export default Stack;
