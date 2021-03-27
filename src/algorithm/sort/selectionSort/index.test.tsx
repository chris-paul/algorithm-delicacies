/*
 * @Author: 廉恒凯
 * @Date: 2021-03-27 19:41:56
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-27 19:43:15
 * @Description: file content
 */
import selectionSort from './index';

describe('SelectionSort', () => {
  test('SelectionSort should get  the sorted array from small to large', () => {
    expect(selectionSort([])).toEqual([]);
    expect(selectionSort([1])).toEqual([1]);
    expect(selectionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(selectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(selectionSort([3, 5, 1, 2, 4])).toEqual([1, 2, 3, 4, 5]);
  });
});
