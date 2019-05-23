import { getComments } from './commentSelectors';

describe('Comment Selectors', () => {
  it('Gets all comments by post ID', () => {
    const state = {
      comments: {
        3: ['Hello.', 'Hi.']
      }
    };

    expect(getComments(state, 3)).toEqual(['Hello.', 'Hi.']);
  });
});
