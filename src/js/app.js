export default function number(data) {
  try {
    if (typeof data === 'number' && data === +parseInt(data, 0).toString(10)) {
      return data;
    }
    throw new Error('Аргумент не является числом');
  } catch (err) {
    console.log(err);
  }
  return false;
}
number(5);
