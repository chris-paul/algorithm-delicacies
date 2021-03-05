/*
 * @Author: 廉恒凯
 * @Date: 2021-02-28 15:59:14
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-05 21:10:11
 * @Description: file content
 */

import { KeyValuePairs, Map } from '../Map';
import customToString from '../../../utils';

export default class ObjectDictionary<K, V> implements Map<K, V> {
  private table: { [key: string]: KeyValuePairs<K, V> };

  constructor(private toStrFn: (key: K) => string = customToString) {
    this.table = {};
  }

  // 判断字典中是否包含某个key
  hasKey(key: K): boolean {
    return this.table[this.toStrFn(key)] != null;
  }

  // 向字典中添加元素
  set(key: K, value: V): boolean {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new KeyValuePairs(key, value);
      return true;
    }
    return false;
  }

  // 从字典中移除一个值
  remove(key: K): boolean {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }

  get(key: K): V | undefined {
    const currentPair = this.table[this.toStrFn(key)];
    return currentPair == null ? undefined : currentPair.value;
  }

  /**
   * 获取key value的键值对
   */
  keyValues(): KeyValuePairs<K, V>[] {
    const valuePairs = [];
    const keys = Object.keys(this.table);
    for (let i = 0; i < keys.length; i += 1) {
      valuePairs.push(this.table[keys[i]]);
    }
    return valuePairs;
  }

  keys(): K[] {
    return this.keyValues().map((valuePair) => valuePair.key);
  }

  // 获取字典中的所有值
  values(): V[] {
    const values = [];
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i += 1) {
      values.push(valuePairs[i].value);
    }
    return values;
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
    this.table = {};
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
