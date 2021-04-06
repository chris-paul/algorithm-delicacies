/*
 * @Author: 廉恒凯
 * @Date: 2021-03-27 20:09:09
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-27 20:28:35
 * @Description: file content
 */

/**
 * 二分搜索
 * 时间复杂度O(lgn)
 * @param arr
 * @param item
 */
const binarySearch = <T,>(arr: T[], item: T): number => {
  // 最小下标和最大下标
  let minIndex = 0;
  let maxIndex = arr.length - 1;
  while (minIndex <= maxIndex) {
    // 中间下标
    const midIndex = Math.floor((minIndex + maxIndex) / 2);
    const element = arr[midIndex];
    if (element > item) {
      maxIndex = midIndex - 1;
    } else if (element < item) {
      minIndex = midIndex + 1;
    } else {
      return midIndex;
    }
  }
  return -1;
};

export default binarySearch;
