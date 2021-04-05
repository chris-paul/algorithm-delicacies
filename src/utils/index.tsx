/*
 * @Author: 廉恒凯
 * @Date: 2021-02-28 16:08:13
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-04-05 22:21:26
 * @Description: file content
 */
/**
 * 将任意类型转换为字符串类型
 * @param value
 */
export const customToString = (value: unknown): string => {
  return `${value}`;
};

export const defaultCompare = <T,>(a: T, b: T): number => {
  if (a === b) {
    return 0;
  }
  if (a > b) {
    return 1;
  }
  return -1;
};

export const isDefined = <T,>(value: T | undefined | null): value is T => {
  return typeof value !== 'undefined' && value !== null;
};
