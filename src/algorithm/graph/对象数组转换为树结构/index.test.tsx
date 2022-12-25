/*
 * @Author: 廉恒凯
 * @Date: 2021-01-23 11:27:30
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-01-23 17:50:35
 * @Description: file content
 */
import { Item, print, print2, print3 } from './index';

const target: Item[] = [
  {
    id: 1,
    pid: 0,
    name: 'body',
    children: [
      {
        id: 2,
        pid: 1,
        name: 'title',
        children: [{ id: 3, pid: 2, name: 'div', children: [] }],
      },
      { id: 5, pid: 1, name: 'title', children: [] },
    ],
  },
];

function create() {
  return [
    {
      id: 1,
      pid: 0,
      name: 'body',
    },
    {
      id: 2,
      pid: 1,
      name: 'title',
    },
    {
      id: 5,
      pid: 1,
      name: 'title',
    },
    {
      id: 3,
      pid: 2,
      name: 'div',
    },
  ];
}

describe('arrayToTree', () => {
  let source: Item[];
  beforeEach(() => {
    source = create();
  });

  test('array to tree use ', () => {
    expect(print(source)).toEqual(target);
    expect(print2(source)).toEqual(target);
    expect(print3(source)).toEqual(target);
  });
});
