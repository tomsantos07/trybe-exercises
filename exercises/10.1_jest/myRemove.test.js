const myRemove = require('./myRemove')

describe('Verifica retorno esperado do array', () => {
    it('Verificar se myRemove recebe um array arr e retorna uma cópia sem o elemento, caso ja exista', () => {
            expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    it('Verifica se a chamada myRemove não retorna o array [1, 2, 3, 4] ', () => {
        it('Verificar se não retorna o array', () => {
            expect(myRemove([1, 2, 3, 4], 3)).toEqual(expect.not.arrayContaining([1, 2, 3, 4]))
        });
    });
})