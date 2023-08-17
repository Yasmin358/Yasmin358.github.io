const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const lista = [];

function cartItemClickListener(event, sku) {
  for (let index = 0; index < lista.length; index += 1) {
    if (lista[index].sku === sku) {
      lista.splice(index, 1);
    } 
  }
  saveItem(lista);
  event.target.remove(); 
}

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', (event) => { cartItemClickListener(event, sku); });
  return li;
};

const createList = async (search) => {
  const result = await listProducts(search);
  const section = document.querySelector('.items');
  result.forEach((element) => {
    const item = createProductItemElement(element);
    section.appendChild(item);
  });
};

 const addCartItem = async (item) => {
    const search = await fetchItem(getSkuFromProductItem(item.target.parentElement));
        const sku = search.id;
        const name = search.title;
        const salePrice = search.price;
        const obj = { sku, name, salePrice };
        console.log(obj);
        const ol = document.querySelector('.cart__items');
        const itemCart = createCartItemElement(obj);
        ol.appendChild(itemCart);
        
        lista.push(obj);
        saveItem(lista);
 };
const buttonClick = () => {
const cartItems = document.getElementsByClassName('item__add');
for (let index = 0; index < cartItems.length; index += 1) {
    cartItems[index].addEventListener('click', (add) => {  
      addCartItem(add);
    });
  }
};

const getItemsLocalStorage = () => {
  if (getSavedCartItems() != null) {
    const listaLocal = JSON.parse(getSavedCartItems());
    const ol = document.querySelector('.cart__items');
    if (listaLocal != null) { 
    listaLocal.forEach((index) => {
    const itemCart = createCartItemElement(index);
    ol.appendChild(itemCart);
    });
    }
  } 
};

function clearList() {
  const itemsCart = document.getElementsByClassName('cart__item');
  while (itemsCart.length > 0) {
    itemsCart[0].parentNode.removeChild(itemsCart[0]);
  }
  localStorage.clear();
}

const botaoLimpar = () => {
    const buttonClear = document.getElementsByClassName('empty-cart');
    buttonClear[0].addEventListener('click', () => { clearList(); });
};

window.onload = () => {  
  createList('computador');
  getItemsLocalStorage();
 
 setTimeout(() => {
  buttonClick();
  }, 1000);  
  
  botaoLimpar(); 
};
