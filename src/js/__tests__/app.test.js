import number from '../app';

test('should number', () => {
  const result = number(5);
  expect(result).toBe(5);
});

test('should error', async () => {
  try {
    await number('test');
  } catch (e) {
    expect(e).toMatch('Аргумент не является числом');
  }
});
