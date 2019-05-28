import React from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';

function Comment({ id, comment, deleteComment }) {
  return (
    <section>
      <p>{comment}</p>
      <FaTrashAlt onClick={deleteComment.bind(null, id)} />
    </section>
  );
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired
};

export default Comment;
