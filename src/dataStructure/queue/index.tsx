class Queue<T> {
  private data: T[] = [];

  push = (item: T): number => this.data.push(item);

  shift = (): T | undefined => this.data.shift();

  peek = (): T | undefined => this.data[0];

  size = (): number => this.data.length;

  empty = (): boolean => this.data.length === 0;
}

export default Queue;
