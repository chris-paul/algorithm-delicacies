/*
 * @Author: 廉恒凯
 * @Date: 2021-03-03 21:09:13
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-03 22:11:21
 * @Description: file content
 */
import intersection from './index';

describe('intersection ', () => {
  test('Gets right the intersection of two arrays ', () => {
    const res = intersection([2, 3, 3, 1], [3, 1, 8]);
    expect(res).toEqual([3, 1]);
  });
});
