import {
  LinkedList,
  LinkedListNode,
} from '@dataStructure/linkedList/singleLinkedList/index';
import HashTable from '@dataStructure/dictionary/hashTable';
import { isDefined } from '@utils/index';
import { KeyValuePairs } from '../Map';

export default class SeparateLinkedListHashTable<K, V> extends HashTable<K, V> {
  private tableLink: LinkedList<KeyValuePairs<K, V>>[];

  private count: number;

  constructor() {
    super();
    this.tableLink = [];
    this.count = 0;
  }

  searhNode = (
    node: LinkedListNode<KeyValuePairs<K, V>>,
    key: K
  ): LinkedListNode<KeyValuePairs<K, V>> | null => {
    let temp: LinkedListNode<KeyValuePairs<K, V>> | null = node;
    while (temp) {
      if (temp.val.key === key) {
        return temp;
      }
      temp = temp.next;
    }
    return null;
  };

  set = (key: K, value: V): boolean => {
    if (key === null || value === null) return false;
    const position = this.hashCode(key);
    if (this.tableLink[position] === undefined) {
      this.tableLink[position] = new LinkedList<KeyValuePairs<K, V>>();
      this.tableLink[position].insertAtEnd(new KeyValuePairs(key, value));
      this.count += 1;
    } else {
      const headNode = this.tableLink[position].getHead();
      const currentNode = headNode && this.searhNode(headNode, key);
      if (currentNode) {
        currentNode.val.value = value;
      } else {
        this.count += 1;
        this.tableLink[position].insertAtEnd(new KeyValuePairs(key, value));
      }
    }
    return true;
  };

  get = (key: K): V | null => {
    const position = this.hashCode(key);
    const linkedList = this.tableLink[position];
    if (isDefined(linkedList) && !linkedList.isEmpty()) {
      // 获取链表头部数据
      const headNode = linkedList.getHead();
      const result = headNode && this.searhNode(headNode, key);
      const value = result?.val?.value;
      return isDefined(value) ? value : null;
    }
    return null;
  };

  remove = (key: K): boolean => {
    const position = this.hashCode(key);
    // 获取目标元素位置存储的链表结构元素
    const linkedList = this.tableLink[position];
    if (isDefined(linkedList)) {
      // 获取链表头部数据
      const head = linkedList.getHead();
      const result = head && this.searhNode(head, key);
      if (result) {
        linkedList.deleteNodeByVal(result.val);
      }
      this.count -= 1;
    }
    return false;
  };

  clear = (): void => {
    this.tableLink = [];
    this.count = 0;
  };

  size = (): number => {
    return this.count;
  };

  // 判断字典中是否包含某个key
  hasKey = (key: K): boolean => {
    const position = this.hashCode(key);
    // 获取目标元素位置存储的链表结构元素
    const linkedList = this.tableLink[position];
    return isDefined(linkedList) && !linkedList.isEmpty();
  };

  // 重写keyValues方法：hashMap中存储的是链表，需要从链表中获取valuePair
  keyValues = (): KeyValuePairs<K, V>[] => {
    const valuePairs = [];
    for (let i = 0; i < this.tableLink.length; i += 1) {
      const linkedList = this.tableLink[i];
      if (isDefined(linkedList) && !linkedList.isEmpty()) {
        // 遍历链表中的数据，将链表中的数据放进valuePairs中
        let current = linkedList.getHead();
        while (current !== null) {
          valuePairs.push(current.val);
          current = current.next;
        }
      }
    }
    return valuePairs;
  };
}
