require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const { listProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Verefica se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  
  it('Verefica se o fetch foi chamado', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  
  it('Verefica se o fetch foi chamado com o url correto', async () => {
    await fetchProducts('computador');
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toHaveBeenCalledWith(url);
  });
  
  it('Verefica se o retorno da função fetchProducts está correto', async () => {
    const result = await fetchProducts('computador');
    expect(result).toEqual(computadorSearch);
  });
  
  it('Verefica se o retorno da função fetchProducts sem argumento é um erro', async () => {
    const result = await fetchProducts();
    expect(result).toEqual(new Error('You must provide an url'));
  });
});

describe('2 - Teste a função listProducts', () => {
  it('Verefica se listProducts é uma função', () => {
    expect(typeof listProducts).toBe('function');
  });
  
  it('Verefica se o fetch foi chamado', async () => {
    await listProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  
  it('Verefica se o fetch foi chamado com o url correto', async () => {
    await listProducts('computador');
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('Verefica se o retorno da função fetchProducts sem argumento é um erro', async () => {
    const result = await listProducts();
    expect(result).toEqual(new Error('You must provide an url'));
  });
});
