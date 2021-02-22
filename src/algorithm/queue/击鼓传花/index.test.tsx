/*
 * @Author: 廉恒凯
 * @Date: 2021-02-21 21:01:12
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-02-22 21:15:03
 * @Description: file content
 */

import passFlower from './index';

it('when loopNum is seven, sansa should win', () => {
  const names = ['snow', 'john', 'alia', 'sansa', 'blue'];
  const winner = passFlower(names, 7);
  expect(winner).toBe('sansa');
});
