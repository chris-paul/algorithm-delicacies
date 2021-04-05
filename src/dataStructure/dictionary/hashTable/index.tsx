/*
 * @Author: 廉恒凯
 * @Date: 2021-03-01 20:56:31
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-04-05 20:25:19
 * @Description: file content
 */
import { customToString, isDefined } from '@utils/index';
import { KeyValuePairs, Map } from '../Map';

export default class HashTable<K, V> implements Map<K, V> {
  protected table: KeyValuePairs<K, V>[];

  constructor(private toStrFn: (key: K) => string = customToString) {
    this.table = [];
  }

  // 生成哈希码
  hashCode = (key: K): number => {
    return this.djb2HashCode(key);
  };

  // loselose实现哈希函数
  private loseloseHashCode = (key: K): number => {
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
  };

  private djb2HashCode = (key: K): number => {
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
  };

  keyValues = (): KeyValuePairs<K, V>[] => {
    return this.table.filter((bucket) => !!bucket);
  };

  set = (key: K, value: V): boolean => {
    if (isDefined(key)) {
      const position = this.hashCode(key);
      this.table[position] = new KeyValuePairs(key, value);
      return true;
    }
    return false;
  };

  // 判断字典中是否包含某个key
  hasKey = (key: K): boolean => {
    return this.table[this.hashCode(key)] !== undefined;
  };

  keys = (): K[] => {
    return this.keyValues().map((valuePair) => valuePair.key);
  };

  // 获取字典中的所有值
  values = (): V[] => {
    const values = [];
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i += 1) {
      values.push(valuePairs[i].value);
    }
    return values;
  };

  forEach = (callbackFn: (key: K, value: V) => unknown): void => {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i += 1) {
      callbackFn(valuePairs[i].key, valuePairs[i].value);
    }
  };

  size = (): number => {
    return this.keyValues().length;
  };

  isEmpty = (): boolean => {
    return this.size() === 0;
  };

  clear = (): void => {
    this.table = [];
  };

  // 从字典中移除一个值
  remove = (key: K): boolean => {
    if (this.hasKey(key)) {
      delete this.table[this.hashCode(key)];
      return true;
    }
    return false;
  };

  get = (key: K): V | null => {
    const currentPair = this.table[this.hashCode(key)];
    return isDefined(currentPair) ? currentPair.value : null;
  };

  // 将字典中的数据转为字符串
  toString(): string {
    const pairsArr = [];
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i += 1) {
      pairsArr.push(`${valuePairs[i].toString()}`);
    }
    return pairsArr.toString();
  }
}
