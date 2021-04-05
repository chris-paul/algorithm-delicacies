/*
 * @Author: 廉恒凯
 * @Date: 2021-03-23 20:52:00
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-04-05 22:03:18
 * @Description: file content
 */
/* eslint-disable @typescript-eslint/no-parameter-properties */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-expressions */
export default class Graph {
  // 存储图的顶点
  private vertices: Array<number | string> = [];

  // 存储临接表
  private adjList: Map<string | number, Array<string | number>> = new Map();

  constructor(private isDirected: boolean = false) {}

  // 添加顶点
  addVertex = (v: string | number): void => {
    // 顶点不存在于图中
    if (!this.vertices.includes(v)) {
      // 将该顶点添加到顶点列表中
      this.vertices.push(v);
      // 在临接表中设置顶点v作为键，对应的字典值为一个空数组
      this.adjList.set(v, []);
    }
  };

  // 添加线，连接顶点
  addEdge = (v: string | number, w: string | number): void => {
    // 添加顶点之前需要验证顶点v和w是否在图中，不存在就追加
    if (!this.adjList.get(v)) {
      this.addVertex(v);
    }
    if (!this.adjList.get(w)) {
      this.addVertex(w);
    }

    // 将w加入到v的临接表中，我们就得到了一条来自顶点v到顶点w的边
    this.adjList.get(v)?.push(w);
    if (!this.isDirected) {
      // 如果是无向图则需要添加一条自w到v的边
      this.adjList.get(w)?.push(v);
    }
  };

  // 获取顶点列表
  getVertices = (): Array<string | number> => {
    return this.vertices;
  };

  // 获取临接表
  getAdjList = (): Map<string | number, Array<string | number>> => {
    return this.adjList;
  };
}
