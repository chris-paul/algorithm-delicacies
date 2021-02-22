/*
 * @Author: 廉恒凯
 * @Date: 2021-01-17 10:28:40
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-02-22 21:38:02
 * @Description: file content
 */
import CircularQueue from './index';

describe('deque', () => {
  let deque: CircularQueue<number>;

  beforeEach(() => {
    deque = new CircularQueue<number>(3);
  });

  test('An initialize deque is empty and not fulled ', () => {
    expect(deque.empty()).toBeTruthy();
    expect(deque.size()).toBe(0);
    expect(deque.isFull()).toBeFalsy();
  });

  test('Enqueue item should return true and the deque is empty', () => {
    expect(deque.enQueue(1)).toBeTruthy();
    expect(deque.size()).toBe(1);
    expect(deque.empty()).toBeFalsy();
  });

  test('The element added to the queue exceeds the length of the queue should return false', () => {
    deque.enQueue(1);
    deque.enQueue(1);
    deque.enQueue(1);
    expect(deque.isFull()).toBeTruthy();
    expect(deque.enQueue(1)).toBeFalsy();
  });

  test('Queues can reuse the free space  ', () => {
    deque.enQueue(1);
    deque.enQueue(2);
    deque.enQueue(3);
    deque.deQueue();
    deque.enQueue(4);
    expect(deque.peekBack()).toBe(4);
  });

  test('After removing the elements of the queue, the number of elements in the queue should be reduced', () => {
    deque.enQueue(1);
    const value = deque.deQueue();
    expect(value).toBe(1);
    expect(deque.size()).toBe(0);
    expect(deque.empty()).toBeTruthy();
  });

  test('The empty queue deQueue should return undefined', () => {
    expect(deque.deQueue()).toBeUndefined();
  });

  test('It should get leader element when peekFront called', () => {
    deque.enQueue(1);
    deque.enQueue(2);
    deque.enQueue(3);
    expect(deque.peekFront()).toBe(1);
  });

  test('It should get the end element when peekBack called', () => {
    deque.enQueue(1);
    deque.enQueue(2);
    deque.enQueue(3);
    expect(deque.peekBack()).toBe(3);
  });
});
