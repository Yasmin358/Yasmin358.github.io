const fetchProducts = async (texto) => {
   const url = `https://api.mercadolibre.com/sites/MLB/search?q=${texto}`;
   try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

const listProducts = async (texto) => {
  const productsList = [];
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${texto}`;
   try {
    const response = await fetch(url);
    const data = await response.json();
    data.results.forEach((element) => {
      const item = { sku: element.id, name: element.title, image: element.thumbnail };
      productsList.push(item);
    });
    return productsList;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
    listProducts,
  };
}
