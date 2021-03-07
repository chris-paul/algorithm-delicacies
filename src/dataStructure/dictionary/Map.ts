/*
 * @Author: 廉恒凯
 * @Date: 2021-02-28 15:49:41
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-02-28 19:47:48
 * @Description: file content
 */

// interface KeyValuePairs<K, V> {}

export class KeyValuePairs<K, V> {
  constructor(public key: K, public value: V) {
    this.key = key;
    this.value = value;
  }

  toString(): string {
    return `[#${this.key}: ${this.value}]`;
  }
}

export interface Map<K, V> {
  hasKey(key: K): boolean;
  set?(key: K, value: V): boolean;
  put?(key: K, value: V): boolean;
  remove(key: K): boolean;
  get(key: K): V | undefined;
  keys(): K[];
  values(): V[];
  forEach(callbackFn: (key: K, value: V) => any): void;
  size(): number;
  isEmpty(): boolean;
  clear(): void;
  toString(): string;
}
