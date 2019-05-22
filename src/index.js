import { createStore } from 'redux';
import { ADD_DRINK, ADD_SANDWICH, ADD_CHIPS, REMOVE_DRINK, REMOVE_SANDWICH, REMOVE_CHIPS} from './actions/lunchActions';

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
  type: ADD_DRINK,
  payload: 'Iced Tea'
});

console.log('Added your drink.', store.getState());

store.dispatch({
  type: ADD_SANDWICH,
  payload: 'Veggie + Hummus'
});

console.log('Added your sandwich.', store.getState());

store.dispatch({
  type: ADD_CHIPS,
  payload: 'Pop Chips'
});

console.log('Added your chips.', store.getState());

store.dispatch({
  type: REMOVE_DRINK,
  payload: 'Iced Tea'
});

console.log('Removed your drinks.', store.getState());

store.dispatch({
  type: REMOVE_SANDWICH,
  payload: 'Veggie + Hummus'
});

console.log('Removed your sandwich.', store.getState());

store.dispatch({
  type: REMOVE_CHIPS,
  payload: 'Pop Chips'
});

console.log('Removed your chips.', store.getState());
