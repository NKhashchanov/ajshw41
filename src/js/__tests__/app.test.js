import number from '../app';

test('should number', () => {
  const result = number(5);
  expect(result).toBe(5);
});

test('should 8', async () => {
  try {
    await number('0755');
  } catch (e) {
    expect(e).toMatch('Аргумент не является числом');
  }
});

test('should 16', async () => {
  try {
    await number('0xFFFFFFFFFFFFFFFFF');
  } catch (e) {
    expect(e).toMatch('Аргумент не является числом');
  }
});

test('should error', async () => {
  try {
    await number('test');
  } catch (e) {
    expect(e).toMatch('Аргумент не является числом');
  }
});
