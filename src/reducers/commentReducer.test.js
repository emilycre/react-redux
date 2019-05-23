import reducer from './commentReducer';
import { createComment, deleteComment } from '../actions/commentActions';
import { deletePost } from '../actions/postActions';

describe('Comment Reducer', () => {
  it('Handles CREATE_COMMENT', () => {
    const newState = reducer({}, createComment(1, 'Neat.'));

    expect(newState).toEqual({
      1: ['Neat.']
    });
  });

  it('Handles DELETE_COMMENT', () => {
    const initialState = {
      1: ['Cool.', 'Very cool.']
    };
    const newState = reducer(initialState, deleteComment(1, 0));

    expect(newState).toEqual({
      1: ['Very cool.']
    });
  });

  it('Handles DELETE_POST', () => {
    const initialState = {
      1: ['Cool.', 'Super cool.'],
      2: ['What.']
    };
    const newState = reducer(initialState, deletePost(1));

    expect(newState).toEqual({
      2: ['What.']
    });
  });
});
