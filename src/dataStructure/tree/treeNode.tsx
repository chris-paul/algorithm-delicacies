/*
 * @Author: 廉恒凯
 * @Date: 2021-03-11 20:51:51
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-11 21:03:17
 * @Description: file content
 */
export default class TreeNode<K> {
  public left: TreeNode<K> | undefined;

  public right: TreeNode<K> | undefined;

  public val: K;

  constructor(public key: K) {
    this.left = undefined;
    this.right = undefined;
    this.val = key;
  }
}
