const sum = require('./sum')

describe('Soma dois numeros', () => {
  it('Somar 4 e 5', () => {
    expect(sum(4, 5)).toEqual(9);
  });  
    it('Somar 0 e 0', () => {
      expect(sum(0, 0)).toEqual(0);
    });
    it("Exibe mensagem de erro caso seja passada uma string", () => {
      expect(() => sum(4, '5')).toThrow('parameters must be numbers')
    })
  });

