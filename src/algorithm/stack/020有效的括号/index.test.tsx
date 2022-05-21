import { validBracketsByMap, validBrackets } from './index';

describe('validBrackets', () => {
  test('nomal close brackest', () => {
    expect(validBrackets('()')).toBeTruthy();
    expect(validBrackets('[]')).toBeTruthy();
    expect(validBrackets('{}')).toBeTruthy();
  });

  test('params is blank string ', () => {
    expect(validBrackets('')).toBeTruthy();
  });

  test('complex brackest match test', () => {
    expect(validBrackets('(]')).toBeFalsy();
    expect(validBrackets('{[]}')).toBeTruthy();
    expect(validBrackets('()[]{}')).toBeTruthy();
  });
});

describe('validBracketsByMap', () => {
  test('nomal close brackest', () => {
    expect(validBracketsByMap('()')).toBeTruthy();
    expect(validBracketsByMap('[]')).toBeTruthy();
    expect(validBracketsByMap('{}')).toBeTruthy();
  });

  test('params is blank string ', () => {
    expect(validBracketsByMap('')).toBeTruthy();
  });

  test('complex brackest match test', () => {
    expect(validBracketsByMap('(]')).toBeFalsy();
    expect(validBracketsByMap('{[]}')).toBeTruthy();
    expect(validBracketsByMap('()[]{}')).toBeTruthy();
  });
});
