/*
 * @Author: 廉恒凯
 * @Date: 2021-03-27 19:24:59
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-27 19:37:15
 * @Description: file content
 */
import insertionSort from './index';

describe('insertionSort', () => {
  test('InsertionSort should get  the sorted array from small to large', () => {
    expect(insertionSort([])).toEqual([]);
    expect(insertionSort([1])).toEqual([1]);
    expect(insertionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(insertionSort([3, 5, 1, 2, 4])).toEqual([1, 2, 3, 4, 5]);
  });
});
