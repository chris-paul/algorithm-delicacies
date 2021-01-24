/*
 * @Author: 廉恒凯
 * @Date: 2021-01-23 11:27:30
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-01-24 14:46:25
 * @Description: file content
 */
import {
  LinkedList,
  LinkedListNode,
} from '@dataStructure/linkedList/singleLinkedList/index';
import { hashHasCycle, slowFastHasCycle } from './index';

describe('cycle linkedList', () => {
  test('There is a link in the list whose tail is connected to the second node.', () => {
    const nodeFirst = new LinkedList<number>();
    const l1 = nodeFirst.insertInBegin(2);
    const l2 = nodeFirst.insertAtEnd(3);
    nodeFirst.insertAtEnd(4);
    const l4 = nodeFirst.insertAtEnd(4);
    l4.next = l2;
    expect(hashHasCycle(l1)).toBeTruthy();
    expect(slowFastHasCycle(l1)).toBeTruthy();
  });

  test('There is a link in the list whose tail is connected to the first node.', () => {
    const nodeFirst = new LinkedList<number>();
    const l1 = nodeFirst.insertInBegin(2);
    nodeFirst.insertAtEnd(3);
    nodeFirst.insertAtEnd(4);
    const l4 = nodeFirst.insertAtEnd(4);
    l4.next = l1;
    expect(hashHasCycle(l1)).toBeTruthy();
    expect(slowFastHasCycle(l1)).toBeTruthy();
  });

  test('There are no rings in the linked list', () => {
    const nodeFirst = new LinkedList<number>();
    const l1 = nodeFirst.insertInBegin(2);
    expect(hashHasCycle(l1)).toBeFalsy();
    expect(slowFastHasCycle(l1)).toBeFalsy();
  });

  test('all of input node is null should return null', () => {
    expect(hashHasCycle(null)).toBeFalsy();
    expect(slowFastHasCycle(null)).toBeFalsy();
  });
});
