function addProduct(product) {
  return {
    type: 'ADD_PRODUCT',
    payload: product,
  };
}

function addItem(item) {
  return {
    type: 'ADD_ITEM',
    payload: item,
  };
}

function removeItem(item) {
  return {
    type: 'REMOVE_ITEM',
    payload: item,
  };
}

export default {
  addProduct,
  addItem,
  removeItem,
};
