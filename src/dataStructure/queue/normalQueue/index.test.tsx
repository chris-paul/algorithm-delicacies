/*
 * @Author: 廉恒凯
 * @Date: 2021-01-17 10:28:40
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-04-05 17:38:48
 * @Description: file content
 */
import Queue from './index';

describe('normalQueue', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  test('An uninitialized queue is empty and the size is 0', () => {
    expect(queue.size()).toBe(0);
    expect(queue.empty()).toBeTruthy();
  });

  test('enqueue an item on the queue and shift it off ', () => {
    queue.enqueue(1);
    expect(queue.dequeue()).toBe(1);
  });

  test('When adding multiple distinct items on the queue, repeated shifting returns them in accord order', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    const firstShift = queue.dequeue();
    expect(firstShift).toBe(1);
    const nextShift = queue.dequeue();
    expect(nextShift).toBe(2);
  });

  test('A queue that has items pushed and subsequently removed is empty', () => {
    queue.enqueue(1);
    queue.dequeue();
    expect(queue.empty()).toBeTruthy();
  });

  test('Attempting to unshift when there are no items results in the documented type of failure', () => {
    expect(queue.dequeue()).toBeNull();
  });

  test('A queue that has an item pushed is non-empty.', () => {
    queue.enqueue(1);
    expect(queue.empty()).toBeFalsy();
  });
});
