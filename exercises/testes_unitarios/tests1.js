const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

// 1- Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
const expected = myRemove([1, 2, 3, 4], 3);
assert.deepStrictEqual(expected, [1, 2, 4], 'must return it  whitout the item parameter');

// 2- Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notStrictEqual(expected, [1, 2, 3, 4], 'it needs to be different');

// 3- Verifique se o array passado por parâmetro não sofreu alterações
assert.strictEqual(expected, expected, 'it needs to be the same');

// 4- Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
const requiredArr = myRemove([1, 2, 3, 4], 5);
assert.deepStrictEqual(requiredArr, [1, 2, 3, 4], 'it needs to be [1, 2, 3, 4]');