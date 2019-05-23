import { getPosts, getPost } from './postSelectors';

describe('Post Selectors', () => {
  it('Gets all posts', () => {
    const state = {
      posts: [
        { title: 'Hello.', body: 'Neat.' },
        { title: 'Testing...', body: 'Yes?' }
      ]
    };

    expect(getPosts(state)).toEqual([
      { id: 0, title: 'Hello.', body: 'Neat.' },
      { id: 1, title: 'Testing...', body: 'Yes?' }
    ]);
  });

  it('Gets a post by index', () => {
    const state = {
      posts: [
        { title: 'Another one.', body: 'Yep.' },
        { title: 'Still testing.', body: '...' }
      ]
    };

    expect(getPost(state, 0)).toEqual({ id: 0, title: 'Another one.', body: 'Yep.' });
  });
});
