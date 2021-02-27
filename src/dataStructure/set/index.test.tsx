/*
 * @Author: 廉恒凯
 * @Date: 2021-02-27 14:09:16
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-02-27 15:58:59
 * @Description: file content
 */
import CustomerSet from './index';

describe('set', () => {
  let iSet: CustomerSet<number>;

  beforeEach(() => {
    iSet = new CustomerSet<number>();
  });

  test('An initialize collection the size is 0 and values is empty array', () => {
    expect(iSet.size()).toBe(0);
    expect(iSet.values()).toEqual([]);
  });

  test('Adding multiple elements to the collection should get the correct size and values', () => {
    iSet.add(1).add(2).add(3);
    expect(iSet.size()).toBe(3);
    expect(iSet.values()).toEqual([1, 2, 3]);
  });

  test('The elements added to the collection must be unique', () => {
    iSet.add(1).add(2).add(2);
    expect(iSet.size()).toBe(2);
    expect(iSet.values()).toEqual([1, 2]);
  });

  test('There is an element in the collection that returns true ,otherwise return false', () => {
    iSet.add(1).add(2);
    expect(iSet.has(1)).toBeTruthy();
    expect(iSet.has(8)).toBeFalsy();
  });

  test('When an element is removed from the collection, the element does not exist in the collection and the length of the collection is reduced by 1', () => {
    iSet.add(1).add(2);
    const size = iSet.size();
    iSet.delete(1);
    expect(iSet.size()).toBe(size - 1);
    expect(iSet.has(1)).toBeFalsy();
  });

  test('Clear the collection should return an empty collection ', () => {
    iSet.add(1).add(2);
    iSet.clear();
    expect(iSet.size()).toBe(0);
  });

  test('Union should contains all the elements in both collection', () => {
    const otherSet: CustomerSet<number> = new CustomerSet();
    iSet.add(1).add(2);
    otherSet.add(1).add(3);
    expect(iSet.union(otherSet).values()).toEqual([1, 2, 3]);
    otherSet.clear();
    expect(iSet.union(otherSet).values()).toEqual([1, 2]);
  });

  test('Intersection should contains elements that exist in both collections', () => {
    const otherSet: CustomerSet<number> = new CustomerSet();
    iSet.add(1).add(2);
    otherSet.add(1).add(3);
    expect(iSet.intersection(otherSet).values()).toEqual([1]);
    otherSet.clear();
    expect(iSet.intersection(otherSet).values()).toEqual([]);
  });

  test('Difference should contains elements that are not the same in two collections', () => {
    const otherSet: CustomerSet<number> = new CustomerSet();
    iSet.add(1).add(2);
    otherSet.add(1).add(3);
    expect(iSet.difference(otherSet).values()).toEqual([2]);
    expect(otherSet.difference(iSet).values()).toEqual([3]);
    otherSet.clear();
    expect(iSet.difference(otherSet).values()).toEqual([1, 2]);
    expect(otherSet.difference(iSet).values()).toEqual([]);
  });
});
