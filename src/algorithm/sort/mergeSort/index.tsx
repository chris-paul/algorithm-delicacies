/*
 * @Author: 廉恒凯
 * @Date: 2021-03-27 18:43:49
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-27 19:06:22
 * @Description: file content
 */

/**
 * 归并排序的思想就是分而治之,就是把2个有序序列合并为一个有序序列
 * 时间复杂度O(nlgn)
 * 一个数组的长度是N 必须劈lgN次才能分割成一个个小数组
 * merge 两个数组的时间复杂度是N
 * @param arr
 * @returns
 */

/**
 * 合并两个排序数组
 * @param left
 * @param right
 * @returns
 */
const merge = <T,>(left: T[], right: T[]): T[] => {
  const resArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      resArr.push(left.shift() as T);
    } else {
      resArr.push(right.shift() as T);
    }
  }
  return resArr.concat(left, right);
};

const mergeSortRecursive = <T,>(arr: T[]): T[] => {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSortRecursive<T>(left), mergeSortRecursive<T>(right));
};

export default mergeSortRecursive;
