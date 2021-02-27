/*
 * @Author: 廉恒凯
 * @Date: 2021-01-24 14:56:19
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-02-27 14:15:31
 * @Description: file content
 */
interface ISet<T> {
  add(value: T): this;
  clear(): void;
  delete(value: T): boolean;
  has(value: T): boolean;
  union(otherSet: ISet<T>): ISet<T>;
}

export default class CustomerSet<T> implements ISet<T> {
  private items: Map<T, T>;

  constructor() {
    this.items = new Map();
  }

  has(element: T): boolean {
    return this.items.has(element);
  }

  add(element: T): this {
    if (!this.has(element)) {
      this.items.set(element, element);
    }
    return this;
  }

  delete(element: T): boolean {
    if (this.has(element)) {
      this.items.delete(element);
      return true;
    }
    return false;
  }

  clear(): void {
    this.items.clear();
  }

  size(): number {
    return this.items.size;
  }

  values(): Array<T> {
    return [...this.items.values()];
  }

  union(otherSet: CustomerSet<T>): CustomerSet<T> {
    // 声明并集变量
    const unionSet = new CustomerSet<T>();
    this.values().forEach((value) => unionSet.add(value));
    otherSet.values().forEach((value) => unionSet.add(value));
    return unionSet;
  }

  intersection(otherSet: CustomerSet<T>): CustomerSet<T> {
    const intersectionSet = new CustomerSet<T>();
    // 获取当前实例集合中的元素
    const values = this.values();
    // 获取另一个集合中的元素
    const otherValues = otherSet.values();
    // 遍历元素最少的集合数组，节约性能开销
    values.forEach((value) => {
      if (otherValues.includes(value)) {
        intersectionSet.add(value);
      }
    });

    // 返回交集集合
    return intersectionSet;
  }

  difference(otherSet: CustomerSet<T>): CustomerSet<T> {
    // 声明差集变量
    const differenceSet = new CustomerSet<T>();
    // 遍历当前实例中的集合
    this.values().forEach((value) => {
      // 如果当前遍历到元素不存在与另一个集合中，则将档当前元素添加进差集变量里
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    // 返回差集变量
    return differenceSet;
  }

  isSubsetOf(otherSet: CustomerSet<T>): boolean {
    if (this.size() > otherSet.size()) {
      return false;
    }
    return this.values().every((value) => otherSet.has(value));
  }
}
