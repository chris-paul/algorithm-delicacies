/*
 * @Author: 廉恒凯
 * @Date: 2021-01-17 10:28:40
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-02-01 22:00:03
 * @Description: file content
 */
import Deque from './index';

describe('deque', () => {
  let deque: Deque<number>;

  beforeEach(() => {
    deque = new Deque<number>();
  });

  test('An initialize deque is empty and the size is 0', () => {
    expect(deque.size()).toBe(0);
    expect(deque.empty()).toBeTruthy();
  });

  test('An uninitialized deque is empty and the size is 0', () => {
    deque.addFront(1);
    expect(deque.size()).toBe(1);
    expect(deque.empty()).toBeFalsy();
  });

  test('addFront items should be added to the front of the deque at one time', () => {
    deque.addFront(1);
    deque.addFront(2);
    expect(deque.toString()).toBe('2,1');
  });

  test('addBack items should be added to the end of the deque at one time', () => {
    deque.addBack(1);
    deque.addBack(2);
    expect(deque.toString()).toBe('1,2');
  });

  test('removeFront item should delete the front of the deque at one time ', () => {
    deque.addFront(1);
    deque.addFront(2);
    deque.removeFront();
    expect(deque.toString()).toBe('1');
  });

  test('removeBack item should delete the end of the deque at one time ', () => {
    deque.addFront(1);
    deque.addFront(2);
    deque.removeBack();
    expect(deque.toString()).toBe('2');
  });

  test('peekFront item should get the front of the deque at one time', () => {
    deque.addFront(1);
    deque.addBack(2);
    expect(deque.peekFront()).toBe(1);
  });

  test('peekFront item should get undefined when deque empty', () => {
    expect(deque.peekFront()).toBeUndefined();
  });

  test('peekBack item should get the end of the deque at one time', () => {
    deque.addFront(1);
    deque.addFront(2);
    expect(deque.peekBack()).toBe(1);
  });

  test('peekBack item should get undefined when deque empty', () => {
    expect(deque.peekBack()).toBeUndefined();
  });

  test('deque should get empty string when cleared', () => {
    deque.addFront(1);
    deque.clear();
    expect(deque.toString()).toBe('');
  });
});
