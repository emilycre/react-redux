import { createStore } from 'redux';
import reducer from './reducers/lunchReducer';
import {
  addDrink,
  addSandwich,
  addChips,
  removeDrink,
  removeSandwich,
  removeChips,
  removeAll
} from './actions/lunchActions';

const store = createStore(reducer);

store.dispatch(addDrink('Ice Tea'));

console.log('Added your drink.', store.getState());

store.dispatch(addSandwich('Veggie'));

console.log('Added your sandwich.', store.getState());

store.dispatch((addChips('Pop Chips')));

console.log('Added your chips.', store.getState());

store.dispatch(removeDrink('Iced Tea'));

console.log('Removed your drinks.', store.getState());

store.dispatch(removeSandwich('Veggie'));

console.log('Removed your sandwich.', store.getState());

store.dispatch(removeChips('Pop Chips'));

console.log('Removed your chips.', store.getState());

store.dispatch(removeAll());
