import RecentCounter from './index';

describe('lasted requets ', () => {
  test('get right counts when t = 3000 and the params is wantonly numbers', () => {
    const recentCounter: RecentCounter = new RecentCounter();
    expect(recentCounter.ping(1)).toBe(1);
    expect(recentCounter.ping(100)).toBe(2);
    expect(recentCounter.ping(3001)).toBe(3);
    expect(recentCounter.ping(3002)).toBe(3);
  });
});
