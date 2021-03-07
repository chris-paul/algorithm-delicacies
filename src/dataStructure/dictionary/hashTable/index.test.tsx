/*
 * @Author: 廉恒凯
 * @Date: 2021-02-27 14:09:16
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-02-27 15:58:59
 * @Description: file content
 */
import HashTable from './index';

describe('HashTable', () => {
  let hashTabble: HashTable<string, string>;

  beforeEach(() => {
    hashTabble = new HashTable<string, string>();
  });

  test('An initialize dictionary the size is 0 and key-values is empty array', () => {
    expect(hashTabble.size()).toBe(0);
    expect(hashTabble.values()).toEqual([]);
    expect(hashTabble.isEmpty()).toBeTruthy();
    expect(hashTabble.keys()).toHaveLength(0);
  });

  test('Adding multiple elements to the dictionary should get the correct size and key-values', () => {
    hashTabble.set('lian', 'shanxi Province');
    hashTabble.set('liu', 'jiangxi Province');
    hashTabble.set('zhang', 'hainan Province');
    expect(hashTabble.size()).toBe(3);
    expect(hashTabble.isEmpty()).toBeFalsy();
    expect(hashTabble.get('zhang')).toBe('hainan Province');
    expect(hashTabble.keys().sort()).toEqual(['lian', 'liu', 'zhang'].sort());
    expect(hashTabble.values().sort()).toEqual(
      ['shanxi Province', 'hainan Province', 'jiangxi Province'].sort()
    );
  });

  test('The elements key added to the dictionary must be unique', () => {
    hashTabble.set('lian', 'shanxi Province');
    hashTabble.set('lian', 'hainan Province');
    expect(hashTabble.size()).toBe(1);
    expect(hashTabble.get('lian')).toBe('hainan Province');
    expect(hashTabble.values()).toEqual(['hainan Province']);
    expect(hashTabble.keys()).toEqual(['lian']);
  });

  test('There is an element in the dictionary that returns true ,otherwise return false', () => {
    hashTabble.set('lian', 'shanxi Province');
    hashTabble.set('zhao', 'hainan Province');
    expect(hashTabble.hasKey('lian')).toBeTruthy();
    expect(hashTabble.hasKey('liu')).toBeFalsy();
  });

  test('When an element is removed from the dictionary, the element does not exist in the collection and the length of the collection is reduced by 1', () => {
    hashTabble.set('lian', 'shanxi Province');
    hashTabble.set('zhao', 'hainan Province');
    const size = hashTabble.size();
    hashTabble.remove('lian');
    expect(hashTabble.size()).toBe(size - 1);
    expect(hashTabble.hasKey('lian')).toBeFalsy();
  });

  test('Clear the collection should return an empty collection ', () => {
    hashTabble.set('lian', 'shanxi Province');
    hashTabble.set('zhao', 'hainan Province');
    hashTabble.clear();
    expect(hashTabble.size()).toBe(0);
  });

  test('Foreach returns the correct key, value, and loops three times', () => {
    hashTabble.set('lian', 'shanxi Province');
    hashTabble.set('liu', 'jiangxi Province');
    hashTabble.set('zhang', 'hainan Province');
    let loopNum = 0;
    hashTabble.forEach((key, value) => {
      loopNum += 1;
      expect(hashTabble.hasKey(key)).toBeTruthy();
      expect(hashTabble.get(key)).toBe(value);
    });
    expect(loopNum).toBe(3);
  });

  test('The toString method of the dictionary returns the string representation of the key value', () => {
    hashTabble.set('lian', 'shanxi Province');
    hashTabble.set('liu', 'jiangxi Province');
    hashTabble.set('zhang', 'hainan Province');
    expect(hashTabble.toString()).toBe(
      '[#zhang: hainan Province],[#lian: shanxi Province],[#liu: jiangxi Province]'
    );

    const hashTabble2 = new HashTable<string, string>();
    expect(hashTabble2.toString()).toBe('');
  });
});
