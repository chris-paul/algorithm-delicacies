/*
 * @Author: 廉恒凯
 * @Date: 2021-01-23 11:27:30
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-01-23 17:50:35
 * @Description: file content
 */
import {
  LinkedList,
  LinkedListNode,
} from '@dataStructure/linkedList/singleLinkedList/index';
import twoSum from './index';

const traverse = (head: LinkedListNode<number>): number[] => {
  const array: number[] = [];
  if (!head) {
    return array;
  }

  const addToArray = (node: LinkedListNode<number>): number[] => {
    array.push(node.val);
    return node.next ? addToArray(node.next) : array;
  };
  return addToArray(head);
};

describe('two data add', () => {
  test('normal input node add', () => {
    const nodeFirst = new LinkedList<number>();
    const l1 = nodeFirst.insertInBegin(2);
    nodeFirst.insertAtEnd(4);
    nodeFirst.insertAtEnd(3);

    const nodeSecond = new LinkedList<number>();
    const l2 = nodeSecond.insertInBegin(2);
    nodeSecond.insertAtEnd(4);
    nodeSecond.insertAtEnd(3);
    const res = twoSum(l1, l2) as LinkedListNode<number>;
    expect(traverse(res)).toEqual([4, 8, 6]);
  });

  test('Only the sum of the last bit of the two nodes is greater than 10', () => {
    const nodeFirst = new LinkedList<number>();
    const l1 = nodeFirst.insertInBegin(2);
    nodeFirst.insertAtEnd(4);
    nodeFirst.insertAtEnd(9);

    const nodeSecond = new LinkedList<number>();
    const l2 = nodeSecond.insertInBegin(2);
    nodeSecond.insertAtEnd(4);
    nodeSecond.insertAtEnd(3);
    const res = twoSum(l1, l2) as LinkedListNode<number>;
    expect(traverse(res)).toEqual([4, 8, 2, 1]);
  });

  test('one of input node is null should return l1', () => {
    const nodeFirst = new LinkedList<number>();
    const l1 = nodeFirst.insertInBegin(2);
    nodeFirst.insertAtEnd(4);
    nodeFirst.insertAtEnd(3);
    const res = twoSum(l1, null) as LinkedListNode<number>;
    expect(traverse(res)).toEqual([2, 4, 3]);
  });

  test('all of input node is null should return null', () => {
    expect(twoSum(null, null)).toBeNull();
  });
});
