import {
  createPost,
  CREATE_POST,
  deletePost,
  DELETE_POST,
  updatePost,
  UPDATE_POST
} from './postActions';

describe('Post Actions', () => {
  it('Creates a create post action', () => {
    expect(createPost('Look, a post.', 'So sleepy.')).toEqual({
      type: CREATE_POST,
      payload: { title: 'Look, a post.', body: 'So sleepy.' }
    });
  });

  it('Creates a delete post action', () => {
    expect(deletePost(0)).toEqual({
      type: DELETE_POST,
      payload: 0
    });
  });

  it('Creates an update post action', () => {
    expect(updatePost(0, 'Still pretty sleepy.')).toEqual({
      type: UPDATE_POST,
      payload: {id: 0, body: 'Still pretty sleepy.'}
    });
  });
});
