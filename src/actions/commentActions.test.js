import {
  createComment,
  CREATE_COMMENT,
  deleteComment,
  DELETE_COMMENT
} from './commentActions';

describe('Comment Action', () => {
  it('Creates a CREATE_COMMENT', () => {
    expect(createComment(0, 'My comment.')).toEqual({
      type: CREATE_COMMENT,
      payload: { postId: 0, comment: 'My comment.' }
    });
  });

  it('Creates a DELETE_COMMENT', () => {
    expect(deleteComment(0, 1)).toEqual({
      type: DELETE_COMMENT,
      payload: { postId: 0, commentId: 1 }
    });
  });
})
