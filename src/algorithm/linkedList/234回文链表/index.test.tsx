/*
 * @Author: 廉恒凯
 * @Date: 2021-01-23 11:27:30
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-01-24 14:46:14
 * @Description: file content
 */
import { LinkedList } from '@dataStructure/linkedList/singleLinkedList/index';
import isPalindrome from './index';

describe('isPalindrome linkedList ', () => {
  test('the input is palindrome Linked List should get true', () => {
    const node = new LinkedList<number>();
    const head = node.insertInBegin(1);
    node.insertInBegin(2);
    node.insertInBegin(2);
    node.insertInBegin(1);
    expect(isPalindrome(head)).toBeTruthy();
  });

  test('the input is not palindrome Linked List should get true', () => {
    const node = new LinkedList<number>();
    const head = node.insertAtEnd(2);
    node.insertAtEnd(1);
    expect(isPalindrome(head)).toBeFalsy();
  });

  test('the input is null should get true', () => {
    expect(isPalindrome(null)).toBeTruthy();
  });
});
