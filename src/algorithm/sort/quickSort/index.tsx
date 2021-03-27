/*
 * @Author: 廉恒凯
 * @Date: 2021-03-27 19:14:14
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-27 19:40:58
 * @Description: file content
 */

/**
 * 以某一个元素作为已经排过序的元素,专业术语叫做基准元素,所有比基准元素小的就放它前面
 * 否则放在它后面,此时可以保证 基准元素的位置已经排好
 *
 * 递归的对基准元素前后的数组再排序
 *
 * 是典型的分治法思想
 *
 * 时间复杂度O(nlgn), n是循环 lgN是分区的次数
 */
const quickSort = <T,>(arr: T[]): T[] => {
  const len = arr.length;
  if (len < 2) {
    return arr;
  }
  // 基准元素
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < len; i += 1) {
    if (arr[i] >= pivot) {
      right.push(arr[i]);
    }
    if (arr[i] < pivot) {
      left.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

export default quickSort;
