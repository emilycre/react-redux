import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

function Post({ post, deletePost }) {
  return (
    <>
      <Link to={`/posts/${post.id}`}>
        {post.title}
      </Link>
      <FaTrashAlt onClick={deletePost.bind(null, post.id)} />
    </>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

export default Post;
