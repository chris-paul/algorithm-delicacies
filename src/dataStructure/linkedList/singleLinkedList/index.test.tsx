import { LinkedList, LinkedListNode } from './index';

describe(' linkedListNode and linkedList ', () => {
  describe('linkedListNode', () => {
    test('create linkedListNode should get head Node, and the next point is null, the data should get Correct value', () => {
      const node = new LinkedListNode(1);
      expect(node).not.toBe(null);
      expect(node.next).toBeNull();
      expect(node.data).toBe(1);
    });
  });

  describe('linkedList size', () => {
    test('An initialized LinkedList the head is null, and the LinkedList is empty', () => {
      const node = new LinkedList();
      expect(node.size()).toBe(0);
      node.insertInBegin(1);
      expect(node.size()).toBe(1);
    });
  });

  describe('linkedList insert success ,', () => {
    test('Each insert should be inserted to the front of the linked list ', () => {
      const node = new LinkedList();
      node.insertInBegin(1);
      node.insertInBegin(2);
      expect(node.traverse()).toEqual([2, 1]);
    });

    test('each insert should be inserted to the end of the linked list ', () => {
      const node = new LinkedList();
      node.insertAtEnd(1);
      node.insertAtEnd(2);
      expect(node.traverse()).toEqual([1, 2]);
    });

    test('insertInBegin then insertAtEnd, should get a list in the right order   ', () => {
      const node = new LinkedList();
      node.insertInBegin(1);
      node.insertInBegin(2);
      node.insertAtEnd(3);
      expect(node.traverse()).toEqual([2, 1, 3]);
    });
  });

  describe('linkedList traverse', () => {
    test('An initialized LinkedList traverse is empty array', () => {
      const node = new LinkedList();
      expect(node.traverse()).toHaveLength(0);
    });

    test('each insert should get success result', () => {
      const node = new LinkedList();
      node.insertInBegin(1);
      node.insertAtEnd(2);
      expect(node.traverse()).toEqual([1, 2]);
    });
  });

  describe('delete Node By Data', () => {
    test('delete head Node List data', () => {
      const node = new LinkedList();
      node.insertInBegin(1);
      node.insertAtEnd(2);
      node.deleteNodeByData(1);
      expect(node.traverse()).toEqual([2]);
    });

    test('delete all data should empty', () => {
      const node = new LinkedList();
      node.insertInBegin(1);
      node.insertAtEnd(2);
      node.deleteNodeByData(1);
      node.deleteNodeByData(2);
      expect(node.size()).toBe(0);
    });

    test('delete the data that does not exist in the linked list, and the length of the linked list remains unchanged', () => {
      const node = new LinkedList();
      node.insertInBegin(1);
      node.insertAtEnd(2);
      const size = node.size();
      node.deleteNodeByData(3);
      expect(node.size()).toBe(size);
    });
  });

  describe('search data from linkedList', () => {
    test('should get correct Node if the data exists', () => {
      const node = new LinkedList();
      const firstNode = node.insertInBegin(1);
      const searchNode = node.search(1);
      expect(searchNode).toBe(firstNode);
    });

    test('if there is no data in the linked list should return null', () => {
      const node = new LinkedList();
      const searchNode = node.search(3);
      expect(searchNode).toBeNull();
    });
  });
});
