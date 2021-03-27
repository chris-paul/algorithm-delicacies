/*
 * @Author: 廉恒凯
 * @Date: 2021-03-27 19:24:59
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-27 19:39:49
 * @Description: file content
 */
import mergeSortRecursive from './index';

describe('mergeSortRecursive', () => {
  test('MergeSortRecursive should get  the sorted array from small to large', () => {
    expect(mergeSortRecursive([])).toEqual([]);
    expect(mergeSortRecursive([1])).toEqual([1]);
    expect(mergeSortRecursive([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(mergeSortRecursive([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(mergeSortRecursive([3, 5, 1, 2, 4])).toEqual([1, 2, 3, 4, 5]);
  });
});
