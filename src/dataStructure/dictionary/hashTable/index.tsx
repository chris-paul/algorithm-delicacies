/*
 * @Author: 廉恒凯
 * @Date: 2021-03-01 20:56:31
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-05 21:45:33
 * @Description: file content
 */
import { KeyValuePairs, Map } from '../Map';
import customToString from '../../../utils';

export default class HashTable<K, V> implements Map<K, V> {
  private table: KeyValuePairs<K, V>[];

  constructor(private toStrFn: (key: K) => string = customToString) {
    this.table = [];
  }

  set(key: K, value: V): boolean {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      this.table[position] = new KeyValuePairs(key, value);
      return true;
    }
    return false;
  }

  // 生成哈希码
  hashCode(key: K): number {
    return this.djb2HashCode(key);
  }

  // loselose实现哈希函数
  loseloseHashCode(key: K): number {
    if (typeof key === 'number') {
      return key;
    }
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i += 1) {
      // 获取每个字符的ASCII码将其拼接至hash中
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }

  djb2HashCode(key: K): number {
    if (typeof key === 'number') {
      return key;
    }

    // 将参数转为字符串
    const tableKey = this.toStrFn(key);
    let hash = 5381;
    for (let i = 0; i < tableKey.length; i += 1) {
      hash = hash * 33 + tableKey.charCodeAt(i);
    }
    return hash % 1013;
  }

  keyValues(): KeyValuePairs<K, V>[] {
    return this.table.filter((bucket) => !!bucket);
  }

  forEach(callbackFn: (key: K, value: V) => unknown): void {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i += 1) {
      callbackFn(valuePairs[i].key, valuePairs[i].value);
    }
  }

  size(): number {
    return this.keyValues().length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  clear(): void {
    this.table = [];
  }

  // 将字典中的数据转为字符串
  toString(): string {
    let objString = '';
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i += 1) {
      objString = `${objString},${valuePairs[i].toString()}`;
    }
    return objString;
  }
}
