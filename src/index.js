import { createStore } from 'redux';
import {
  ADD_DRINK,
  addDrink,
  ADD_SANDWICH,
  addSandwich,
  ADD_CHIPS,
  addChips,
  REMOVE_DRINK,
  removeDrink,
  REMOVE_SANDWICH,
  removeSandwich,
  REMOVE_CHIPS,
  removeChips
} from './actions/lunchActions';

const initialState = {
  drink: null,
  sandwich: null,
  chips: null
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, drink: action.payload };
    case ADD_SANDWICH:
      return { ...state, sandwich: action.payload };
    case ADD_CHIPS:
      return { ...state, chips: action.payload };
    case REMOVE_DRINK:
      return { ...state, drink: null };
    case REMOVE_SANDWICH:
      return { ...state, sandwich: null };
    case REMOVE_CHIPS:
      return { ...state, chips: null};
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch({
  type: addDrink,
  payload: 'Iced Tea'
});

console.log('Added your drink.', store.getState());

store.dispatch({
  type: addSandwich,
  payload: 'Veggie + Hummus'
});

console.log('Added your sandwich.', store.getState());

store.dispatch({
  type: addChips,
  payload: 'Pop Chips'
});

console.log('Added your chips.', store.getState());

store.dispatch({
  type: removeDrink,
  payload: 'Iced Tea'
});

console.log('Removed your drinks.', store.getState());

store.dispatch({
  type: removeSandwich,
  payload: 'Veggie + Hummus'
});

console.log('Removed your sandwich.', store.getState());

store.dispatch({
  type: removeChips,
  payload: 'Pop Chips'
});

console.log('Removed your chips.', store.getState());
