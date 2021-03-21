/*
 * @Author: 廉恒凯
 * @Date: 2021-03-11 20:51:51
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-21 17:40:43
 * @Description: file content
 */
export default class TreeNode<K> {
  public left: TreeNode<K> | null;

  public right: TreeNode<K> | null;

  public val: K;

  constructor(key: K) {
    this.left = null;
    this.right = null;
    this.val = key;
  }
}
