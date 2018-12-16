import {
  isEmpty,
  isNil,
  median,
  firstGenre,
  genresAsText,
  stringifyIds,
} from '../utils';

test('isEmpty returns empty for arrays, strings and nil values', () => {
  expect(isEmpty([])).toBe(true);
  expect(isEmpty('')).toBe(true);
  expect(isEmpty(null)).toBe(true);
  expect(isEmpty(undefined)).toBe(true);
  expect(isEmpty([''])).toBe(false);
  expect(isEmpty('a')).toBe(false);
  expect(isEmpty(NaN)).toBe(false);
});

test('isNil returns true for null and undefined', () => {
  expect(isNil(null)).toBe(true);
  expect(isNil(undefined)).toBe(true);
  expect(isNil({})).toBe(false);
  expect(isNil('')).toBe(false);
  expect(isNil(1)).toBe(false);
  expect(isNil([])).toBe(false);
  expect(isNil(void 0)).toBe(true);
});

test('median returns the median of a set of numbers', () => {
  expect(median([1, 2, 3])).toBe(2);
  expect(median([1, 2, 4, 4])).toBe(3);
  expect(median([3, 2, 1])).toBe(2);
  expect(median([4, 1, 2, 4])).toBe(3);
  expect(median([-100, 0, -3, 2])).toBe(-1.5);
});

test('returns only one genre', () => {
  expect(firstGenre('War, Action')).toEqual('War');
  expect(firstGenre('War, Action, Drama')).toEqual('War');
  expect(firstGenre('  War ')).toEqual('War');
  expect(firstGenre('TV Movie,Adventure')).toEqual('TV Movie');
  expect(firstGenre('TV Movie-Adventure')).toEqual('TV Movie');
  expect(firstGenre('TV Movie-Adventure')).toEqual('TV Movie');
  expect(firstGenre('TV Movie$Adventure')).toEqual('TV Movie');
});

test('returns an array of genres as a comma separated list', () => {
  expect(genresAsText([])).toEqual('');
  expect(genresAsText([{ name: 'genreA' }])).toEqual('genreA');
  expect(genresAsText([{ name: 'genreA' }, { name: 'genreB' }])).toEqual(
    'genreA, genreB',
  );
});

test('stringifyIds converts integer ids into string IDs', () => {
  expect(stringifyIds({ id: 1 })).toEqual({ id: '1' });
  expect(
    stringifyIds({ id: 1, a: 3, inner: { id: 2, deeper: { id: 3, c: 5 } } }),
  ).toEqual({ id: '1', a: 3, inner: { id: '2', deeper: { id: '3', c: 5 } } });
});
