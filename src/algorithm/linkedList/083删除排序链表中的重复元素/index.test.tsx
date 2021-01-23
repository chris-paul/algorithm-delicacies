/*
 * @Author: 廉恒凯
 * @Date: 2021-01-23 11:27:30
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-01-23 18:18:55
 * @Description: file content
 */
import {
  LinkedList,
  LinkedListNode,
} from '@dataStructure/linkedList/singleLinkedList/index';
import deleteDuplicates from './index';

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
  test('The input parameter has no duplicate elements', () => {
    const nodeFirst = new LinkedList<number>();
    const l1 = nodeFirst.insertInBegin(2);
    nodeFirst.insertAtEnd(3);
    nodeFirst.insertAtEnd(4);
    const res = deleteDuplicates(l1) as LinkedListNode<number>;
    expect(traverse(res)).toEqual([2, 3, 4]);
  });

  test('The number of repeated elements of the input parameter is more than 2 times', () => {
    const nodeFirst = new LinkedList<number>();
    const l1 = nodeFirst.insertInBegin(2);
    nodeFirst.insertAtEnd(2);
    nodeFirst.insertAtEnd(2);
    nodeFirst.insertAtEnd(3);

    const res = deleteDuplicates(l1) as LinkedListNode<number>;
    expect(traverse(res)).toEqual([2, 3]);
  });

  test('The number of repeated elements of the input parameter is not more than 2 times', () => {
    const nodeFirst = new LinkedList<number>();
    const l1 = nodeFirst.insertInBegin(2);
    nodeFirst.insertAtEnd(4);
    nodeFirst.insertAtEnd(3);
    nodeFirst.insertAtEnd(3);
    const res = deleteDuplicates(l1) as LinkedListNode<number>;
    expect(traverse(res)).toEqual([2, 4, 3]);
  });

  test('all of input node is null should return null', () => {
    expect(deleteDuplicates(null)).toBeNull();
  });
});
