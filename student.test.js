const { calculateAverage, getGrade, isPassed } = require('./student');

test('calculate average of scores', () => {
  expect(calculateAverage([10, 20, 30])).toBe(20);
});

test('returns correct grade', () => {
  expect(getGrade(85)).toBe('A');
  expect(getGrade(65)).toBe('B');
  expect(getGrade(45)).toBe('C');
  expect(getGrade(30)).toBe('F');
});

test('checks if student passed', () => {
  expect(isPassed(50)).toBe(true);
  expect(isPassed(40)).toBe(false);
});

test('average of empty array is 0', () => {
  expect(calculateAverage([])).toBe(0);
});

test('handles single score', () => {
  expect(calculateAverage([100])).toBe(100);
});