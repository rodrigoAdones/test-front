const initialState = {
  products: [],
  basket: {
    items: [],
    total: 0,
  }
};

function productReducer( state = initialState.products, action = {}){
  switch (action.type) {
    case 'ADD_PRODUCT':
      return state.concat(action.payload);
    default:
      return state;
  }
}

function itemReducer( state = initialState.basket.items, action = {}){
  switch (action.type) {
    case 'ADD_PRODUCT':
      return state + action.payload.price;
    default:
      return state;
  }
}
