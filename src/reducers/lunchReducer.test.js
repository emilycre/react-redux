import reducer from './lunchReducer.js';
import {
  addDrink,
  removeDrink,
  addSandwich,
  removeSandwich,
  addChips,
  removeChips
} from '../actions/lunchActions';

describe('Lunch Reducer', () => {
  it('Handles the ADD_DRINK action', () => {
    const initialState = {
      drink: null
    };

    const updatedState = reducer(initialState, addDrink('Iced Tea'));

    expect(updatedState).toEqual({
      drink: 'Iced Tea'
    });
  });

  it('Handles the ADD_SANDWICH action', () => {
    const initialState = {
      sandwich: null
    };

    const updatedState = reducer(initialState, addSandwich('Veggie'));

    expect(updatedState).toEqual({
      sandwich: 'Veggie'
    });
  });

  it('Handles the ADD_CHIPS action', () => {
    const initialState = {
      chips: null
    };

    const updatedState = reducer(initialState, addChips('Pop Chips'));

    expect(updatedState).toEqual({
      chips: 'Pop Chips'
    });
  });

  it('Handles the REMOVE_DRINK action', () => {
    const initialState = {
      drink: 'Iced Tea'
    };

    const updatedState = reducer(initialState, removeDrink());

    expect(updatedState).toEqual({
      drink: null
    });
  });

  it('Handles the REMOVE_SANDWICH action', () => {
    const initialState = {
      sandwich: 'Veggie'
    };

    const updatedState = reducer(initialState, removeSandwich());

    expect(updatedState).toEqual({
      sandwich: null
    });
  });

  it('Handles the REMOVE_CHIPS action', () => {
    const initialState = {
      chips: 'Pop Chips'
    };

    const updatedState = reducer(initialState, removeChips());

    expect(updatedState).toEqual({
      chips: null
    });
  });
});
