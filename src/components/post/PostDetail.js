import React from 'react';
import PropTypes from 'prop-types';
import CreateComment from '../../containers/comment/CreateComment'
import CommentsByPostId from '../../containers/comment/CommentByPostId';

function PostDetail({ post }) {
  const paras = post.body.split('\n').map((p, i) => (
    <p key={i}>{p}</p>
  ));
  return (
    <section>
      <h2>{post.title}</h2>
      {paras}
      <CommentsByPostId postId={post.id} />
      <CreateComment postId={post.id} />
    </section>
  );
}

PostDetail.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default PostDetail;
