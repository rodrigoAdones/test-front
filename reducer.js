import { combineReducers } from 'redux';

const initialState = {
  products: [],
  basket: {
    items: [],
    total: 0,
  }
};

function productsReducer( state = initialState.products, action = {}){
  switch (action.type) {
    case 'ADD_PRODUCT':
      return state.concat(action.payload);
    default:
      return state;
  }
}

function itemBasketReducer( state = initialState.basket.items, action = {}){
  switch (action.type) {
    case 'ADD_ITEM':
      return state.concat(action.payload);
    case 'REMOVE_ITEM':
      return [...state.slice(0, action.payload.index), ...state.slice(action.payload.index + 1)]
    default:
      return state;
  }
}

function totalBasketReducer( state = initialState.basket.total, action = {}){
  switch (action.type) {
    case 'ADD_ITEM':
      return state + action.payload.price;
    case 'REMOVE_ITEM':
      return state - action.payload.price;
    default:
      return state;
  }
}

const basketReducer = combineReducers({
  items: itemBasketReducer,
  total: totalBasketReducer,
});

const reducer = combineReducers({
  products: productsReducer,
  basket: basketReducer,
});

export default reducer;
