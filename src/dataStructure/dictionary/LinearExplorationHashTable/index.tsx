import HashTable from '@dataStructure/dictionary/hashTable';
import { KeyValuePairs } from '../Map';

export default class LinearExplorationHashTable<K, V> extends HashTable<K, V> {
  private count: number;

  constructor() {
    super();
    this.count = 0;
  }

  set(key: K, value: V): boolean {
    if (key === null || value === null) return false;
    const position = this.hashCode(key);
    //  如果当前key等于hashCode求得的key 直接更新,否则新增
    const index = this.getIndex(key);
    // 如果当前key等于hashCode求得的key并且值存在 那么就是更细
    if (this.table[index] !== undefined) {
      this.table[position].value = value;
    } else {
      this.table[index] = new KeyValuePairs(key, value);
      this.count += 1;
    }
    // }
    return true;
  }

  /**
   * 获取某一个key值的index,可能是根据key返回当前存储的index,也可能是当前key需要存储的index
   * @param key
   * @returns
   */
  private getIndex(key: K): number {
    const position = this.hashCode(key);
    let index = position;
    while (this.table[index] !== undefined && this.table[index].key !== key) {
      index += 1;
    }
    return index;
  }

  get(key: K): V | undefined {
    const currentIndex = this.getIndex(key);
    return this.table[currentIndex].value;
  }

  remove(key: K): boolean {
    const index = this.getIndex(key);
    if (this.table[index] === undefined) return false;
    delete this.table[index];
    this.count -= 1;
    return true;
  }

  clear(): void {
    this.table = [];
    this.count = 0;
  }

  size(): number {
    return this.count;
  }

  // 判断字典中是否包含某个key
  hasKey(key: K): boolean {
    const currentIndex = this.getIndex(key);
    return !!this.table[currentIndex];
  }
}
