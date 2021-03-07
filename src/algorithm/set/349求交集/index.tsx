/*
 * @Author: 廉恒凯
 * @Date: 2021-03-03 21:08:54
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-05 21:07:36
 * @Description: file content
 */
/**
 * 求两个数的交集
 * 可以使用set求交集
 * 时间复杂度O(n * n)
 * 空间复杂复杂度O(n)
 */
import Set from '@dataStructure/set/index';

const intersection = (nums1: number[], nums2: number[]): number[] => {
  const set1 = new Set<number>();
  // 必须先去重复
  nums1.forEach((element: number) => {
    set1.add(element);
  });

  return set1.values().filter((item: number) => {
    return nums2.includes(item);
  });
};

export default intersection;
