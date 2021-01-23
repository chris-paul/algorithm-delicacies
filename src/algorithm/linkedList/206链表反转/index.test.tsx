/*
 * @Author: 廉恒凯
 * @Date: 2021-01-23 11:27:30
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-01-23 15:33:59
 * @Description: file content
 */
import { LinkedList } from '@dataStructure/linkedList/singleLinkedList/index';
import { iterationReverseList, recursiveReverseList } from './index';

describe('reverseList linkedList ', () => {
  describe('using the iteration functon to reverseList linkedList', () => {
    test('init linkedList and get success reverseList', () => {
      const node = new LinkedList<number>();
      const head = node.insertInBegin(1);
      node.insertInBegin(2);
      node.insertInBegin(3);
      node.insertInBegin(4);
      node.insertInBegin(5);
      iterationReverseList(head);
      expect(node.traverse()).toEqual([5, 4, 3, 2, 1]);
    });

    test('init linkedList and get success reverseList', () => {
      expect(iterationReverseList(null)).toBeNull();
    });
  });

  describe('using the recursive functon to reverseList linkedList', () => {
    test('init linkedList and get success reverseList', () => {
      const node = new LinkedList<number>();
      const head = node.insertInBegin(1);
      node.insertInBegin(2);
      node.insertInBegin(3);
      node.insertInBegin(4);
      node.insertInBegin(5);
      recursiveReverseList(head);
      expect(node.traverse()).toEqual([5, 4, 3, 2, 1]);
    });

    test('init linkedList and get success reverseList', () => {
      expect(recursiveReverseList(null)).toBeNull();
    });
  });
});
