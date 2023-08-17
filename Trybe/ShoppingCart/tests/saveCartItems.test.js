const localStorageSimulator = require('../mocks/localStorageSimulator');
const {saveCartItems} = require('../helpers/saveCartItems');
const {saveItem} = require('../helpers/saveCartItems');
localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Teste se, ao executar a função saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toBeCalled();
  });
  
  it('Teste se, ao executar a função saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros', () => {
    const param2 = '<ol><li>Item</li></ol>';
    saveCartItems(param2);
    expect(localStorage.setItem).toBeCalledWith('cartItems', param2);
  });
  
  it('Teste se o retorno da função saveCartItems sem argumento é undefined', () => {
    const result = saveCartItems();
    expect(result).toBeUndefined();
  });
});

describe('3 - Teste a função saveCartItem', () => {
  const obj = { sku: 'MLB1615760527', name: 'Cpu Pc  Torre Core I5 3470 3.20ghz 8gb Ssd 240gb Com Nf', salePrice: 1399 };
   
  it('Teste se, ao executar a função saveCartItem com um objeto com parametro o método localStorage.setItem é chamado', () => {    
    saveItem(obj);
    expect(localStorage.setItem).toBeCalled();
  });
  
  it('Teste se, ao executar a função saveCartItem com um argumento o método localStorage.setItem é chamado com dois parâmetros', () => {
    const lista = [];
    lista.push(obj);
    saveItem(lista);
    expect(localStorage.setItem).toBeCalledWith('cartItems', JSON.stringify(lista));
  });
});
