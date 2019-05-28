import reducer from './postReducer';
import {
  createPost,
  deletePost,
  updatePost
} from '../actions/postActions';

describe('Post Reducer', () => {
  it('Handles the CREATE_POST', () => {
    const newState = reducer([], createPost('Look, a post.', 'Very neat.'));
    
    expect(newState).toEqual([
      { title: 'Look, a post.', body: 'Very neat.'}
    ]);
  });

  it('Handles the DELETE_POST', () => {
    const initialState = [
      { title: 'A post.', body: 'Super neat.'},
      { title: 'Another post.', body: 'Cool, cool.'},
      { title: 'A third post.', body: 'Wow.'}
    ];
    const newState = reducer(initialState, deletePost(1));

    expect(newState).toEqual([
      { title: 'A post.', body: 'Super neat.'},
      { title: 'A third post.', body: 'Wow.'}
    ]);
  });

  it('Handles the UPDATE_POST action', () => {
    const initialState = [
      { title: 'A post.', body: 'Super neat.'},
      { title: 'Another post.', body: 'Cool, cool.'},
      { title: 'A third post.', body: 'Wow.'}
    ];
    const newState = reducer(initialState, updatePost(1, 'U P D A T E.'));

    expect(newState).toEqual([
      { title: 'A post.', body: 'Super neat.'},
      { title: 'Another post.', body: 'U P D A T E.'},
      { title: 'A third post.', body: 'Wow.'}
    ]);
  });
})
