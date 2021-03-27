/*
 * @Author: 廉恒凯
 * @Date: 2021-03-27 19:41:24
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-27 19:41:39
 * @Description: file content
 */
import quickSort from './index';

describe('quickSort', () => {
  test('QuickSort should get  the sorted array from small to large', () => {
    expect(quickSort([])).toEqual([]);
    expect(quickSort([1])).toEqual([1]);
    expect(quickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(quickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(quickSort([3, 5, 1, 2, 4])).toEqual([1, 2, 3, 4, 5]);
  });
});
