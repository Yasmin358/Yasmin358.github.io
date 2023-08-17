const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');
const {saveItem} = require('../helpers/saveCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it ('Teste se, ao executar a função getSavedCartItems, o método localStorage.getItem é chamado', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
  });
  
  it ('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o `cartItems` como parâmetro', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  });
  
 
  it ('Teste o retorno da função getSavedCartItems', () => {
    expect(getSavedCartItems()).toBe(localStorage.getItem('cartItems'));
  });

});
