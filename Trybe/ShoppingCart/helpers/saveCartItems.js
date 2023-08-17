const saveCartItems = (cartItem) => { 
    localStorage.setItem('cartItems', cartItem);
};

const saveItem = (lista) => { 
  localStorage.setItem('cartItems', JSON.stringify(lista));
};

if (typeof module !== 'undefined') {
  module.exports = {
  saveCartItems, 
  saveItem,
  };
}
