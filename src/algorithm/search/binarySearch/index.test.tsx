/*
 * @Author: 廉恒凯
 * @Date: 2021-03-27 20:16:50
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-27 20:28:08
 * @Description: file content
 */
import binarySearch from './index';

describe('binarySearch', () => {
  test('BinarySearch should get the index from array when exist, otherwise return - 1 ', () => {
    // expect(binarySearch([], 1)).toBe(-1);
    // expect(binarySearch([1], 1)).toEqual(0);
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });
});
