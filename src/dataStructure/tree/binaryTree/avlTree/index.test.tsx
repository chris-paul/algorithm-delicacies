/*
 * @Author: 廉恒凯
 * @Date: 2021-03-21 16:19:43
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-21 20:02:21
 * @Description: file content
 */
/*
 * @Author: 廉恒凯
 * @Date: 2021-03-14 10:18:38
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-14 21:28:58
 * @Description: file content
 */

import AVLTree from './index';

describe('BreathFirst Search', () => {
  test('BreathFirst Search', () => {
    const avlTree = new AVLTree();

    /**
     *
     *              30
     *           /    \
     *         12      40
     *         / \     /  \
     *        19 21   35   45
     *               /  \  / \
     *               32 3842 47
     */
    avlTree.insert(30);
    avlTree.insert(20);
    avlTree.insert(40);
    avlTree.insert(19);
    avlTree.insert(21);
    avlTree.insert(35);
    avlTree.insert(45);
    avlTree.insert(32);
    avlTree.insert(38);
    avlTree.insert(42);
    avlTree.insert(47);
    expect(avlTree.preOrderTraverse()).toEqual([
      30,
      20,
      19,
      21,
      40,
      35,
      32,
      38,
      45,
      42,
      47,
    ]);
    avlTree.remove(40);

    expect(avlTree.preOrderTraverse()).toEqual([
      30,
      20,
      19,
      21,
      42,
      35,
      32,
      38,
      45,
      47,
    ]);
  });
});
