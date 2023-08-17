require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');
  
describe('1 - Teste a função fetchItem', () => {
  it('Verefica se fetchProducts é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  
  it('Verefica se o fetch foi chamado', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  
  it('Verefica se o fetch foi chamado com o url correto', async () => {
    await fetchItem('MLB1615760527');
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(fetch).toHaveBeenCalledWith(url);
  });
  
  it('Verefica se o retorno da função fetchItem está correto', async () => {
    const result = await fetchItem('MLB1615760527');
    expect(result).toEqual(item);
  });
  
  it('Verefica se o retorno da função fetchItem sem argumento é um erro', async () => {
    const result = await fetchItem();
    expect(result).toEqual(new Error('You must provide an url'));
  });
});
