/*
 * @Author: 廉恒凯
 * @Date: 2021-01-03 16:42:11
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-01-10 18:43:37
 * @Description: file content
 */

/**
 * GuardedMap has 方法返回值有使用is 关键字做类型保护
 */
interface GuardedMap<K, V> extends Map<K, V> {
  has: <S extends K>(
    k: S
  ) => this is K extends S
    ? Record<string, never>
    : { get: (k: S) => V } & this;
}
