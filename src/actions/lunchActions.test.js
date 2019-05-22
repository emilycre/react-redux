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
} from './lunchActions';

describe('Lunch Actions', () => {
  it('It adds a drink', () => {
    expect(addDrink('Water.')).toEqual({
      type: ADD_DRINK,
      payload: 'Water.'
    });
  });

  it('It adds a sandwich', () => {
    expect(addSandwich('Veggie.')).toEqual({
      type: ADD_SANDWICH,
      payload: 'Veggie.'
    });
  });

  it('It adds chips', () => {
    expect(addChips('Pop chips.')).toEqual({
      type: ADD_CHIPS,
      payload: 'Pop chips.'
    });
  });

  it('It removes a drink', () => {
    expect(removeDrink('Water.')).toEqual({
      type: REMOVE_DRINK,
      payload: 'Water.'
    });
  });

  it('It removes a sandwich', () => {
    expect(removeSandwich('Veggie.')).toEqual({
      type: REMOVE_SANDWICH,
      payload: 'Veggie.'
    });
  });

  it('It removes chips', () => {
    expect(removeChips('Pop chips.')).toEqual({
      type: REMOVE_CHIPS,
      payload: 'Pop chips.'
    });
  });
});

