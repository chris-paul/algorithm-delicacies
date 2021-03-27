/*
 * @Author: 廉恒凯
 * @Date: 2021-03-27 19:24:59
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-27 19:28:57
 * @Description: file content
 */
import bubbleSort from './index';

describe('bubbleSort', () => {
  test('BubbleSort should get  the sorted array from small to large', () => {
    expect(bubbleSort([])).toEqual([]);
    expect(bubbleSort([1])).toEqual([1]);
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(bubbleSort([3, 5, 1, 2, 4])).toEqual([1, 2, 3, 4, 5]);
  });
});
