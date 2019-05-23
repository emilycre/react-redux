import { createStore } from 'redux';

import {
  ADD_DRINK,
  ADD_SANDWICH,
  ADD_CHIPS,
  REMOVE_DRINK,
  REMOVE_SANDWICH,
  REMOVE_CHIPS
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
